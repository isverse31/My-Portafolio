import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
          <div style={{ display: 'flex', textAlign: 'left', marginTop: '20px' }}>
            <Image
              src="/yo3.jpeg" // Imagen de la carpeta public
              alt="Mi foto"
              width={180}
              height={180}
              style={{ borderRadius: '50%' }} // Hacer la imagen circular
            />
            <p style={{ marginLeft: '20px' }}>
              Hola, soy Darío, un desarrollador web y móvil con pasión por crear experiencias digitales increíbles. Me especializo en el desarrollo de aplicaciones eficientes y escalables con tecnologías modernas como React, Next.js, y más.
            </p>
          </div>
          <a href="/projects" className="btn" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#0070f3', color: '#fff', borderRadius: '5px', textDecoration: 'none', marginTop: '20px' }}>
              Ver Proyectos
          </a>
        </section>

        {/* Sección de habilidades con carrusel */}
        <section className="skills" style={{ display: 'flex', marginTop: '50px', marginLeft: '60px', padding: '0 10px' }}>
          {/* Lista de habilidades */}
          <div style={{ width: '40%' }}>
            <h2>Habilidades</h2>
            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
              <li>💻 Desarrollo Frontend con React y Next.js</li>
              <li>📱 Desarrollo de Aplicaciones Móviles</li>
              <li>🖥️ Backend con Node.js y Express</li>
              <li>📊 Bases de Datos: MySQL, MongoDB</li>
              <li>⚙️ Control de Versiones con Git y GitHub</li>
              <li>🚀 Despliegue en Vercel y Netlify</li>
              <li>Pasión por Sistemas Operativos Linux</li>
            </ul>
          </div>

          {/* Carrusel de imágenes */}
          <div style={{width: '20%' , marginLeft: '120px', height:"50px"}}>
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} height="50px">
              <div>
                <img src="/yo.jpeg" alt="Skill 1" />
                <p className="legend">Frontend Development</p>
              </div>
              <div>
                <img src="/yo2.jpg" alt="Skill 2" />
                <p className="legend">Mobile Development</p>
              </div>
              <div>
                <img src="/yo3.jpeg" alt="Skill 3" />
                <p className="legend">Backend Development</p>
              </div>
            </Carousel>
          </div>
        </section>

        {/* Sección de experiencia */}
        <section className="experience" style={{ marginTop: '50px', padding: '0 20px' }}>
          <h2>Experiencia</h2>
          <div>
            <h3>Auditoria Informática - INSTITUTO HENRY WALLON SECUNDARIA</h3>
            <p>Octubre/2023 - Diciembre/2023</p>
            <p>Se realizó un análisis de la eficacia de los controles de seguridad y la integridad de los sistemas informáticos y la infraestructura tecnológica de la institución</p>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h3>Impartición de Curso Scrum - Escuela Preparatoria Federal por Cooperación "Antonio Audirac". E.P.F.A.A.</h3>
            <p>Febrero/2024 - Abril/2024</p>
            <p>Se abordaron temas como la introducción a Scrum, roles y responsabilidades en un equipo Scrum, planificación de sprint, retrospectivas y otras prácticas ágiles. Adquirí habilidades para trabajar de manera colaborativa en un entorno ágil y mejorar la eficiencia y resultados de los proyectos.</p>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h3>Desarrollo de una aplicación móvil - Instituto Tecnológico Superior de Teziutlán</h3>
            <p>Septiembre/2023 - Diciembre/2023</p>
            <p>Desarrollé una aplicación móvil que permite a los usuarios llevar un seguimiento de sus gastos diarios, generar informes de gastos. La aplicación la creé utilizando Android Studio, Java y Firebase.</p>
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
