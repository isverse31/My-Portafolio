// components/ProjectCard.js
import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from '../styles/Projects.module.css';

function ImageModal({ project, onClose, onSelectImage }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  // ✅ Portal: el modal se monta directamente en <body>, fuera del <article>
  return createPortal(
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          ×
        </button>

        <h2 id="modal-title">{project.title}</h2>
        <p className={styles.modalDescription}>{project.description}</p>

        {project.images?.length > 0 && (
          <div className={styles.modalImageGrid} role="list">
            {project.images.map((img, idx) => (
              <button
                key={idx}
                className={styles.modalImageWrapper}
                onClick={() => onSelectImage(idx)}
                role="listitem"
                aria-label={`Ver evidencia ${idx + 1} en pantalla completa`}
              >
                <img
                  src={img}
                  alt={`Evidencia ${idx + 1} de ${project.title}`}
                  className={styles.modalImage}
                  loading="lazy"
                />
                <span className={styles.modalImageOverlay}>
                  <span className={styles.modalImageIcon}>🔍</span>
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body // ✅ Se monta en <body>, no dentro del <article>
  );
}

function Lightbox({ images, currentIndex, onClose, onNavigate }) {
  const total = images.length;

  // ✅ Portal también para el lightbox
  return createPortal(
    <div
      className={styles.lightboxOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Imagen ampliada"
    >
      <button
        className={styles.lightboxClose}
        onClick={onClose}
        aria-label="Cerrar lightbox"
      >
        ×
      </button>

      {total > 1 && (
        <>
          <button
            className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
            onClick={(e) => { e.stopPropagation(); onNavigate(-1); }}
            aria-label="Imagen anterior"
          >
            ‹
          </button>
          <button
            className={`${styles.lightboxNav} ${styles.lightboxNext}`}
            onClick={(e) => { e.stopPropagation(); onNavigate(1); }}
            aria-label="Imagen siguiente"
          >
            ›
          </button>
          <span className={styles.lightboxCounter} aria-live="polite">
            {currentIndex + 1} / {total}
          </span>
        </>
      )}

      <img
        src={images[currentIndex]}
        alt={`Imagen ${currentIndex + 1} de ${total}`}
        className={styles.lightboxImage}
        onClick={(e) => e.stopPropagation()}
      />
    </div>,
    document.body // ✅ Se monta en <body>
  );
}

export default function ProjectCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setLightboxIndex(null);
  }, []);

  const openLightbox = useCallback((idx) => setLightboxIndex(idx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const navigateLightbox = useCallback((direction) => {
    const total = project.images?.length ?? 0;
    setLightboxIndex((prev) => (prev + direction + total) % total);
  }, [project.images]);

  // Bloquear scroll del body y manejar teclas
  useEffect(() => {
    const isOpen = isModalOpen || lightboxIndex !== null;
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (lightboxIndex !== null) closeLightbox();
        else closeModal();
      }
      if (lightboxIndex !== null) {
        if (e.key === 'ArrowRight') navigateLightbox(1);
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isModalOpen, lightboxIndex, closeModal, closeLightbox, navigateLightbox]);

  const hasImages = project.images?.length > 0;
  const hasLink = Boolean(project.link);

  return (
    <article className={styles.projectCard}>
      <div className={styles.projectCardBody}>
        <h2 className={styles.projectTitle}>{project.title}</h2>
        <p className={styles.projectDescription}>{project.description}</p>
      </div>

      <div className={styles.projectCardFooter}>
        {hasImages && (
          <span className={styles.imageCount}>
            {project.images.length} evidencia{project.images.length !== 1 ? 's' : ''}
          </span>
        )}

        {hasLink ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            Ver Proyecto →
          </a>
        ) : (
          <button
            className={styles.projectButton}
            onClick={openModal}
          >
            Ver Evidencias
          </button>
        )}
      </div>

      {/* ✅ Los modales ya usan portal, así que pueden ir aquí sin problema */}
      {isModalOpen && (
        <ImageModal
          project={project}
          onClose={closeModal}
          onSelectImage={openLightbox}
        />
      )}

      {lightboxIndex !== null && hasImages && (
        <Lightbox
          images={project.images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </article>
  );
}