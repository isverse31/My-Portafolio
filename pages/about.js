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
    { src: '/programing.jpg', alt: 'programming'},
    { src: '/profesional.jpeg', alt: 'profesional Informático'},
    { src: '/InglesB1.jpeg', alt: 'inglesB1'},
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
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <main className={styles.mainContainer}>

      {/* <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className={styles.backgroundVideo}
      >
        <source src="/espacio2.mp4" type="video/mp4" />
      </video> */}
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
    <div style={{ marginLeft: '20px', maxWidth: '600px', textAlign: 'left' }}>
      <p className={styles.sobremiTexto}>
        Ingeniero en Informática con experiencia en desarrollo web
en Java y Spring Boot, APIs REST, Microservicios, AWS,
Contenedores, Base de datos SQL y NoSQL, administración
de sistemas, Sonarqube, CI Jenkins, Scrum, Oracle,
Mongodb, Apache Jmeter. Especializado en crear
soluciones eficientes, con enfoque en mejora continua,
trabajo en equipo y adaptación rápida a nuevas
tecnologías.
      </p>
      <p className={styles.sobremiTexto}>
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
              <li>💻 Java versión 21, versión 8,versión 17 (Jakarta), TypeScript,
                      JavaScript, PHP, PL-SQL, Python.</li>
              <li>🛠️ Frameworks: Spring Boot, Spring Framework,Angular, React Native, Laravel, CodeIgniter, Next js, Hibernate, JPA.</li>
              <li>🖥️ Servidores: Apache Tomcat, Eureka Server, Node.js</li>
              <li>📊 MySQL, PostgreSQL, MongoDB, Firebase, Oracle, H2.</li>
              <li>⚙️ Control de Versiones con Git y GitHub</li>
              <li>🚀 Otras Herramientas: Dbeaver, Sql Developer, Sql DataModeler, Heidi SQL, JSON, Yaml, Git, Github</li>
              <li>💡 Pasión por Sistemas Operativos Linux (4 años en la utilización de linux como Sistema Operativo principal)</li>
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
              <div>
                <img src="/Dispensador1.png" alt="Backend Development" />
                <p className="legend">Backend Development</p>
              </div>
              <div>
                <img src="/Dispensador2.png" alt="Backend Development" />
                <p className="legend">Backend Development</p>
              </div>
            </Carousel>
          </div>
        </section>

        {/* Sección de experiencia */}
        <section className={styles.experience}>
          <h2 className={styles.sobremi}>Experiencia</h2>

          <div className={styles.experienceItem}>
            <h3>Profesional Informático - Organismo Público Local Electoral del Estado de Veracruz (OPLE)</h3>
            <p className={styles.experienceDate}>Marzo/2025 - Julio/2025</p>
            <p>• Soporte a sistemas y desarrollo de Software Administrativo.</p>
    <p>• Desarrollo bajo el sistema operativo Linux/Debian</p>
    <p>• Marco de trabajo Scrum, Jira</p>
    <p>• CI (Integración Continua) en Jenkins empleando Pipelines.</p>
    <p>• Despliegue de API Rest en AWS Amazon Web Service empleando AWS Elastic Beanstalk</p>
    <p>• AWS RDS (MySQL) y gestión de base de datos.</p>
    <p>• Desarrollo de APIs REST con Spring Boot 3 y java 21</p>
    <p>• Diseño de endpoints para CRUD (GET, POST, PUT, DELETE)</p>
    <p>• Uso de DTOs para separación de capas</p>
    <p>• Implementación de arquitectura en capas (Controller, Service, Repository, Models)</p>
    <p>• Integración con base de datos MySQL usando JPA/Hibernate.</p>
    <p>• Documentación de API Rest.</p>
    <p>• Manejo de errores y validaciones en backend</p>
    <p>• Pruebas de endpoints con Postman/Swagger.</p>
          </div>

          <div className={styles.experienceItem}>
            <h3>Desarrollo de Software - Sistema de Bitácoras, Keter S.A DE C.V</h3>
            <p className={styles.experienceDate}>Agosto/2024 - Diciembre/2024</p>
              <p>• Diseñé e implementé un sistema de monitoreo de cámaras que automatiza registros C-TPAT y mejora la trazabilidad de eventos de seguridad.</p>
            <p>• Scrum, entregables, y sprints.</p>
    <p>• Java 17 y Oracle Database, se dio migración a algunas BD a Mongo Database, documentos JSON.</p>
    <p>• En Angular frontend módulos para consultas CRUD,</p>
    <p>• Implementación de autenticación y autorización (JWT / Spring boot Security)</p>
    <p>• Registro de auditoría para cumplimiento de estándares C-TPAT</p>
    <p>• Sonarqube para inspección continua de la calidad y seguridad del código fuente.</p>
    <p>• Optimización de consultas para grandes volúmenes de eventos</p>
    <p>• Manejo de CORS para integración frontend-backend</p>
    <p>• Versionado de API REST, Documentación de Apis, y testeo de recursos get,put,delete,post.</p>
    <p>• Eureka Server para registro de API REST.</p>
    <p>• Implementación de Virtual Threads.</p>
    <p>• Spring Batch para carga de datos de archivos csv y registros para base de datos.</p>
    <p>• Versionamiento de código, y pruebas de integración.</p>
    <p>• Mantenimiento a Base de datos Oracle creando nuevas tablas y procedimientos almacenados y documente en UML modelos entidad relación, y diagramas de casos de uso.</p>
            </div>

          <div className={styles.experienceItem}>
            <h3>Impartición de Curso Scrum - E.P.F.A.A.</h3>
            <p className={styles.experienceDate}>Febrero/2024 - Abril/2024</p>
            <p>•Enseñé los fundamentos de la metodología ágil Scrum a estudiantes de nivel preparatoria.</p>
            <p>•Facilitación de actividades prácticas y dinámicas de grupo para potenciar el aprendizaje. </p> 
            <p>•Promoví habilidades de trabajo en equipo, gestión del tiempo y liderazgo.</p>
          </div>

          <div className={styles.experienceItem}>
            <h3>Auditoria Informática - INSTITUTO HENRY WALLON SECUNDARIA</h3>
            <p className={styles.experienceDate}>Octubre/2023 - Diciembre/2023</p>
            <p>•Les expliqué conceptos básicos de auditoría en sistemas y seguridad informática.</p>
            <p>•Implementación de actividades prácticas para identificar vulnerabilidades y buenas prácticas en seguridad digital.</p>
            <p>•Fomenté el interés por la ciberseguridad y la gestión de riesgos tecnológicos entre los estudiantes.</p>
          </div>

          <div className={styles.experienceItem}>
            <h3>Desarrollo de una aplicación móvil - Instituto Tecnológico Superior de Teziutlán</h3>
            <p className={styles.experienceDate}>Septiembre/2023 - Diciembre/2023</p>
            <p>•Desarrollé una aplicación móvil para el seguimiento de gastos, utilizando Android Studio, Java y Firebase.</p>
            <p>•Al igual que una aplicación móvil para un dispensador de bebidas</p>
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

        {/* Barra de progreso de competencias técnincas */}
        <section className={styles.skillsSection}>
          <h2 className={styles.sobremi}>Competencias Técnicas</h2>
          <div className={styles.skillsContainer}>
            <div className={styles.skill}>
              <p>Java</p>
              <div className={styles.skillBar}>
                <div className={`${styles.skillLevel} ${styles.java}`}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <p>Spring Boot</p>
              <div className={styles.skillBar}>
                <div className={`${styles.skillLevel} ${styles.spring}`}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <p>Angular</p>
              <div className={styles.skillBar}>
                <div className={`${styles.skillLevel} ${styles.angular}`}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <p>React</p>
              <div className={styles.skillBar}>
                <div className={`${styles.skillLevel} ${styles.react}`}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <p>Next.js</p>
              <div className={styles.skillBar}>
                <div className={`${styles.skillLevel} ${styles.nextjs}`}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <p>Node.js</p>
              <div className={styles.skillBar}>
                <div className={`${styles.skillLevel} ${styles.nodejs}`}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <p>Git</p>
              <div className={styles.skillBar}>
                <div className={`${styles.skillLevel} ${styles.git}`}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <p>MySQL</p>
              <div className={styles.skillBar}>
                <div className={`${styles.skillLevel} ${styles.mysql}`}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <p>PostgreSQL</p>
              <div className={styles.skillBar}>
                <div className={`${styles.skillLevel} ${styles.postgresql}`}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <p>MongoDB</p>
              <div className={styles.skillBar}>
                <div className={`${styles.skillLevel} ${styles.mongodb}`}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <p>Linux</p>
              <div className={styles.skillBar}>
                <div className={`${styles.skillLevel} ${styles.linux}`}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de intereses personales */}
        <section className={styles.intereses}>
          <h2>Intereses Personales</h2>
          <p>Fuera del trabajo, me gusta explorar nuevas tecnologías y aprender más sobre Linux.
            También me gusta prácticar ajedrez y fútbol, lo que me ayuda a mantenerme creativo y activo tanto en lo personal como en lo profesional.          </p>
        </section>

        {/* Sección de hobbies */}
        <section className={styles.hobbiesSection}>
          <h2 className={styles.sobremi}>Hobbies</h2>
          <div className={styles.hobbiesContainer}>
            <div className={styles.hobby}>
              <Image 
                src="/ajedrez.jpeg" 
                alt="ajedrez"
                width={150} 
                height={150}
                className={styles.hobbyImage}
              />
              <p>ajedrez</p>
            </div>
            <div className={styles.hobby}>
              <Image 
                src="/futbol.jpeg" 
                alt="Fútbol"
                width={150} 
                height={150}
                className={styles.hobbyImage}
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
