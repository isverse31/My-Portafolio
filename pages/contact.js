// pages/contact.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contacto - Mi Portafolio</title>
        <meta name="description" content="Cómo contactarme" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section>
          <h1>Contacto</h1>
          <p>Si quieres ponerte en contacto conmigo, puedes enviarme un correo a <a href="mailto:darioreyea974@gmail.com">darioreyea974@gmail.com</a>. O si lo prefieres puedes comunicarte por medio de whatsapp <a href="https://wa.me/qr/HXRDYZAYF62CM1">231-113-9893</a>.</p>
        </section>
      </main>

      <Footer />
    </>
  );
}