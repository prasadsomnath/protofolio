import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-400 py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm">&copy; {new Date().getFullYear()} Prasad Somnath. All rights reserved.</p>
        <nav aria-label="Footer navigation" className="space-x-6">
          <a
            href="#privacy"
            className="hover:text-primary dark:hover:text-secondary focus:outline-none focus:ring-2 focus:ring-primary rounded"
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            className="hover:text-primary dark:hover:text-secondary focus:outline-none focus:ring-2 focus:ring-primary rounded"
          >
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  );
}
