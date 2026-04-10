// components/Footer.js
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Darío Reyes. Todos los derechos reservados. <a href="/contact">Contacto</a></p>
    </footer>
  );
}