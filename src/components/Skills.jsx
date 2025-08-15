import React from 'react';

const SKILLS = [
  { name: 'SpringBoot', level: 90 },
  { name: 'Doker/Kafka', level: 70 },
  { name: 'MySQL', level: 90 },
  { name: 'React.js', level: 75 },
  { name: 'JavaScript', level: 80 },
  { name: 'CSS3 / HTML5', level: 90 },
  { name: 'java', level: 90},
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="max-w-4xl mx-auto px-4 py-16"
    >
      <h2 id="skills-title" className="text-3xl font-extrabold mb-6 dark:text-white">
        Skills
      </h2>
      <div className="space-y-6">
        {SKILLS.map(({ name, level }) => (
          <div key={name}>
            <div className="flex justify-between mb-1">
              <span className="font-semibold dark:text-white">{name}</span>
              <span className="text-sm text-gray-600 dark:text-gray-300">{level}%</span>
            </div>
            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
              <div
                className="bg-primary h-3 rounded-full transition-all duration-500"
                style={{ width: `${level}%` }}
                aria-valuenow={level}
                aria-valuemin="0"
                aria-valuemax="100"
                role="progressbar"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
