// components/About.js
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
        duration: 0.8
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const currentYear = new Date().getFullYear();

  const memberships = [
    { name: 'Google Developer Program', icon: '🌟', link: 'https://developers.google.com/' },
    { name: 'GitHub Developer Program', icon: '🐙', link: 'https://github.com/community/developer-program' },
    { name: 'OpenAI Developer Program', icon: '🧠', link: 'https://openai.com/developers' },
    { name: 'LeetCode Profile', icon: '📝', link: 'https://leetcode.com/your-leetcode-profile/' }, // <--- UPDATE THIS
    { name: 'HackerRank Profile', icon: '🏆', link: 'https://www.hackerrank.com/your-hackerrank-profile' }, // <--- UPDATE THIS
    // Add more memberships or competitive programming profiles here
  ];

  // --- Aspirations as Code: Dynamic Text Animation ---
  const aspirationsCodeBlocks = [
    [
      "const myFuture = {",
      "  role: 'Software Engineer | Data Scientist',",
      "  target_company: 'Google',",
      "  phd_goal: 'EECS @ MIT',",
      "  impact_focus: 'Scalable AI & Distributed Systems'",
      "};"
    ],
    [
      "// Drive:",
      "// - Transform complex problems into elegant code.",
      "// - Push boundaries in ML and distributed computing.",
      "// - Bridge advanced research with real-world applications.",
      "// - Deliver measurable impact. // Ready for challenges."
    ]
  ];
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBlockIndex((prevIndex) => (prevIndex + 1) % aspirationsCodeBlocks.length);
    }, 8000); // Change block every 8 seconds (adjust as needed)
    return () => clearInterval(interval);
  }, [aspirationsCodeBlocks.length]);

  const typingAnimationVariants = {
    hidden: { width: 0 },
    visible: { width: "100%", transition: { duration: 1.5, ease: "linear" } },
    exit: { width: "0%", transition: { duration: 0.5, ease: "linear" } }
  };
  // --- End Aspirations as Code ---

  // Content for the NEW static terminal in About Me
  const educationTerminalContent = [
    "function getEducationInfo() {",
    "  return {",
    "    university: 'Sanjay Ghodawat University',",
    "    degree: 'Bachelor of Technology (B.Tech) in Computer Science and Engineering',",
    "    graduated: 'May 2023',",
    "    gpa: '8.40/10.0 (3.62/4.0 U.S.)',",
    "    distinction: 'First Class with Distinction',",
    "    relevant_courses: [",
    "      'Data Structures & Algorithms',",
    "      'Operating Systems (Linux)',",
    "      'Computer Networks (TCP/IP)',",
    "      'Software Engineering',",
    "      'Database Management System (DBMS)',",
    "      'Distributed Systems',",
    "      'Machine Learning',",
    "      'Artificial Intelligence'",
    "    ]",
    "  };",
    "}",
    "", // Blank line
    "function getCommunityInvolvement() {",
    "  return [",
    "    'Google Developer Program (Participant)',",
    "    'GitHub Developer Program (Member)',",
    "    'OpenAI Developer Program (Participant)',",
    "    'LeetCode Profile: Active Participant',",
    "    'HackerRank Profile: Certified Expert'",
    "  ];",
    "}",
    "", // Blank line
    "// Community involvement fuels growth.",
  ];

  return (
    <section id="about" className="pt-20 md:pt-32 pb-10 md:pb-16
                                   bg-slate-50 dark:bg-gray-800
                                   text-gray-800 dark:text-gray-100">
      <div className="container">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16
                     text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          A Glimpse into My Journey
        </motion.h2>

        {/* Main "About Me" Content - Narrative and Education/Community Side-by-Side */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Column 1: Narrative & Philosophy - NOW ITALIC */}
          <motion.div variants={itemVariants} className="space-y-6 text-sm md:text-base leading-relaxed italic"> {/* ADDED: italic */}
            <p>
              An innovative **Software Engineer and Data Scientist** with a profound passion for translating complex challenges into elegant, high-impact technical solutions. My drive lies at the intersection of scalable system design and intelligent data applications.
            </p>
            <p>
              My expertise is proven through engineering projects like the AI-powered Gemini Dev Assistant, which significantly boosted productivity, and a Distributed Online Judge, which optimized execution times. I thrive on architecting robust platforms on Google Cloud, applying core CS fundamentals and advanced ML techniques.
            </p>
            <p>
              Beyond development, my intellectual curiosity compels me towards deep academic research. I explore applying cutting-edge machine learning to real-world domains like healthcare risk management, always seeking to bridge theoretical insights with practical, impactful implementations.
            </p>
            <p>
              Proficient in Python, Java, C++, and JavaScript, with a strong foundation in DS&A and distributed systems, I am poised to contribute meaningfully to both industry-leading innovation and frontier academic advancement.
            </p>
          </motion.div>

          {/* Column 2: Education & Community Involvement (AS A BLACK CODE TERMINAL) */}
          <motion.div variants={itemVariants} className="flex justify-center items-center h-full">
            <div className="bg-black dark:bg-black backdrop-blur-sm rounded-xl p-3 shadow-2xl border-0 text-left
                            w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[9/16]
                            mx-auto relative overflow-hidden h-[300px] md:h-[400px] lg:h-[450px] flex flex-col justify-between">
                {/* Terminal Top Bar */}
                <div className="flex justify-between items-center text-gray-400 text-xs p-2 border-b border-gray-700 dark:border-gray-800 z-10 bg-black">
                    <span className="font-bold">Education & Community</span>
                    <div className="flex gap-1">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    </div>
                </div>

                {/* Static Code Content Area - NOW WITH NORMAL TEXT & NO PROMPT */}
                <div className="flex-grow text-xs md:text-sm leading-relaxed whitespace-pre-wrap px-3 py-2 overflow-y-auto text-gray-200">
                    {educationTerminalContent.map((line, index) => (
                        <p key={index}>
                            {line.includes('function') || line.includes('return') ? ( // Keywords
                                <span className="text-blue-300">{line}</span>
                            ) : line.includes('//') ? ( // Comments
                                <span className="text-gray-500 italic">{line}</span>
                            ) : line.includes("'") || line.includes('"') ? ( // Strings
                                <span className="text-yellow-300">{line}</span>
                            ) : line.includes('{') || line.includes('}') || line.includes('[') || line.includes(']') ? ( // Brackets/Containers
                                <span className="text-cyan-300">{line}</span>
                            ) : line.includes('university') || line.includes('degree') || line.includes('graduated') || line.includes('gpa') || line.includes('distinction') || line.includes('relevant_courses') || line.includes('memberships') || line.includes('Google') || line.includes('GitHub') || line.includes('OpenAI') || line.includes('LeetCode') || line.includes('HackerRank') ? ( // Properties/Specific names
                                <span className="text-lime-300">{line}</span>
                            ) : (
                                <span className="text-gray-200">{line}</span> // Default code text color
                            )}
                        </p>
                    ))}
                </div>
            </div>
          </motion.div>
        </motion.div>

        {/* My Aspirations (NOW A CONTINUOUSLY RUNNING CODE PROCESS) */}
        <motion.div
          className="mt-10 p-8 bg-gray-900 dark:bg-black rounded-lg shadow-xl border border-gray-700 dark:border-gray-900 font-mono text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg md:text-xl font-bold text-green-400 mb-4 text-center">My Aspirations // A Running Process</h3>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBlockIndex}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="text-sm md:text-base leading-relaxed text-white"
            >
              {aspirationsCodeBlocks[currentBlockIndex].map((line, index) => (
                <motion.p
                  key={index}
                  variants={typingAnimationVariants}
                  className="overflow-hidden whitespace-pre"
                >
                  {line}
                </motion.p>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
        {/* End of My Aspirations block */}

      </div>
    </section>
  );
}