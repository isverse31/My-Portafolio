// pages/projects.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';

const projects = [
  {
    title: 'Dispensador de Bebidas',
    description:
      'Desarrollé en equipo un dispensador de bebidas capaz de mezclar distintas bebidas en una sola, controlado mediante una aplicación móvil. ' +
      'Aquí la página web para promocionarlo.',
    link: 'https://tec-dispensador-beta1.netlify.app/',
  },
  {
    title: 'Sistema de Bitácoras',
    description:
      'En la comercializadora Keter S.A. de C.V. desarrollé un sistema de bitácoras para la red y las cámaras de seguridad, ' +
      'con el fin de cumplir con la normativa CTPAT.',
    images: ['/bitacora1.png', '/bitacora2.png', '/bitacora3.png'],
  },
  {
    title: 'Proyecto 3',
    description: 'Descripción del proyecto 3.',
    images: ['/image3.jpg'],
  },
  {
    title: 'Proyecto 4',
    description: 'Descripción del proyecto 4.',
    link: 'https://proyecto2.com',
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Proyectos — Mi Portafolio</title>
        <meta name="description" content="Proyectos desarrollados por Darío" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section className={styles.projectsSection}>
          <div className={styles.projectsHeader}>
            <h1 className={styles.titulo}>Mis Proyectos</h1>
            <p className={styles.tituloSubtitle}>
              Una selección de trabajos académicos y profesionales
            </p>
          </div>

          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}