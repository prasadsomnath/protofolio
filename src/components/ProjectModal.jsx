import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = project.images ?? [project.image];

  useEffect(() => {
    function handleEsc(e) {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      tabIndex="-1"
    >
      <motion.div
        className="bg-white dark:bg-darkBg rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-2 right-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary focus:outline-none focus:ring-2 focus:ring-primary rounded p-1"
        >
          ✖
        </button>

        <div className="relative">
          <img
            src={images[currentIndex]}
            alt={`${project.title} screenshot ${currentIndex + 1}`}
            className="rounded-md mb-4 w-full max-h-64 object-cover"
            loading="lazy"
          />
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full p-2 shadow hover:bg-secondary"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full p-2 shadow hover:bg-secondary"
              >
                ›
              </button>
            </>
          )}
        </div>

        <h3 id="modal-title" className="text-2xl font-extrabold mb-4 dark:text-white">
          {project.title}
        </h3>
        <p id="modal-description" className="mb-4 text-gray-700 dark:text-gray-300">
          {project.fullDesc}
        </p>
        <h4 className="font-semibold mb-2 dark:text-white">Features</h4>
        <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
          {project.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
        <div className="flex space-x-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-5 py-2 rounded-md font-semibold shadow-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={`Live preview of ${project.title}`}
          >
            Live Preview
          </a>
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary px-5 py-2 rounded-md font-semibold shadow-md hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={`Code repository of ${project.title}`}
          >
            View Code
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
