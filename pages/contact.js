import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Contact.module.css';
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const [showError, setShowError] = useState(false);

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
    <div className={styles.container}>
      <Head>
        <title>Contacto - Mi Portafolio</title>
        <meta name="description" content="Cómo contactarme" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className={styles.backgroundVideo}
      >
        <source src="/espacio2.mp4" type="video/mp4" />
      </video>

      <main className={styles.main}>
        <section className={styles.titleSection}>
          <h1>Contacto</h1>
          <p>Si deseas ponerte en contacto conmigo, aquí tienes algunas maneras de hacerlo:</p>
        </section>

        <section className={styles.contactMethods}>
          <div className={styles.contactMethod}>
            <FaEnvelope size={40} className={styles.icon} />
            <p>
              <a href="mailto:darioreyea974@gmail.com" className={styles.emailLink}>
                darioreyea974@gmail.com
              </a>
            </p>
          </div>
          <div className={styles.contactMethod}>
            <FaWhatsapp size={40} className={`${styles.icon} ${styles.whatsappIcon}`} />
            <p>
              <a 
                href="https://wa.me/qr/HXRDYZAYF62CM1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.whatsappLink}
              >
                231-113-9893
              </a>
            </p>
          </div>
          <div className={styles.contactMethod}>
            <FaPhone size={40} className={`${styles.icon} ${styles.phoneIcon}`} />
            <p className={styles.phoneNumber}>231-113-9893</p>
          </div>
        </section>

        <section className={styles.formSection}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label>Nombre:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Mensaje:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className={styles.textarea}
              />
            </div>
            <button
              type="submit"
              className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </form>

          {showError && !isSuccess && (
            <p className={styles.errorMessage}>
              Hubo un error al enviar tu mensaje. Inténtalo de nuevo más tarde.
            </p>
          )}
        </section>

        <section className={styles.socialSection}>
          <h2>Sígueme en Redes Sociales</h2>
          <div className={styles.socialLinks}>
            <a 
              href="https://linkedin.com/in/dario-reyes" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
            >
              <FaLinkedin size={40} className={`${styles.socialIcon} ${styles.linkedinIcon}`} />
            </a>
            <a 
              href="https://github.com/isverse31" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
            >
              <FaGithub size={40} className={`${styles.socialIcon} ${styles.githubIcon}`} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}