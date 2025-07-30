// components/Research.js
"use client"; // Retained for now if other client-side hooks are used, otherwise can be removed

import React from 'react';
// Removed: import { motion } from 'framer-motion'; // REMOVED

const researchPapersData = [
  {
    id: 1,
    title: 'TRANSFORMING HEALTHCARE WITH MACHINE LEARNING',
    authors: 'Omprakash Sahani', // As it's independent research
    publication: 'Independent Research Project (Jan 2025 – Present)', // Framed as independent project
    abstract: 'Applied 5+ machine learning models (Random Forest, CNN, SVM) to 4 healthcare datasets (3,400+ records) in Python to evaluate diagnostic accuracy and risk prediction. Reviewed 20+ studies to identify gaps in Clinical Decision Support Systems and inform medical decision-making.',
    keywords: ['Machine Learning', 'Healthcare AI', 'Random Forest', 'CNN', 'SVM', 'Medical Informatics'],
    pdfLink: '/healthcare-ml-research.pdf', // TODO: Update with actual PDF link if available
    projectPage: '#', // TODO: Link to a dedicated page or presentation if exists
  },
  // You can add more entries for other research-oriented projects or publications here
  // For example, the specific algorithmic contributions of your Gemini Dev Assistant or Search Engine.
];

const ResearchPaperCard = ({ paper }) => {
  return (
    <div // Changed from motion.div, removed animation props
      className="bg-gray-900 dark:bg-black rounded-lg shadow-lg p-6 mb-8 border border-gray-700 dark:border-gray-900" /* Consistent with ProjectCard */
    >
      <h3 className="text-2xl font-bold text-white mb-2">{paper.title}</h3> 
      <p className="text-base text-gray-300 mb-2"> 
        <span className="font-semibold">Authors:</span> {paper.authors}
      </p>
      <p className="text-base text-gray-300 mb-4 italic">{paper.publication}</p> 
      <p className="text-sm text-gray-300 flex-grow mb-4">{paper.abstract}</p> 
      
      <div className="flex flex-wrap gap-2 mb-4">
        {paper.keywords.map((keyword, index) => (
          <span key={index} className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-medium"> 
            {keyword}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-auto">
        {paper.pdfLink && (
          <a
            href={paper.pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1.5 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 transition"
          >
            Read PDF
          </a>
        )}
        {paper.projectPage && (
          <a
            href={paper.projectPage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1.5 border border-gray-400 text-gray-300 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition" 
          >
            Project Page
          </a>
        )}
      </div>
    </div>
  );
};

export default function Research() {
  return (
    <section id="research" className="py-16 md:py-24
                                     bg-gray-50 dark:bg-gray-900 /* Consistent with Projects section background */
                                     text-gray-900 dark:text-gray-100"> 
      <div className="container">
        <h2 // Changed from motion.h2, removed animation props
          className="text-3xl md:text-4xl font-extrabold text-center mb-12
                     text-gray-800 dark:text-gray-200" /* Consistent with Projects title */
        >
          Research & Publications
        </h2>

        <div className="space-y-8">
          {researchPapersData.map((paper) => (
            <ResearchPaperCard key={paper.id} paper={paper} />
          ))}
        </div>

        {/* Dedicated section for Research Interests (crucial for Ph.D.) */}
        <div // Changed from motion.div, removed animation props
          className="mt-16 p-6 bg-purple-600 dark:bg-purple-950 rounded-lg shadow-md border border-purple-500 dark:border-purple-800" /* This specific block can retain its purple theme as it's a distinct callout */
        >
          <h3 className="text-2xl font-bold text-white mb-4 text-center">My Research Interests</h3> 
          <div className="text-base text-gray-200 leading-relaxed space-y-3"> 
            <p>
              My primary research interests lie at the intersection of **Scalable Machine Learning & Artificial Intelligence** and **Robust Distributed Systems**.
            </p>
            <p>Specifically, I am keen on exploring topics such as:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>**Optimizing Distributed ML Systems:** Researching efficient training and deployment of AI models across large-scale distributed environments (e.g., Federated Learning architectures, distributed inference).</li>
              <li>**AI for System Resilience & Optimization:** Applying AI/ML techniques to enhance the fault tolerance, resource management, and performance of complex distributed systems.</li>
              <li>**Algorithmic Innovation in NLP & Information Retrieval:** Developing novel algorithms for contextual understanding and efficient data access in large unstructured datasets.</li>
              <li>**Machine Learning for Decision Support:** Leveraging ML models for critical decision-making and risk prediction in complex domains like healthcare.</li>
            </ul>
            <p>
              I am particularly excited about the work being done by faculty like **[Specific MIT Professor Name 1]** and **[Specific MIT Professor Name 2]** in the EECS department at MIT, whose research aligns closely with my aspirations in [mention their specific research area if you know it]. I look forward to contributing to and advancing these frontiers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}