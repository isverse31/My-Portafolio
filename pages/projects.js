// pages/projects.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';

const projects = [
  { title: 'Proyecto 1', description: 'Realice en equipo un dispensador de bebidas que mezcla varias bebidas en una, aquí la página para promocionarla', link: 'https://tec-dispensador-beta1.netlify.app/' },
  { title: 'Proyecto 2', description: 'Descripción del proyecto 2', link: 'https://proyecto2.com' },
  { title: 'Proyecto 3', description: 'Descripción del proyecto 3', link: 'https://proyecto1.com' },
  { title: 'Proyecto 4', description: 'Descripción del proyecto 4', link: 'https://proyecto2.com' }
  
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Proyectos - Mi Portafolio</title>
        <meta name="description" content="Proyectos desarrollados por Darío" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section>
          <h1 className={styles.titulo}>Mis Proyectos</h1>
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
