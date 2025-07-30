// components/Projects.js
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Next.js Image component for optimization

const projectsData = [
  {
    id: 1,
    title: 'GEMINI DEV ASSISTANT',
    description: 'Developed an AI-powered Code Assistant using Google Gemini API, significantly reducing code generation time by 75% and boosting developer productivity. Engineered context management algorithms (90%+ accuracy). Deployed on GCP, ensuring API response times <500ms.',
    technologies: ['React Native', 'Flask', 'Google Gemini API', 'GCP', 'AI/ML', 'Python'],
    image: '/project-gemini-dev-assistant.jpg',
    demoLink: '#', // TODO: Add link to Google Play Store if live, or video demo
    githubLink: 'https://github.com/your-username/gemini-dev-assistant', // TODO: Update with real link
    type: 'SWE & AI/ML'
  },
  {
    id: 2,
    title: 'DISTRIBUTED ONLINE JUDGE',
    description: 'Built a scalable Online Judge with sub-second Python/Java code execution. Orchestrated a Docker-isolated judging pipeline across 3 services using Redis/RQ for IPC, enabling seamless deployment on 3 core GCP services. Reduced user wait times by 100% via WebSockets.',
    technologies: ['Python', 'Java', 'Docker', 'Redis', 'WebSockets', 'GCP', 'Distributed Systems'],
    image: '/project-online-judge.png',
    demoLink: '#', // TODO: Add video demo or deployed link
    githubLink: 'https://github.com/OmprakashSahani/Online-Judge-Platform', // TODO: Update with real link
    type: 'SWE & Distributed Systems'
  },
  {
    id: 3,
    title: 'GITHUB PROFILE ANALYZER WEB APP',
    description: 'Constructed a full-stack web app integrating 5+ GitHub REST APIs. Formulated a unique "GitHub Engagement Score" (0-100) using weighted heuristic models and efficient data aggregation. Deployed on GCP App Engine.',
    technologies: ['Python', 'Flask', 'GitHub API', 'GCP App Engine', 'Web Development'],
    image: '/project-github-analyzer.png',
    demoLink: 'https://github-analyzer-app.el.r.appspot.com/', // TODO: Add deployed link
    githubLink: 'https://github.com/OmprakashSahani/GitHub-Profile-And-Engagement-Analyzer-Web-App', // TODO: Update with real link
    type: 'Full-Stack & Data Analysis'
  },
  {
    id: 4,
    title: 'CUSTOM SEARCH ENGINE (MINI GOOGLE SEARCH)',
    description: 'Implemented a Python-based search engine indexing 50+ documents with Inverted Index and TF-IDF ranking, achieving sub-second query latency (~0.5ms). Architected a robust, NLTK-powered, Dockerized pipeline with comprehensive testing.',
    technologies: ['Python', 'NLTK', 'Docker', 'Information Retrieval', 'Testing'],
    image: '/project-search-engine.png',
    demoLink: '#', // TODO: Add video demo
    githubLink: 'https://github.com/OmprakashSahani/Mini-Google-Search-Engine', // TODO: Update with real link
    type: 'SWE & NLP'
  },
  {
    id: 5,
    title: 'HEALTHCARE ML INNOVATION (Research)',
    description: 'Applied 5+ machine learning models (Random Forest, CNN, SVM) to 4 healthcare datasets (3,400+ records) in Python. Reviewed 20+ studies to identify gaps in Clinical Decision Support Systems and evaluated diagnostic accuracy and risk prediction.',
    technologies: ['Python', 'Machine Learning', 'Random Forest', 'CNN', 'SVM', 'Healthcare Analytics'],
    image: '/project-healthcare-ml.png',
    demoLink: '#', // TODO: Add link to paper/presentation
    githubLink: 'https://github.com/your-username/healthcare-ml-research', // TODO: Update with real link
    type: 'Research & ML'
  },
  {
    id: 6,
    title: 'REAL-TIME WEATHER FORECASTING (Lead)',
    description: 'Spearheaded a team of 5 to build a Python-based weather application, including an enhanced GUI with 10% more features. Managed project lifecycle and ensured successful delivery.',
    technologies: ['Python', 'GUI Development', 'Team Leadership'],
    image: '/project-weather-app.png',
    demoLink: '#', // TODO: Add video demo
    githubLink: 'https://github.com/your-username/weather-forecasting-app', // TODO: Update with real link
    type: 'Project Leadership'
  },
  // Add your Freelance Software Developer experience here as a project if you wish, or keep it in About Me.
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-gray-900 dark:bg-black rounded-lg shadow-lg overflow-hidden flex flex-col h-full border border-gray-700 dark:border-gray-900" /* ADJUSTED: bg-gray-900 dark:bg-black, border-gray-700 dark:border-gray-900 */
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 w-full bg-gray-800 dark:bg-gray-950 overflow-hidden"> {/* Adjusted image placeholder background */}
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill // Fills the parent div
            style={{ objectFit: 'cover' }} // Covers the area
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive image sizes
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 text-base font-semibold">
            Image Placeholder
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3> {/* ADJUSTED: text-white */}
        <p className="text-sm text-gray-300 mb-4 flex-grow">{project.description}</p> {/* ADJUSTED: text-gray-300 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium"> {/* ADJUSTED: bg-blue-600 text-white */}
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-auto">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
            >
              Demo/Video
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 border border-gray-400 text-gray-300 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition" /* ADJUSTED: border-gray-400, text-gray-300, hover:bg-gray-700 hover:text-white */
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="pt-10 md:pt-16 pb-16 md:pb-24
                                     bg-gray-50 dark:bg-gray-900
                                     text-gray-900 dark:text-gray-100">
      <div className="container">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16
                     text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          My Projects & Research
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}