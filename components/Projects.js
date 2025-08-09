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
    image: '/Gemini.png',
    demoLink: 'https://gemini-api-assistant-code.el.r.appspot.com/', // TODO: Add link to Google Play Store if live, or video demo
    githubLink: '#', // TODO: Update with real link
    type: 'SWE & AI/ML'
  },
  {
    id: 2,
    title: 'SHELLAI',
    description: 'ShellAI is a full-stack, web-based terminal emulator that leverages a large language model to create a smart and highly efficient command-line assistant. The projects core functionality is to translate natural language into executable shell commands, providing a seamless and intuitive user experience. Its designed to be a significant productivity booster for developers and system administrators by reducing the need to remember complex command-line syntax.',
    technologies: ['Python', 'OpenAI API', 'Flask', 'React', 'Dev Tools-Vite ', 'GCP', 'CSS and Tailwind CSS'],
    image: '/ShellAI.png',
    demoLink: '#', // TODO: Add video demo or deployed link
    githubLink: 'https://github.com/OmprakashSahani/Online-Judge-Platform', // TODO: Update with real link
    type: 'SWE, Full-Stack web application & AI and human-computer interaction'
  },
  {
    id: 3,
    title: 'CUSTOM SEARCH ENGINE (MINI GOOGLE SEARCH)',
    description: 'Implemented a Python-based search engine indexing 50+ documents with Inverted Index and TF-IDF ranking, achieving sub-second query latency (~0.5ms). Architected a robust, NLTK-powered, Dockerized pipeline with comprehensive testing.',
    technologies: ['Python', 'NLTK', 'Docker', 'Information Retrieval', 'Testing'],
    image: '/Apple.png',
    demoLink: '#', // TODO: Add video demo
    githubLink: 'https://github.com/OmprakashSahani/Mini-Google-Search-Engine', // TODO: Update with real link
    type: 'SWE & NLP'
  },
  {
    id: 4,
    title: 'GITHUB PROFILE ANALYZER WEB APP',
    description: 'Constructed a full-stack web app integrating 5+ GitHub REST APIs. Formulated a unique "GitHub Engagement Score" (0-100) using weighted heuristic models and efficient data aggregation. Deployed on GCP App Engine.',
    technologies: ['Python', 'Flask', 'GitHub API', 'GCP App Engine', 'Web Development'],
    image: '/project-github-analyzer.png',
    demoLink: 'https://github-analyzer-app.el.r.appspot.com/', // TODO: Add deployed link
    githubLink: 'https://github.com/OmprakashSahani/GitHub-Profile-And-Engagement-Analyzer-Web-App', // TODO: Update with real link
    type: 'Full-Stack & Data Analysis'
  },
  {
    id: 5,
    title: 'DISTRIBUTED ONLINE JUDGE',
    description: 'Built a scalable Online Judge with sub-second Python/Java code execution. Orchestrated a Docker-isolated judging pipeline across 3 services using Redis/RQ for IPC, enabling seamless deployment on 3 core GCP services. Reduced user wait times by 100% via WebSockets.',
    technologies: ['Python', 'Java', 'Docker', 'Redis', 'WebSockets', 'GCP', 'Distributed Systems'],
    image: '/Online.png',
    demoLink: '#', // TODO: Add video demo or deployed link
    githubLink: 'https://github.com/OmprakashSahani/Online-Judge-Platform', // TODO: Update with real link
    type: 'SWE & Distributed Systems'
  },
  {
    id: 6,
    title: 'HEALTHCARE ML INNOVATION (Research)',
    description: 'Applied 5+ machine learning models (Random Forest, CNN, SVM) to 4 healthcare datasets (3,400+ records) in Python. Reviewed 20+ studies to identify gaps in Clinical Decision Support Systems and evaluated diagnostic accuracy and risk prediction.',
    technologies: ['Python', 'Machine Learning', 'Random Forest', 'CNN', 'SVM', 'Healthcare Analytics'],
    image: '/health.png',
    demoLink: '#', // TODO: Add link to paper/presentation
    githubLink: 'https://github.com/your-username/healthcare-ml-research', // TODO: Update with real link
    type: 'Research & ML'
  },
  {
    id: 7,
    title: 'REAL-TIME WEATHER FORECASTING (Lead)',
    description: 'Spearheaded a team of 5 to build a Python-based weather application, including an enhanced GUI with 10% more features. Managed project lifecycle and ensured successful delivery.',
    technologies: ['Python', 'GUI Development', 'Team Leadership'],
    image: '/Weather.png',
    demoLink: '#', // TODO: Add video demo
    githubLink: 'https://github.com/your-username/weather-forecasting-app', // TODO: Update with real link
    type: 'Project Leadership'
  },
  {
    id: 8,
    title: 'AI-POWERED ENVIRONMENTAL INTELLIGENCE PLATFORM',
    description: 'Architected and developed a full-stack application that transforms complex environmental data into actionable insights and engaging narratives. Integrated real-time and historical air quality data, enabling AI-driven analysis, creative content generation (social posts, detailed reports), and interactive data visualization. Implemented data persistence with PostgreSQL and ensured seamless frontend-backend communication.',
    technologies: ['Python', 'Flask', 'PostgreSQL', 'Docker', 'React', 'Vite', 'Leaflet.js', 'Chart.js', 'OpenWeatherMap API', 'OpenAI API', 'RESTful APIs'],
    image: '/Environmental.png',
    demoLink: '#', // TODO: Add video demo
    githubLink: 'https://github.com/your-username/weather-forecasting-app', // TODO: Update with real link
    type: 'SWE, Full Stack & AI/ML'
  },
  {
    id: 9,
    title: 'AI-POWERED ROBOTIC ARM SIMULATOR',
    description: 'Designed and implemented an intelligent robotic arm simulator capable of executing natural language commands in a 3D physics environment. Leveraged AI to translate high-level human instructions into precise robotic movements for pick-and-place and complex stacking tasks. Overcame significant challenges in inverse kinematics, grasping stability, and collision avoidance within the simulation, demonstrating robust control logic.',
    technologies: ['Python', 'PyBullet', 'OpenAI API', 'Flask', 'React', 'Vite', 'Natural Language Processing (NLP)', 'Robotics Simulation', 'Inverse Kinematics'],
    image: '/Robot.png',
    demoLink: '#', // TODO: Add video demo
    githubLink: 'https://github.com/your-username/weather-forecasting-app', // TODO: Update with real link
    type: 'SWE, Full Stack, Robotics & AI/ML'
  },
  {
    id: 10,
    title: 'AI-POWERED DRUG DISCOVERY PLATFORM (FULL-STACK)',
    description: 'Architected and developed a full-stack application that leverages machine learning to predict the biological activity of new drug molecules. The platform features a user-friendly interface for molecular data input and visualization, a trained model for accurate predictions, and a robust backend that dynamically generates AI-powered explanations for a non-technical audience. It showcases skills in data science, AI integration, and full-stack web development.',
    technologies: ['Python', 'OpenAI API', 'Flask', 'React', 'Vite', 'scikit-learn', 'rdkit', 'ChEMBL Database'],
    image: '/aidrug.png',
    demoLink: '#', // TODO: Add video demo
    githubLink: 'https://github.com/your-username/weather-forecasting-app', // TODO: Update with real link
    type: 'SWE, Full Stack & AI/ML'
  },
  {
    id: 11,
    title: 'PREDICTING HEART DISEASE RISK USING MACHINE LEARNING MODEL',
    description: 'Developed a predictive heart disease model utilizing Random Forest on a dataset of 1,026 records, achieving 99% accuracy and visualizing key feature importance, leading to earlier interventions for patients.',
    technologies: ['Python', 'TensorFlow', 'Matplotlib', 'Jupyter Notebook', 'Pandas', 'scikit-learn', 'Kaggle Dataset'],
    image: '/heart.png',
    demoLink: 'https://omprakashsahani.github.io/Predicting-Heart-Disease-Risk-with-Machine-Learning-Models-in-Python/', // TODO: Add video demo
    githubLink: 'https://github.com/your-username/weather-forecasting-app', // TODO: Update with real link
    type: 'Data Analysis & AI/ML'
  },
  {
    id: 12,
    title: 'MEDICAL IMAGE ANALYSIS FOR BRAIN TUMOR DETECTION USING CONVOLUTIONAL NEURAL NETWORK (CNN)',
    description: 'Engineered a convolutional neural network (CNN) to categorize brain MRI images (253 images), obtained 90% accuracy with 30 images and 86% with 51, enabling quicker diagnosis and insight, showcasing strong self-motivation.',
    technologies: ['Python', 'TensorFlow', 'Matplotlib', 'Jupyter Notebook', 'Pandas', 'scikit-learn', 'Kaggle Dataset', 'Keras'],
    image: '/brain.png',
    demoLink: 'https://omprakashsahani.github.io/Medical-Image-Analysis-for-Brain-Tumor-Detection-Using-Convolutional-Neural-Networks-CNN-in-Python/', // TODO: Add video demo
    githubLink: 'https://omprakashsahani.github.io/Medical-Image-Analysis-for-Brain-Tumor-Detection-Using-Convolutional-Neural-Networks-CNN-in-Python51/', // TODO: Update with real link
    type: 'Data Analysis & AI/ML'
  },
  {
    id: 13,
    title: 'DIABETES PREDICTION ANALYSIS USING MACHINE LEARNING APPROACH',
    description: 'Devised a diabetes prediction model using the Pima Indians dataset (765 records, 9 features), showing SVM (80%) and Logistic Regression (79.13%) as most effective for early detection, highlighting analytical rigor.',
    technologies: ['R', 'Shiny', 'ggplot2', 'caret', 'XGBoost','Kaggle Dataset'],
    image: '/Diabetes.png',
    demoLink: 'https://rpubs.com/Omprakash-Sahani/1264366', // TODO: Add video demo
    githubLink: 'https://rpubs.com/Omprakash-Sahani/1264366', // TODO: Update with real link
    type: 'Data Analysis & AI/ML'
  },
  {
    id: 14,
    title: 'MATHEMATICAL VISUALIZATIONS IN MATLAB',
    description: 'Built 7+ interactive MATLAB visualizations, including 3D plots, vector fields, and fractals – to communicate complex mathematical ideas, with 7+ downloads on MATLAB Central, reflecting curiosity and knowledge sharing.',
    technologies: ['MATLAB', 'MATLAB Graphics', 'Statistics and Machine Learning Toolbox'],
    image: '/Maths.png',
    demoLink: 'https://in.mathworks.com/matlabcentral/fileexchange/179044-mathematical-visualizations-in-matlab', // TODO: Add video demo
    githubLink: 'https://in.mathworks.com/matlabcentral/fileexchange/179044-mathematical-visualizations-in-matlab', // TODO: Update with real link
    type: 'Visualization & AI/ML'
  },
  {
    id: 15,
    title: 'HYBRIS TIME-SERIES FORECASTING OF ENERGY CONSUMPTION USING XGBOOST AND LSTM WITH WEATHER, TRMPORAL, AND HOLIDAY FEATURES',
    description: 'Implemented a hybrid XGBoost-LSTM model for energy forecasting using the UCI dataset (370 time-series, 15-minute intervals), integrating weather, temporal, and holiday data to improve accuracy, reflecting initiative and real-world impact.',
    technologies: ['Python', 'Jupyter Notebook', 'TensorFlow', 'XGBoost', 'ElectricityLoadDiagrams20112014 Dataset'],
    image: '/Weatherp.png',
    demoLink: '#', // TODO: Add video demo
    githubLink: 'https://github.com/OmprakashSahani/Hybrid-Time-Series-Forecasting-of-Energy-Consumption', // TODO: Update with real link
    type: 'Data Analysis & AI/ML'
  },
  {
    id: 16,
    title: 'PROBABILISTIC TIME SERIES FORECASTING USING QUANTILE REGRESSION AND DEEP LEARNING',
    description: 'Leveraged LSTM-based regression model to forecast PM2.5 concentrations, generating probabilistic intervals that captured predictive uncertainty through 10th, 50th, and 90th percentile estimates, informing air quality insights for decision-making.',
    technologies: ['Python', 'Jupyter Notebook', 'TensorFlow', 'XGBoost', 'Beijing PM2.5 Dataset'],
    image: '/DL.png',
    demoLink: '#', // TODO: Add video demo
    githubLink: 'https://github.com/OmprakashSahani/Probabilistic-Time-Series-Forecasting', // TODO: Update with real link
    type: 'Data Analysis & AI/ML'
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