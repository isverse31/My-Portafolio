import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

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
        {/* Sección de introducción */}
        <section style={{ padding: '20px', textAlign: 'center' }}>
          <h1>Sobre Mí</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image 
              src="/yo.jpeg" 
              alt="Mi foto"
              width={150} 
              height={150}
              style={{ borderRadius: '50%' }}
            />
            <div style={{ marginLeft: '20px', maxWidth: '600px' }}>
              <p>
                Hola, soy Darío, un desarrollador web y móvil apasionado por crear soluciones innovadoras y eficientes. 
                Con una sólida experiencia en desarrollo frontend y backend, me encanta enfrentar desafíos y aprender nuevas tecnologías.
              </p>
              <p>
                He trabajado en proyectos que van desde pequeñas aplicaciones móviles hasta complejas plataformas web, siempre buscando mejorar la experiencia del usuario.
              </p>
            </div>
          </div>
        </section>

        {/* Barra de progreso de habilidades */}
        <section style={{ marginTop: '50px', padding: '20px' }}>
          <h2>Competencias Técnicas</h2>
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
        <section style={{ marginTop: '50px', padding: '20px', backgroundColor: '#f7f7f7' }}>
          <h2>Intereses Personales</h2>
          <p>Fuera del trabajo, disfruto explorar tecnologías emergentes, aprender sobre Linux, y colaborar en proyectos open source. 
            Además, soy un entusiasta del ciclismo y la fotografía, lo que me permite mantenerme creativo tanto en lo profesional como en lo personal.
          </p>
        </section>

        {/* Sección de hobbies */}
        <section style={{ marginTop: '50px', padding: '20px', textAlign: 'center' }}>
          <h2>Hobbies</h2>
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

      <Footer />
    </>
  );
}
