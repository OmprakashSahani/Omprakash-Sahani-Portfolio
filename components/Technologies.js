// components/Technologies.js
"use client";

import React from 'react';
import { motion } from 'framer-motion';
// Import icons from react-icons - you can add more as needed!
import { 
  FaPython, FaReact, FaAws, FaDocker, FaGitAlt, FaJava, FaDatabase, FaJs, FaNodeJs, FaLinux, FaCloud, FaServer, FaCode, FaMicrochip, FaBrain, FaFigma, FaLaptopCode, FaGlobe, FaMobileAlt, FaHtml5, FaCss3Alt, FaRProject, FaChartBar, FaGoogle
} from 'react-icons/fa'; // Added FaHtml5, FaCss3Alt, FaRProject, FaChartBar (for Matplotlib/XGBoost), FaGoogle (for Firebase)


const technologiesData = [
  {
    category: "Programming Languages",
    icon: FaCode,
    items: [
      { name: "Python", proficiency: "Expert", details: "ML, Data Analysis, Backend, Scripting", icon: FaPython },
      { name: "Java", proficiency: "Advanced", details: "Backend Development, Distributed Systems, Flutter", icon: FaJava },
      { name: "JavaScript/TypeScript", proficiency: "Advanced", details: "Frontend (React, Next.js), Web APIs", icon: FaJs },
      { name: "C++", proficiency: "Intermediate", details: "Algorithms, Data Structures, Competitive Programming" },
      { name: "SQL", proficiency: "Expert", details: "Database Management, Complex Queries", icon: FaDatabase },
      { name: "R Programming", proficiency: "Intermediate", details: "Statistical Analysis, Data Visualization", icon: FaRProject }, // ADDED R
      { name: "MATLAB", proficiency: "Intermediate", details: "Numerical Computing, Algorithm Prototyping" }, // ADDED MATLAB
      { name: "Shell Scripting", proficiency: "Advanced", details: "Linux Automation, DevOps workflows", icon: FaLinux },
    ]
  },
  {
    category: "Web & Mobile Frameworks", // NEW CATEGORY
    icon: FaGlobe, // Icon for web/mobile
    items: [
      { name: "React.js", proficiency: "Advanced", details: "Modern UI, Component-based Architecture", icon: FaReact },
      { name: "Next.js", proficiency: "Advanced", details: "SSR/SSG, App Router, Full-stack", icon: FaJs },
      { name: "HTML", proficiency: "Expert", details: "Semantic Structure, Web Content Markup", icon: FaHtml5 }, // ADDED HTML
      { name: "CSS", proficiency: "Expert", details: "Styling, Responsive Design, Animations", icon: FaCss3Alt }, // ADDED CSS
      { name: "Flask", proficiency: "Advanced", details: "RESTful APIs, Backend Development" },
      { name: "WebSockets", proficiency: "Intermediate", details: "Real-time Communication (Online Judge)" },
      { name: "Flutter", proficiency: "Intermediate", details: "Cross-platform Mobile Development", icon: FaMobileAlt },
    ]
  },
  {
    category: "Machine Learning & AI", // NEW CATEGORY
    icon: FaBrain, // Icon for ML/AI
    items: [
      { name: "PyTorch", proficiency: "Advanced", details: "Deep Learning, Neural Network Design", icon: FaBrain },
      { name: "TensorFlow", proficiency: "Intermediate", details: "ML Model Deployment, Production ML" },
      { name: "XGBoost", proficiency: "Advanced", details: "Gradient Boosting, Tree-based Models" }, // ADDED XGBoost
      { name: "Scikit-learn", proficiency: "Expert", details: "Classical ML Algorithms, Data Preprocessing" },
      { name: "Pandas/NumPy", proficiency: "Expert", details: "Data Manipulation, Scientific Computing" },
      { name: "Matplotlib", proficiency: "Advanced", details: "Data Visualization, Plotting", icon: FaChartBar }, // ADDED Matplotlib
      { name: "NLTK", proficiency: "Advanced", details: "Natural Language Processing (NLP)" },
    ]
  },
  {
    category: "Cloud Platforms & DevOps",
    icon: FaCloud,
    items: [
      { name: "Google Cloud Platform (GCP)", proficiency: "Advanced", details: "Compute Engine, App Engine, S3, Lambda, API Gateway, Deployment", icon: FaCloud },
      { name: "Firebase", proficiency: "Intermediate", details: "Backend-as-a-Service, Realtime Database, Auth", icon: FaGoogle }, // ADDED Firebase
      { name: "AWS", proficiency: "Intermediate", details: "EC2, S3, Lambda, DynamoDB, RDS, VPC", icon: FaAws },
      { name: "Docker", proficiency: "Expert", details: "Containerization, Microservices Deployment", icon: FaDocker },
      { name: "Git & GitHub", proficiency: "Expert", details: "Version Control, Collaborative Development", icon: FaGitAlt },
      { name: "Linux", proficiency: "Advanced", details: "Operating System, Development Environment", icon: FaLinux },
    ]
  },
  {
    category: "Databases & Data Management",
    icon: FaDatabase,
    items: [
      { name: "MySQL", proficiency: "Advanced", details: "Relational Database Management" },
      { name: "PostgreSQL", proficiency: "Advanced", details: "Relational Database Design, Query Optimization" },
      { name: "MongoDB", proficiency: "Intermediate", details: "NoSQL Document Database" },
      { name: "Redis", proficiency: "Intermediate", details: "Caching, Task Orchestration (Online Judge)" },
      { name: "SQL (Language)", proficiency: "Expert", details: "Complex Queries, Data Manipulation" },
    ]
  },
  {
    category: "Tools & Methodologies",
    icon: FaLaptopCode,
    items: [
      { name: "VS Code", proficiency: "Expert", details: "Primary Integrated Development Environment" },
      { name: "Jupyter Notebook", proficiency: "Advanced", details: "Data Science Workflow, Prototyping" },
      { name: "Google Colab", proficiency: "Advanced", details: "Collaborative ML Development" },
      { name: "RESTful APIs", proficiency: "Expert", details: "Designing and Consuming APIs" },
      { name: "Agile/Scrum", proficiency: "Advanced", details: "Project Management, Iterative Development" },
      { name: "Unit/Integration Testing", proficiency: "Expert", details: "Robust Software Development" },
      { name: "Debugging", proficiency: "Expert", details: "Problem Isolation & Resolution" },
    ]
  }
];

const TechnologyCategory = ({ category }) => {
  const IconComponent = category.icon;

  return (
    <motion.div
      className="bg-gray-900 dark:bg-black rounded-lg shadow-lg p-6 flex flex-col h-full border border-gray-700 dark:border-gray-900" /* ADJUSTED: bg-gray-900 dark:bg-black, border-gray-700 dark:border-gray-900 */
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3"> {/* ADJUSTED: text-white */}
        {IconComponent && <IconComponent className="text-blue-400" />} {/* Adjusted icon color slightly brighter */}
        {category.category}
      </h3>
      <ul className="space-y-3 text-base text-gray-200 flex-grow"> {/* ADJUSTED: text-gray-200 */}
        {category.items.map((item, idx) => {
          const ItemIconComponent = item.icon;
          return (
            <li key={idx} className="flex flex-col">
              <span className="font-semibold text-white flex items-center gap-2"> {/* ADJUSTED: text-white */}
                {ItemIconComponent && <ItemIconComponent className="text-blue-300 text-lg" />} {/* Adjusted icon color slightly brighter */}
                {item.name}
              </span>
              <span className="text-sm italic text-gray-400 ml-6">({item.proficiency})</span> {/* ADJUSTED: text-gray-400 */}
              <span className="text-sm text-gray-300 ml-6">{item.details}</span> {/* ADJUSTED: text-gray-300 */}
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default function Technologies() {
  return (
    <section id="technologies" className="pt-10 md:pt-16 pb-10 md:pb-16
                                         bg-gray-50 dark:bg-gray-800
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
          My Technical Stack
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologiesData.map((category, index) => (
            <TechnologyCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}