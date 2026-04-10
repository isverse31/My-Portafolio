// pages/chat.js
import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import styles from '../styles/Chatbot.module.css';

// Importación dinámica para evitar problemas de SSR
const ChatBot = dynamic(() => import('react-simple-chatbot'), {
  ssr: false,
  loading: () => <div className={styles.chatbotLoading}>Cargando chat...</div>
});

function ChatbotComponent() {
  const [key, setKey] = useState(1);

  const handleEnd = ({ steps, values }) => {
    setTimeout(() => {
      setKey(prevKey => prevKey + 1);
    }, 1000);
  };

  const steps = [
    {
      id: '1',
      message: '¡Hola! Soy Darío, tu asistente virtual. Puedes preguntarme cualquier cosa sobre mí. 😊',
      trigger: 'userInput',
    },
    {
      id: 'userInput',
      user: true,
      validator: (value) => {
        if (!value || value.trim().length === 0) {
          return 'Por favor, escribe algo para continuar.';
        }
        if (value.length > 500) {
          return 'El mensaje es demasiado largo. Máximo 500 caracteres.';
        }
        return true;
      },
      trigger: 'processing',
    },
    {
      id: 'processing',
      component: <ProcessingStep />,
      asMessage: true,
      trigger: 'botResponse',
    },
    {
      id: 'botResponse',
      component: <BotResponse />,
      asMessage: true,
      trigger: 'followUp',
    },
    {
      id: 'followUp',
      message: '¿Hay algo más que te gustaría saber? 🤔',
      trigger: 'userInput',
    },
  ];

  return (
    <div className={styles.chatbotContainer}>
      <div className={styles.chatbotWrapper}>
        <ChatBot
          key={key}
          steps={steps}
          handleEnd={handleEnd}
          headerTitle="🤖 Asistente Virtual Darío"
          placeholder="Escribe tu mensaje aquí..."
          width="400px"
          height="500px"
          enableMobileAutoFocus={false}
          speechSynthesis={{ enable: false }}
          recognitionEnable={false}
          style={{
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            borderRadius: '10px',
            fontFamily: 'Arial, sans-serif',
          }}
          contentStyle={{
            height: '400px',
          }}
          inputStyle={{
            borderRadius: '20px',
            border: '1px solid #ddd',
            padding: '10px 15px',
          }}
          submitButtonStyle={{
            backgroundColor: '#007bff',
            borderRadius: '50%',
            border: 'none',
            padding: '10px',
          }}
        />
      </div>
      
      <BackgroundVideo />
    </div>
  );
}

// Componente para el video de fondo - sin cambios innecesarios
function BackgroundVideo() {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
    console.warn('No se pudo cargar el video de fondo');
  };

  if (videoError) {
    return <div className={styles.backgroundFallback} />;
  }

  return (
    <video 
      autoPlay 
      muted 
      loop 
      playsInline
      className={styles.backgroundVideo}
      onError={handleVideoError}
      preload="metadata"
    >
      <source src="/espacio2.mp4" type="video/mp4" />
      Tu navegador no soporta el elemento video.
    </video>
  );
}

// Componente simple para mostrar procesamiento
function ProcessingStep() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prevDots => {
        if (prevDots.length >= 3) return '';
        return prevDots + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.processingStep}>
      <span>Procesando tu pregunta{dots}</span>
    </div>
  );
}

// Componente para la respuesta del bot - SIN bucles
function BotResponse(props) {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const hasProcessed = useRef(false);

  useEffect(() => {
    const fetchResponse = async () => {
      // Prevenir múltiples ejecuciones
      if (hasProcessed.current) return;
      
      const userMessage = props.steps?.userInput?.value;
      
      if (!userMessage || !userMessage.trim()) {
        setError('No se recibió mensaje');
        return;
      }

      hasProcessed.current = true;
      setLoading(true);
      setError(null);

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000);

        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            message: userMessage.trim()
          }),
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }

        const data = await res.json();
        
        if (data.reply) {
          setResponse(data.reply);
        } else {
          throw new Error('Respuesta vacía');
        }

      } catch (error) {
        console.error('Error:', error);
        
        if (error.name === 'AbortError') {
          setError('Tiempo de espera agotado. Intenta de nuevo.');
        } else {
          setError('Lo siento, hubo un error al procesar tu mensaje.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchResponse();
  }, []); // Solo se ejecuta una vez

  if (error) {
    return (
      <div className={styles.errorMessage}>
        ⚠️ {error}
      </div>
    );
  }

  if (loading) {
    return (
      <div className={styles.loadingMessage}>
        Pensando...
      </div>
    );
  }

  return (
    <div className={styles.botResponse}>
      {response || 'Preparando respuesta...'}
    </div>
  );
}

export default ChatbotComponent;