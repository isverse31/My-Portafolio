import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);  // Estado para manejar el envío
  const [isSuccess, setIsSuccess] = useState(null);  // Estado para mostrar éxito o error
  const [showError, setShowError] = useState(false);  // Estado para mostrar el mensaje de error con retraso

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);
    setIsSuccess(null);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSuccess(true);
        alert('Mensaje enviado correctamente');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setIsSuccess(false);
        setTimeout(() => {
          setShowError(true);
        }, 3000);
      }
    } catch (error) {
      setIsSuccess(false);
      setTimeout(() => {
        setShowError(true);
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contacto - Mi Portafolio</title>
        <meta name="description" content="Cómo contactarme" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginTop:'80px'}}>
        <section style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Contacto</h1>
          <p style={{ fontSize: '1.2rem', color: '#555' }}>Si deseas ponerte en contacto conmigo, aquí tienes algunas maneras de hacerlo:</p>
        </section>

        {/* Sección de contacto directo */}
        <section style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '50px' }}>
          <div style={{ textAlign: 'center' }}>
            <FaEnvelope size={40} color="#0070f3" style={{ transition: 'transform 0.3s' }} />
            <p style={{ marginTop: '10px' }}>
              <a href="mailto:darioreyea974@gmail.com" style={{ textDecoration: 'none', color: '#0070f3', fontSize: '1.2rem', fontWeight: 'bold' }}>darioreyea974@gmail.com</a>
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaWhatsapp size={40} color="#25D366" style={{ transition: 'transform 0.3s' }} />
            <p style={{ marginTop: '10px' }}>
              <a href="https://wa.me/qr/HXRDYZAYF62CM1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#25D366', fontSize: '1.2rem', fontWeight: 'bold' }}>
                231-113-9893
              </a>
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaPhone size={40} color="#0070f3" style={{ transition: 'transform 0.3s' }} />
            <p style={{ marginTop: '10px', fontSize: '1.2rem', color: '#0070f3', fontWeight: 'bold' }}>231-113-9893</p>
          </div>
        </section>

        

        {/* Formulario de contacto */}
        <section style={{ textAlign: 'center', marginBottom: '50px' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', width: '100%', maxWidth: '500px' }}>
              Nombre:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ padding: '15px', width: '100%', borderRadius: '8px', border: '1px solid #ddd', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
              />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', width: '100%', maxWidth: '500px' }}>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ padding: '15px', width: '100%', borderRadius: '8px', border: '1px solid #ddd', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
              />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', width: '100%', maxWidth: '500px' }}>
              Mensaje:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{ padding: '15px', width: '100%', borderRadius: '8px', border: '1px solid #ddd', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
              />
            </label>
            <button
              type="submit"
              style={{
                padding: '15px 30px',
                backgroundColor: '#0070f3',
                color: '#fff',
                borderRadius: '8px',
                cursor: 'pointer',
                border: 'none',
                fontSize: '1.1rem',
                transition: 'background-color 0.3s, transform 0.3s',
                transform: isSubmitting ? 'scale(0.95)' : 'scale(1)',
                opacity: isSubmitting ? 0.7 : 1,
              }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </form>

          {showError && !isSuccess && (
            <p style={{ color: 'red', marginTop: '20px' }}>Hubo un error al enviar tu mensaje. Inténtalo de nuevo más tarde.</p>
          )}
        </section>

        {/* Redes Sociales */}
        <section style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Sígueme en Redes Sociales</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '20px' }}>
            <a href="https://linkedin.com/in/dario-reyes" target="_blank" rel="noopener noreferrer" style={{ color: '#0077B5', transition: 'transform 0.3s' }}>
              <FaLinkedin size={40} onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
            </a>
            <a href="https://github.com/darioreyes" target="_blank" rel="noopener noreferrer" style={{ color: '#000', transition: 'transform 0.3s' }}>
              <FaGithub size={40} onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
