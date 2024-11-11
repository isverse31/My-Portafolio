import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import styles from '../styles/About.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function About() {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: '/Red Hat System Administration I (RH124).png', alt: 'Certificate of Attendance (RH124-8.2)' },
    { src: '/Red Hat System Administration II (RH134).png', alt: 'Certificate of Attendance (RH134-9.0)' },
    { src: '/Applications.png', alt: 'Certificate of Attendance (DO101-4.6)' },
    { src: '/DARÍOREYES TOMÁS-CCNAv7 Introduct-certificate.png', alt: 'DARÍOREYES TOMÁS-CCNAv7 Introduct-certificate' },
    { src: '/DARÍOREYES TOMÁS-CCNAv7 Switching-certificate.png', alt: 'DARÍOREYES TOMÁS-CCNAv7 Switching-certificate' },
    { src: '/DARÍOREYES TOMÁS-IINF- Cisco IT E-certificate.png', alt: 'DARÍOREYES TOMÁS-IINF- Cisco IT E-certificate' },
    { src: '/scrum_DarioReyesTomas.png', alt: 'Scrum-DaríoReyesTomás'},
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Head>
        <title>Sobre Mí - Mi Portafolio</title>
        <meta name="description" content="Información sobre Darío" />
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
        {/* Sección de introducción */}
        <section style={{ padding: '20px', textAlign: 'center' }}>
          <h1 className={styles.sobremi}>Sobre Mí</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image 
              src="/yo6.jpg" 
              alt="Mi foto"
              width={180} 
              height={180}
              style={{ borderRadius: '10%' }}
            />
            <div style={{ marginLeft: '20px', maxWidth: '600px' }}>
              <p className={styles.sobremi}>
                Hola, soy Darío, un desarrollador web y móvil apasionado por crear soluciones innovadoras y eficientes. 
                Con una sólida experiencia en desarrollo frontend y backend, me encanta enfrentar desafíos y aprender nuevas tecnologías.
              </p>
              <p className={styles.sobremi}>
                He trabajado en proyectos que van desde pequeñas aplicaciones móviles hasta complejas plataformas web, siempre buscando mejorar la experiencia del usuario.
              </p>
            </div>
          </div>
        </section>

        {/* Sección de habilidades con carrusel */}
        <section className={styles.skills}>
          <div className={styles.skillsList}>
            <h2 className={styles.sobremi}>Habilidades</h2>
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

          {/* Carrusel de habilidades */}
          <div className={styles.carousel}>
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
              <div>
                <img src="/bitacora1.png" alt="Frontend Development" />
                <p className="legend">Frontend Development</p>
              </div>
              <div>
                <img src="/bitacora2.png" alt="Mobile Development" />
                <p className="legend">Mobile Development</p>
              </div>
              <div>
                <img src="/bitacora3.png" alt="Backend Development" />
                <p className="legend">Backend Development</p>
              </div>
            </Carousel>
          </div>
        </section>

        {/* Sección de experiencia */}
        <section className={styles.experience}>
          <h2 className={styles.sobremi}>Experiencia</h2>
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

        {/* Sección de certificaciones */}
        <section className={styles.certifications}>
          <h2 className={styles.sobremi}>Certificaciones</h2>
          <div className={styles.certificationsGrid}>
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={300}
                height={200}
                className={styles.certImage}
                onClick={() => openModal(image.src)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
        </section>

        {/* Modal para mostrar imagen ampliada */}
        {modalOpen && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modalContent}>
              <Image src={selectedImage} alt="Certificación ampliada" width={750} height={800} />
            </div>
          </div>
        )}

        {/* Barra de progreso de habilidades */}
        <section style={{ marginTop: '50px', padding: '20px' }} className={styles.sobremi}>
          <h2 className={styles.sobremi}>Competencias Técnicas</h2>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ marginBottom: '15px' }}>
              <p>React</p>
              <div style={{ backgroundColor: '#ddd', borderRadius: '5px' }}>
                <div style={{ width: '90%', backgroundColor: '#0070f3', padding: '5px', borderRadius: '5px' }}></div>
              </div>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <p>Next.js</p>
              <div style={{ backgroundColor: '#ddd', borderRadius: '5px' }}>
                <div style={{ width: '85%', backgroundColor: '#0070f3', padding: '5px', borderRadius: '5px' }}></div>
              </div>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <p>Node.js</p>
              <div style={{ backgroundColor: '#ddd', borderRadius: '5px' }}>
                <div style={{ width: '80%', backgroundColor: '#0070f3', padding: '5px', borderRadius: '5px' }}></div>
              </div>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <p>Git</p>
              <div style={{ backgroundColor: '#ddd', borderRadius: '5px' }}>
                <div style={{ width: '95%', backgroundColor: '#0070f3', padding: '5px', borderRadius: '5px' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de intereses personales */}
        <section className={styles.intereses}>
          <h2>Intereses Personales</h2>
          <p>Fuera del trabajo, disfruto explorar tecnologías emergentes, aprender sobre Linux, y colaborar en proyectos open source.
             Además, soy un entusiasta del ajedrez y del fútbol, lo que me permite mantenerme creativo tanto en lo profesional como en lo personal.
          </p>
        </section>

        {/* Sección de hobbies */}
        <section style={{ marginTop: '50px', padding: '20px', textAlign: 'center', color: 'white'}}>
          <h2 className={styles.sobremi}>Hobbies</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
            <div style={{ textAlign: 'center' }}>
              <Image 
                src="/ajedrez.jpeg" 
                alt="ajedrez"
                width={150} 
                height={150}
                style={{ borderRadius: '50%' }}
              />
              <p>ajedrez</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Image 
                src="/futbol.jpeg" 
                alt="Fútbol"
                width={150} 
                height={150}
                style={{ borderRadius: '50%' }}
              />
              <p>Fútbol</p>
            </div>
          </div>
        </section>
      </main>

      {/* Sección de contacto */}
      <section className={styles.contact}>
          <h2>¿Interesado en trabajar conmigo?</h2>
          <a href="/contact" className={styles.btnPrimary}>
            Contáctame
          </a>
        </section>


      <Footer />
    </>
  );
}
