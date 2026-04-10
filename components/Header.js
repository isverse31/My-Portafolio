// components/Header.js
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Sobre mí</a></li>
          <li><a href="/projects">Proyectos</a></li>
          <li><a href="/contact">Contacto</a></li>
          {/* <li><a href="/chat">chat</a></li> */}
        </ul>
      </nav>
    </header>
  );
}