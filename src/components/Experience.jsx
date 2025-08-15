import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpeg';
import Skyllx from '../assets/skyllx.jpeg';
 // Replace with actual logo URL
const SAMPLE_EXPERIENCES = [
  {
    id: 1,
    company: 'Highrr Technologies Pvt Ltd',
    role: 'Software Engineer ',
    dates: 'Aug 2025 - Present',
    bullets: [
      'Developing scalable web applications using React and Spring Boot.',
      'Implementing RESTful APIs and integrating with backend services.',
      'Optimizing application performance and ensuring code quality.',
      'Collaborating with cross-functional teams to deliver high-quality software.',
      'Participating in code reviews and mentoring junior developers.',
      'Utilizing Docker for containerization and deployment.',
      'Engaging in Agile methodologies for project management.',
    ],
    current: true,
    logo: logo, // Add logo URL if available
  },
  {
    id: 2,
    company: 'Skyllx software Training Institute',
    role: 'Java fullstack Developer Trainee',
    dates: 'Jan 2025 - Jul 2025',
    bullets: [
      'Developed and deployed RESTful APIs using Spring Boot and Hibernate.',
      'Designed interactive UIs using React.js and Bootstrap for enhanced UX.',
      'Integrated MySQL with Spring JPA for persistent data management.',
      'Learned Docker and microservices deployment through hands-on training.',
      'Collaborated in live deployments and resolved integration issues.',
    ],
    current: false,
    logo: Skyllx, // Add logo URL if available
  },
];

export default function Experience() {
  const [expandedItems, setExpandedItems] = useState(
    SAMPLE_EXPERIENCES.filter((ex) => ex.current).map((ex) => ex.id)
  );

  const toggleItem = (id) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="experience"
      aria-label="Experience timeline"
      className="max-w-4xl mx-auto px-4 py-16 bg-blue-50 dark:bg-gray-900 rounded-xl shadow-lg mt-16"
    >
      <h2 className="text-3xl font-extrabold mb-8 dark:text-white">Experience</h2>
      <ol className="border-l-2 border-primary">
        {SAMPLE_EXPERIENCES.map(({ id, company, role, dates, bullets, current, logo }) => {
          const isExpanded = expandedItems.includes(id);
          return (
            <motion.li
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 ml-6 relative"
            >
              {/* Timeline Dot */}
              <span
                aria-hidden="true"
                className={`absolute -left-5 flex items-center justify-center w-10 h-10 rounded-full ring-4 ring-white dark:ring-darkBg ${
                  current ? 'bg-primary' : 'bg-gray-400'
                }`}
              >
                {current ? (
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                ) : (
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                )}
              </span>

              {/* Experience Card */}
              <button
                onClick={() => toggleItem(id)}
                aria-expanded={isExpanded}
                aria-controls={`experience-content-${id}`}
                className="flex flex-col items-start w-full text-left focus:outline-none focus:ring-2 focus:ring-primary rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <div className="flex justify-center items-center w-full gap-2">
                  {/* Optional: Company Logo */}
                  {logo && (
                    <img
                      src={logo}
                      alt={`${company} logo`}
                      className="w-12 h-11 rounded-full"
                    />
                  )}
                  <h3 className="text-xl font-semibold dark:text-white text-center">
                    {role} @ {company}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">{dates}</span>
                </div>
                {isExpanded && (
                  <ul
                    id={`experience-content-${id}`}
                    className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300"
                  >
                    {bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </button>
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
}