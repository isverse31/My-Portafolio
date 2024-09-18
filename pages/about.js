// pages/about.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre Mí - Mi Portafolio</title>
        <meta name="description" content="Información sobre [Tu Nombre]" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section>
          <h1>Sobre Mí</h1>
          <p>Hola, soy Darío, un desarrollador web con experiencia en Desarrollo web y movil. Me apasiona crear soluciones innovadoras y trabajar en proyectos desafiantes.</p>
        </section>
      </main>

      <Footer />
    </>
  );
}