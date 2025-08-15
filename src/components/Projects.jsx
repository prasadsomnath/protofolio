import React, { useState, useMemo, useRef, useEffect } from 'react';
import ProjectModal from './ProjectModal';

const SAMPLE_PROJECTS = [
  {
    id: 1,
    title: 'Portfolio Website',
    shortDesc:
      'Modern portfolio built with React, Tailwind, and Framer Motion.',
    fullDesc:
      'A responsive portfolio including animations, dark mode toggle, contact form, and project filtering.',
    techTags: ['React js', 'Tailwind', 'Framer Motion', 'JavaScript', 'HTML', 'CSS'],
    images: [
      'http://localhost:5173/images/protofolio.jpeg',
      
    ],
    liveLink: '#',
    repoLink: 'https://github.com/REPLACE_ME/portfolio',
    features: [
      'Dark / light theme toggle',
      'Animated hero section',
      'Project filtering & modal',
      'Responsive design',
      'Contact form with validation',
      'Smooth scrolling',
      'SEO optimized',
      'Social media links',
    ],
  },
  {
    id: 2,
    title: 'Learning Management System',
    shortDesc: 'Microservices-based LMS with React frontend and Spring Boot backend.',
    fullDesc:
      'This is a microservices-based LMS architecture where the React frontend communicates through an API Gateway to services like Auth, Course, Enrollment, Payment, Exam, and Certificate.MySQL stores the data, Kafka handles event-driven workflows (e.g., payment triggers enrollment), and Promtail + Loki + Grafana provide centralized logging and monitoring.',
    techTags: ['React', 'JavaScript', 'Spring Boot', 'Kafka', 'Docker', 'Aws (ec2)', 'API Gateway', 'Jenkins', 'JUnit', 'Restful APIs', 'spring Security'],
    images: [
      'http://localhost:5173/images/lms_project/lms_dashboard.jpeg',
      'http://localhost:5173/images/lms_project/lms_dashboard1.jpeg',
    ],
    liveLink: '#',
    repoLink: '#',
    features: [
      'User authentication',
      'Course management',
      'Enrollment system',
      'Payment processing',
      'Exam management',
      'Certificate generation',
      'Centralized logging and monitoring',
      'Event-Driven Automation Kafka-based workflows for payment → enrollment → notifications.',
      'Aws deployment for scalability and reliability',
      'CI/CD pipeline with Jenkins for automated testing and deployment',
    ],
  },
  {
    id: 3,
    title: 'Job Portal Application',
    shortDesc: 'Full-stack job portal with job posting, updateing,deleting and search features.',
    fullDesc:
      'The Job Portal System is a full-stack web application designed to streamline the job search and recruitment process. It enables users to post, search, delete and manage job listings efficiently. The frontend is built with React.js, while the backend is developed using Spring Boot with RESTful APIs.',
    techTags: ['React', 'JavaScript', 'Spring Boot', 'MySQL', 'Restful APIs', 'Jsp', 'spring MVC', 'hibernate'],
    images: [
      'http://localhost:5173/images/jobportal/dashboard.jpeg',
      'http://localhost:5173/images/jobportal/addjobs.jpeg',
      'http://localhost:5173/images/jobportal/searchjob.jpeg',
      'http://localhost:5173/images/jobportal/validation.jpeg',
    ],
    liveLink: '#',
    repoLink: 'https://github.com/prasadsomnath/Job-Portal-Application-',
    features: ['Add, delete, and update jobs', 'Search by keyword', 'Filter by job type', 'Responsive design'],
  },
  {
    id: 4,
    title: 'Flight Management System ',
    shortDesc: 'Java-based flight booking system with user registration and ticket management.',
    fullDesc:
      'The Flight Management System is a Java-based application that allows users to register, searching for flights, booking of tickets, cancel bookings, and view their reservations. It uses JDBC to connect to a MySQL database, managing all flight and user data efficiently.',
    techTags: ['jdbc', 'java', 'MySQL', 'oops', 'collections'],
    images: [
      'http://localhost:5173/images/flight/booking_screenshot.jpeg',
      'http://localhost:5173/images/flight/cancel_booking_screenshot.jpeg',
      'http://localhost:5173/images/flight/serching_flight_screenshot.jpeg', 
      'http://localhost:5173/images/flight/user_resgister_screenshot.jpeg',
      
    ],
    liveLink: '#',
    repoLink: 'https://github.com/prasadsomnath/Flight-Management-System',
    features: ['User registration and login', 'Search flights by criteria', 'Book and cancel tickets'],
  },
  {
    id: 5,
    title: 'Hotel Billing System ',
    shortDesc: 'Java-based hotel billing system with menu ordering and bill summary.',
    fullDesc:
      'This is a simple Java-based Hotel Billing System project developed using core Java concepts. The system simulates a hotel ordering system where the user can view the menu, place orders, and get the final bill summary',
    techTags: ['Jdbc', ' core Java', 'MySQL','oops', 'collections'],
    images: ['http://localhost:5173/images/hotel/firstImage (1).jpeg', 
    'http://localhost:5173/images/hotel/secondImage.jpeg',
    'http://localhost:5173/images/hotel/thirdImage.jpeg',
    ],
    liveLink: '#',
    repoLink: 'https://github.com/prasadsomnath/HotelBillingSystem',
    features: ['View menu items', 'Place orders', 'Generate bill summary'],
  },
  {
    id: 6,
    title: 'Guessor Game',
    shortDesc: 'Java-based number guessing game with OOPs principles.',
    fullDesc:
      'The Guessor Game is a simple console-based number guessing game developed using Java. It demonstrates the use of Object-Oriented Programming (OOP) principles such as classes, objects, and encapsulation. The game is moderated by an Umpire class, which compares the guessed values and declares the result.',
    techTags: ['core java', 'oops', 'collections'],
    images: ['http://localhost:5173/images/guessor/two-winner.jpeg', 
      'http://localhost:5173/images/guessor/one-player-winner.jpeg',
      'http://localhost:5173/images/guessor/no-winner.jpeg',],
    liveLink: '#',
    repoLink: 'https://github.com/prasadsomnath/GuessorGameProject',
    features: [' Two-player mode', 'Random number generation', 'Guessing logic with feedback'],
  },
];

const ALL_TECH_TAGS = [...new Set(SAMPLE_PROJECTS.flatMap((p) => p.techTags))].sort();

// Carousel component for cycling images inside project card
function ProjectImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images || images.length < 2) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500); // 4 seconds
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="relative h-52 w-full overflow-hidden rounded-md">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`project screenshot ${idx + 1}`}
          className={`absolute top-0 left-0 h-52 w-full object-cover transition-opacity duration-700 ${
            idx === current ? 'opacity-100 scale-105 z-10' : 'opacity-0 scale-100 z-0'
          }`}
          style={{ transition: 'opacity 0.7s, transform 0.7s' }}
          loading="lazy"
        />
      ))}
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [modalProject, setModalProject] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350; // Adjust as needed
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const filteredProjects = useMemo(() => {
    return SAMPLE_PROJECTS.filter((project) => {
      const matchesFilter = filter === 'All' || project.techTags.includes(filter);
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchTerm]);

  return (
    <section
      id="projects"
      aria-label="Projects section"
      className="max-w-7xl mx-auto px-4 py-16 bg-blue-50 dark:bg-gray-900 rounded-xl shadow-lg"
    >
      <h2 className="text-3xl font-extrabold mb-8 dark:text-white">Projects</h2>

      {/* Filter & Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 mb-8 bg-blue-50 dark:bg-gray-900 rounded-lg p-4 shadow">
        <div className="flex flex-wrap gap-2" role="list" aria-label="Filter projects by technology">
          <button
            onClick={() => setFilter('All')}
            className={`px-4 py-2 rounded-full font-semibold ${
              filter === 'All'
                ? 'bg-primary text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-primary`}
          >
            All
          </button>
          {ALL_TECH_TAGS.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full font-semibold ${
                filter === tech
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-primary`}
            >
              {tech}
            </button>
          ))}
        </div>
        <input
          type="search"
          aria-label="Search projects"
          placeholder="Search projects..."
          className="border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Projects horizontal scroll */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-white rounded-full p-2 shadow hover:bg-secondary"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
          style={{ display: 'block' }}
        >
          &lt;
        </button>
        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-white rounded-full p-2 shadow hover:bg-secondary"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          style={{ display: 'block' }}
        >
          &gt;
        </button>
        <div
          ref={scrollRef}
          className="flex flex-row gap-8 overflow-x-auto pb-4 hide-scrollbar"
          style={{ scrollBehavior: 'smooth' }}
        >
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              tabIndex="0"
              role="button"
              aria-label={`View details of project ${project.title}`}
              className="min-w-[320px] max-w-xs bg-slate-100 dark:bg-gray-800 rounded-lg shadow-md cursor-pointer focus:ring-2 focus:ring-primary p-4 flex flex-col transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl"
              onClick={() => setModalProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setModalProject(project);
                }
              }}
            >
              <ProjectImageCarousel images={project.images ?? [project.image]} />
              <h3 className="text-xl font-semibold mb-1 dark:text-white">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 flex-grow">{project.shortDesc}</p>
              <div className="mt-3 space-x-2 bg-white dark:bg-gray-900 rounded-lg p-2">
                {project.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-primary text-white rounded-full px-3 py-1 text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project modal */}
      {modalProject && <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />}
    </section>
  );
}
