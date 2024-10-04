import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image'; // Importa el componente Image de Next.js

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre Mí - Mi Portafolio</title>
        <meta name="description" content="Información sobre Darío" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section>
          <h1>Sobre Mí</h1>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Aquí se muestra tu imagen */}
            <Image 
              src="/yo.jpeg" // Asegúrate de colocar la imagen en la carpeta public
              alt="Foto de Darío"
              width={150} 
              height={150}
              style={{ borderRadius: '50%' }} // Hacer la imagen circular
            />
            <p style={{ marginLeft: '20px' }}>
              Hola, soy Darío, un desarrollador web con experiencia en Desarrollo web y móvil. Me apasiona crear soluciones innovadoras y trabajar en proyectos desafiantes.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
