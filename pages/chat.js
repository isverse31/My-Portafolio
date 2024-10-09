// pages/chat.js
import React from 'react';
import dynamic from 'next/dynamic';
import styles from '../styles/Chatbot.module.css';

// Importación dinámica para evitar problemas de SSR
const ChatBot = dynamic(() => import('react-simple-chatbot'), {
  ssr: false
});

function ChatbotComponent() {
  const [key, setKey] = React.useState(1);

  const handleEnd = ({ steps, values }) => {
    setTimeout(() => {
      setKey(prevKey => prevKey + 1);
    }, 1000);
  };

  const steps = [
    {
      id: '1',
      message: '¡Hola! Soy Darío,  un asistente virtual. Puedes preguntarme cuaquiel cosa sobre mí',
      trigger: 'userInput',
    },
    {
      id: 'userInput',
      user: true,
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
      message: '¿Hay algo más que te gustaría saber?',
      trigger: 'userInput',
    },
  ];

  return (
    <div className={styles.chatbotContainer}>
      <ChatBot
        key={key}
        steps={steps}
        handleEnd={handleEnd}
        headerTitle="Asistente Virtual Darío"
        placeholder="Escribe tu mensaje..."
        width="400px"
        enableMobileAutoFocus={false}
        style={{
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        }}
      />
    </div>
  );
}

function ProcessingStep() {
  return <div>Procesando tu pregunta...</div>;
}

function BotResponse(props) {
  const [response, setResponse] = React.useState('');
  
  React.useEffect(() => {
    async function fetchResponse() {
      if (!props.steps || !props.steps.userInput) {
        return;
      }

      const userMessage = props.steps.userInput.value;
      
      if (!userMessage) {
        return;
      }

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: userMessage }),
        });
        const data = await res.json();
        setResponse(data.reply);
      } catch (error) {
        console.error('Error:', error);
        setResponse('Lo siento, hubo un error al procesar tu mensaje.');
      }
    }
    fetchResponse();
  }, [props.steps]);

  return <div>{response || 'Pensando...'}</div>;
}

export default ChatbotComponent;