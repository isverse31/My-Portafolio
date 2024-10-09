import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css'; // Asegúrate de tener este archivo CSS
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Home() {
  const data = {
    labels: ['React', 'Next.js', 'Node.js', 'MongoDB', 'MySQL'],
    datasets: [{
      label: 'Proyectos completados',
      data: [8, 5, 7, 4, 3],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    }]
  };

  return (
    <>
      <Head>
        <title>Mi Portafolio</title>
        <meta name="description" content="Portafolio personal de Darío" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        {/* Sección de presentación */}
        <section className={styles.intro}>
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className={styles.title}>
            Bienvenido a mi portafolio
          </motion.h1>
          <div className={styles.presentation}>
            <Image
              src="/yo3.jpeg"
              alt="Mi foto"
              width={180}
              height={180}
              className={styles.profileImage}
            />
            <p className={styles.introText}>
              Hola, soy Darío, un desarrollador web y móvil con pasión por crear experiencias digitales increíbles. Me especializo en el desarrollo de aplicaciones eficientes y escalables con tecnologías modernas como React, Next.js, y más.
            </p>
          </div>
          <a href="/projects" className={styles.btnPrimary}>
            Ver Proyectos
          </a>
        </section>

        {/* Sección de habilidades con carrusel */}
        <section className={styles.skills}>
          <div className={styles.skillsList}>
            <h2>Habilidades</h2>
            <ul>
              <li>💻 Desarrollo Frontend con React y Next.js</li>
              <li>📱 Desarrollo de Aplicaciones Móviles</li>
              <li>🖥️ Backend con Node.js y Express</li>
              <li>📊 Bases de Datos: MySQL, MongoDB</li>
              <li>⚙️ Control de Versiones con Git y GitHub</li>
              <li>🚀 Despliegue en Vercel y Netlify</li>
              <li>💡 Pasión por Sistemas Operativos Linux</li>
            </ul>
          </div>

          {/* Carrusel de imágenes */}
          <div className={styles.carousel}>
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
              <div>
                <img src="/yo.jpeg" alt="Frontend Development" />
                <p className="legend">Frontend Development</p>
              </div>
              <div>
                <img src="/yo2.jpg" alt="Mobile Development" />
                <p className="legend">Mobile Development</p>
              </div>
              <div>
                <img src="/yo3.jpeg" alt="Backend Development" />
                <p className="legend">Backend Development</p>
              </div>
            </Carousel>
          </div>
        </section>

        {/* Sección de experiencia */}
        <section className={styles.experience}>
          <h2>Experiencia</h2>
          <div className={styles.experienceItem}>
            <h3>Auditoria Informática - INSTITUTO HENRY WALLON SECUNDARIA</h3>
            <p className={styles.experienceDate}>Octubre/2023 - Diciembre/2023</p>
            <p>Se realizó un análisis de la eficacia de los controles de seguridad y la integridad de los sistemas informáticos y la infraestructura tecnológica de la institución.</p>
          </div>

          <div className={styles.experienceItem}>
            <h3>Impartición de Curso Scrum - E.P.F.A.A.</h3>
            <p className={styles.experienceDate}>Febrero/2024 - Abril/2024</p>
            <p>Introducción a Scrum, roles y responsabilidades, planificación de sprint, retrospectivas y otras prácticas ágiles.</p>
          </div>

          <div className={styles.experienceItem}>
            <h3>Desarrollo de una aplicación móvil - Instituto Tecnológico Superior de Teziutlán</h3>
            <p className={styles.experienceDate}>Septiembre/2023 - Diciembre/2023</p>
            <p>Desarrollé una aplicación móvil para el seguimiento de gastos, utilizando Android Studio, Java y Firebase.</p>
          </div>
        </section>

        {/* Sección de estadísticas */}
        <section className={styles.stats}>
          <h2>Estadísticas de proyectos</h2>
          <Bar data={data} />
        </section>

        {/* Sección de certificaciones */}
        <section className={styles.certifications}>
          <h2>Certificaciones</h2>
          <ul>
            <li>Certified ScrumMaster (CSM)</li>
            <li>Google Associate Android Developer</li>
            <li>Full Stack Web Development Bootcamp</li>
          </ul>
        </section>

        {/* Sección de testimonios */}
        <section className={styles.testimonials}>
          <h2>Testimonios</h2>
          <div className={styles.testimonialItem}>
            <p>"Trabajar con Darío fue una experiencia fantástica. Su capacidad para resolver problemas complejos es impresionante."</p>
            <span>- Juan Pérez, CTO en TechCorp</span>
          </div>
          <div className={styles.testimonialItem}>
            <p>"El compromiso de Darío con el proyecto fue increíble. Su habilidad para entregar soluciones rápidas fue crucial para nuestro éxito."</p>
            <span>- María Gómez, PM en InnovateX</span>
          </div>
        </section>

        {/* Sección de contacto */}
        <section className={styles.contact}>
          <h2>¿Interesado en trabajar conmigo?</h2>
          <a href="/contact" className={styles.btnPrimary}>
            Contáctame
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}