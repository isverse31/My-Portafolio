// components/ProjectCard.js
import { useState } from 'react';
import styles from '../styles/Projects.module.css';

export default function ProjectCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

            {project.images && (
              <div className={styles.modalImageGrid}>
                {project.images.map((img, idx) => (
                  <div key={idx} className={styles.modalImageWrapper} onClick={() => setSelectedImage(img)}>
                    <img src={img} alt={`Evidencia ${idx + 1}`} className={styles.modalImage} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <div className={styles.lightboxOverlay} onClick={() => setSelectedImage(null)}>
          <button className={styles.lightboxClose} onClick={() => setSelectedImage(null)}>×</button>
          <img src={selectedImage} alt="Imagen ampliada" className={styles.lightboxImage} />
        </div>
      )}
    </div>
  );
}