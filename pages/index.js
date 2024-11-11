import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';

export default function Home() {

  return (
    <>
      <Head>
        <title>Mi Portafolio</title>
        <meta name="description" content="Portafolio personal de Darío" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.mainContainer}>
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className={styles.backgroundVideo}
      >
        <source src="/espacio2.mp4" type="video/mp4" />
      </video>
        {/* Sección de presentación */}
        <section className={styles.intro}>
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className={styles.title}>
            Bienvenido a mi portafolio
          </motion.h1>
          <div className={styles.presentation}>
            <Image
              src="/yo3.jpeg"
              alt="Mi foto"
              width={290}
              height={290}
              className={styles.profileImage}
            />
            <p className={styles.introText}>
              Hola, soy Darío, un desarrollador web y móvil con pasión por crear experiencias digitales increíbles. Me especializo en el desarrollo de aplicaciones eficientes y escalables con tecnologías modernas como React, Next.js, y más.
            </p>
          </div>
          <a href="/about" className={styles.btnPrimary}>
            Más sobre mí
          </a>
        </section>

        
      </main>

      <Footer />
    </>
  );
}