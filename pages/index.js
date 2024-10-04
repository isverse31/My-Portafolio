import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image'; // Importa el componente Image de Next.js

export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Portafolio</title>
        <meta name="description" content="Portafolio personal de Darío" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        {/* Sección de presentación */}
        <section className="intro" style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>Bienvenido a mi portafolio</h1>
          <div style={{ display: 'inline-block', textAlign: 'left', marginTop: '20px' }}>
            <Image 
              src="/yo.jpeg" // Imagen de la carpeta public
              alt="Foto de Darío"
              width={150} 
              height={150}
              style={{ borderRadius: '50%' }} // Hacer la imagen circular
            />
            <p style={{ marginTop: '20px' }}>
              Hola, soy Darío, un desarrollador web y móvil con pasión por crear experiencias digitales increíbles. Me especializo en el desarrollo de aplicaciones eficientes y escalables con tecnologías modernas como React, Next.js, y más.
            </p>
            <a href="/projects" className="btn" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#0070f3', color: '#fff', borderRadius: '5px', textDecoration: 'none', marginTop: '20px' }}>
              Ver Proyectos
            </a>
          </div>
        </section>

        {/* Sección de habilidades */}
        <section className="skills" style={{ marginTop: '50px', padding: '0 20px' }}>
          <h2>Habilidades</h2>
          <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
            <li>💻 Desarrollo Frontend con React y Next.js</li>
            <li>📱 Desarrollo de Aplicaciones Móviles</li>
            <li>🖥️ Backend con Node.js y Express</li>
            <li>📊 Bases de Datos: MySQL, MongoDB</li>
            <li>⚙️ Control de Versiones con Git y GitHub</li>
            <li>🚀 Despliegue en Vercel y Netlify</li>
          </ul>
        </section>

        {/* Sección de experiencia */}
        <section className="experience" style={{ marginTop: '50px', padding: '0 20px' }}>
          <h2>Experiencia</h2>
          <div>
            <h3>Desarrollador Web - Empresa XYZ</h3>
            <p>Junio 2022 - Presente</p>
            <p>He trabajado en el desarrollo de aplicaciones web interactivas para clientes, utilizando tecnologías modernas y metodologías ágiles para asegurar la entrega de productos de alta calidad.</p>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h3>Desarrollador Móvil - Empresa ABC</h3>
            <p>Agosto 2021 - Mayo 2022</p>
            <p>Desarrollé aplicaciones móviles para iOS y Android, enfocándome en la optimización del rendimiento y una experiencia de usuario intuitiva.</p>
          </div>
        </section>

        {/* Sección de contacto */}
        <section className="contact" style={{ marginTop: '50px', textAlign: 'center' }}>
          <h2>¿Interesado en trabajar conmigo?</h2>
          <a href="/contact" className="btn" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#0070f3', color: '#fff', borderRadius: '5px', textDecoration: 'none' }}>
            Contáctame
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
