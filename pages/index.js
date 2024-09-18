// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Portafolio</title>
        <meta name="description" content="Portafolio personal de [Tu Nombre]" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section className="intro">
          <h1>Bienvenido a mi portafolio</h1>
          <p>Hola, soy Darío, un desarrollador web y móvil con pasión por crear experiencias digitales increíbles.</p>
          <a href="/projects" className="btn">Ver Proyectos</a>
        </section>
      </main>

      <Footer />
    </>
  );
}
