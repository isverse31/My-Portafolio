// components/ProjectCard.js
import styles from '../styles/Projects.module.css';

export default function ProjectCard({ project }) {
  return (
    <div className={styles.projectCard}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
    </div>
  );
}