import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useToggleDarkMode from '../hooks/useToggleDarkMode';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [darkMode, setDarkMode] = useToggleDarkMode();
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showResumeOptions, setShowResumeOptions] = useState(false);

  const resumeUrl = '/Resume.pdf';

  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        setShow(true);
      } else if (currentScroll > lastScroll && currentScroll > 100) {
        setShow(false);
        setMobileMenuOpen(false);
      } else if (currentScroll < lastScroll) {
        setShow(true);
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScroll]);

  // Close resume options when clicking outside
  useEffect(() => {
    if (!showResumeOptions) return;
    const handleClick = (e) => {
      if (!e.target.closest('.resume-options-trigger') && !e.target.closest('.resume-options-popup')) {
        setShowResumeOptions(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showResumeOptions]);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: show ? 0 : -80 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-darkBg/80 shadow-md dark:shadow-lg backdrop-blur-lg"
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto flex items-center justify-between p-4 sm:px-6"
          aria-label="Primary navigation"
        >
          <a
            href="#hero"
            className="font-bold text-xl text-primary dark:text-secondary hover:text-secondary dark:hover:text-primary"
            aria-label="Homepage"
          >
            Prasad Somnath
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-300 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-primary dark:hover:text-secondary focus:outline-none focus:ring-2 focus:ring-primary rounded"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="relative">
              <button
                className="resume-options-trigger px-4 py-2 bg-primary text-white rounded hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setShowResumeOptions((prev) => !prev)}
              >
                Resume
              </button>
              {showResumeOptions && (
                <div className="resume-options-popup absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded p-4 z-10 flex flex-col gap-2 min-w-[160px]">
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-center"
                  >
                    View Resume
                  </a>
                  <a
                    href={resumeUrl}
                    download
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-center"
                  >
                    Download Resume
                  </a>
                </div>
              )}
            </li>
          </ul>

          {/* Theme & mobile menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Dark/Light theme"
              className="text-xl focus:outline-none focus:ring-2 focus:ring-primary rounded p-1 transition-colors duration-300"
              title={`Switch to ${darkMode ? 'light' : 'dark'} theme`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-3xl focus:outline-none focus:ring-2 focus:ring-primary rounded p-1"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen ? 'true' : 'false'}
            >
              {mobileMenuOpen ? '✖' : '☰'}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-white dark:bg-darkBg text-center space-y-4 p-4 pb-6 text-lg shadow-lg"
              role="menu"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block hover:text-primary dark:hover:text-secondary focus:outline-none focus:ring-2 focus:ring-primary rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <button
                  className="resume-options-trigger px-4 py-2 bg-primary text-white rounded hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary w-full"
                  onClick={() => setShowResumeOptions((prev) => !prev)}
                >
                  Resume
                </button>
                {showResumeOptions && (
                  <div className="resume-options-popup mt-2 bg-white dark:bg-gray-800 shadow-lg rounded p-4 z-10 flex flex-col gap-2 min-w-[160px]">
                    <a
                      href={resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-center"
                    >
                      View Resume
                    </a>
                    <a
                      href={resumeUrl}
                      download
                      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-center"
                    >
                      Download Resume
                    </a>
                  </div>
                )}
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.header>
      {/* Spacer so content doesn't jump under sticky header */}
      <div className="h-16 md:h-20" />
    </>
  );
}