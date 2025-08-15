import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Demo certificate data — TODO: Replace with your real certifications
const CERTIFICATES = [
  {
    id: 1,
    title: "Java Data Staracture Algorithem  MasterClass",
    authority: "Udemy",
    date: "Jul 2025",
    image: 'http://localhost:5173/images/udemy.png', // Replace with actual image URL
    link: "https://www.udemy.com/certificate/UC-c6b1c229-2268-4371-91ba-fd3ccc3b1983/", // TODO: Add link to credential or PDF if available
    description: "In-depth course on Java data structures and algorithms, covering arrays, linked lists, trees, and more.",
  },
  {
    id: 2,
    title: "Hands on React js ",
    authority: "Udemy",
    date: "Jul 2025",
    image: 'http://localhost:5173/images/udemy.png',
    link: "https://www.udemy.com/certificate/UC-0eedc2e0-1ac9-4fed-b894-1d7043dcb537/",
    description: "Comprehensive React.js course covering hooks, state management, and building interactive UIs.",
  },
  {
    id: 3,
    title: "Java Fullstack Developer",
    authority: "Skyllx Software Training Institute",
    date: "Jan 2025",
    image: 'http://localhost:5173/images/skyllx.jpeg',
    link: "#",
    description: "Intensive training program on full-stack Java development, including Spring Boot, React.js, Docker and MySQL.",
  },
];

// Certificate modal for larger image/details (optional, editable)
function CertificateModal({ cert, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-lg w-full relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 dark:text-gray-300 hover:text-primary"
          aria-label="Close"
        >✖</button>
        <img src={cert.image} alt={cert.title} className="w-full rounded-lg mb-4" />
       <h3 className="text-2xl font-bold mb-1 dark:text-white">{cert.title}</h3>
        <p className="mb-1">
          <span className="font-semibold dark:text-white">{cert.authority}</span> &middot; {cert.date}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4 dark:text-white">{cert.description}</p>
        {cert.link && (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-5 py-2 rounded font-semibold hover:bg-secondary transition"
          >
            View Credential
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certificates" className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-extrabold mb-8 dark:text-white">Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CERTIFICATES.map(cert => (
          <motion.div
            key={cert.id}
            whileHover={{ y: -8, scale: 1.03 }}
            className="cursor-pointer shadow-md rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex flex-col"
            tabIndex={0}
            aria-label={`See certificate details for ${cert.title}`}
            onClick={() => setSelected(cert)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') setSelected(cert);
            }}
          >
            <img src={cert.image}
                 alt={cert.title}
                 className="w-full h-48 object-cover"
                 loading="lazy"
            />
            <div className="p-4 flex-1 flex flex-col">
             <h3 className="text-lg font-bold mb-1 dark:text-white">{cert.title}</h3>
              <p className="text-sm text-gray-500 mb-2 dark:text-white">
                {cert.authority} &middot; {cert.date}
              </p>
              <p className="text-gray-700 dark:text-gray-300 flex-1 text-sm dark:text-white">{cert.description}</p>
              {cert.link &&
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block bg-primary text-white px-3 py-1.5 rounded hover:bg-secondary font-semibold"
                >
                  <center>View Certificate</center>
                </a>
              }
            </div>
          </motion.div>
        ))}
      </div>
      {/* Modal for selected cert */}
      <AnimatePresence>
        {selected && (
          <CertificateModal cert={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
