// components/ProjectCard.js
import { useState } from 'react';
import styles from '../styles/Projects.module.css';

export default function ProjectCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.projectCard}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {project.link ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
      ) : (
        <button onClick={() => setIsModalOpen(true)}>Ver Evidencias</button>
      )}

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>×</button>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {project.images && project.images.map((img, idx) => (
              <img key={idx} src={img} alt={`Evidencia ${idx+1}`} className={styles.modalImage} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}