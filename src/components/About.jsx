import React from 'react';
import profilePic from '../assets/profile.jpg';

const TECH_STACK = [
  'Java 8',
  'Spring Boot',
  'Restful APIs',
  'Microservices',
  'Docker',
  'JavaScript',
  'html/css',
  'React',
  'Apache Kafka',
  'MySQL',
  'Git',
  'Jenkins',
  'JUnit',


];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      <img
        src={profilePic}
        alt="About Me profile photo"
        className="rounded-lg shadow-lg w-full max-w-sm mx-auto md:mx-0"
      />

      <div>
        <h2
          id="about-title"
          className="text-3xl font-extrabold mb-4 dark:text-white"
        >
          About Me
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          {/* TODO: Replace with your short bio */}
          I&apos;m  an aspiring  <b>Full-Stack Developer</b> with a strong foundation in Electronics & Communication Engineering (ECE) and with hands-on experience in developing and deploying <b>microservice based web applications using Java, Spring Boot, React.js, and MySQL.</b> Skilled in designing RESTful APIs,
implementing Docker-based deployments, and monitoring distributed systems with the <b>ELK stack</b>.</p>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          I have a keen interest in <b>software development and a passion for learning new technologies</b>. My goal is to create impactful software solutions that enhance user experiences and drive business success.
          I am always eager to learn and grow, and I believe that my skills and enthusiasm make me a valuable asset to any team.
        </p>

        <h3 className="font-semibold mb-2 dark:text-white">Tech Stack</h3>
        <ul className="flex flex-wrap gap-2 mb-6">
          {TECH_STACK.map((tech) => (
            <li
              key={tech}
              className="bg-primary text-white rounded-full px-3 py-1 text-sm shadow-sm"
            >
              {tech}
            </li>
          ))}
        </ul>

        <a
          href="/Resume.pdf"
          download
          className="inline-block bg-secondary text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Download Resume 📄
        </a>
      </div>
    </section>
  );
}
