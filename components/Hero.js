// components/Hero.js
"use client"; // Still a client component due to tagline animation

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Import icons from react-icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';


// Code content for STATIC terminal display - UPDATED WITH MORE RESUME DETAILS
const codeContentStaticDisplay = [
  "$ > const OmprakashSahani = {",
  "$ >   role: 'Software Engineer | Data Scientist',",
  "$ >   focus: 'Scalable Systems & AI/ML',", // More specific
  "$ >   phd_pursuit: 'Electrical Engineering and Computer Science Research (MIT)',", // Concise for MIT
  "$ >   impact: [",
  "$ >     'Productivity_Up_75%',",     // From Gemini Dev Assistant
  "$ >     'WaitTime_Down_100%'",       // From Online Judge
  "$ >   ],",
  "$ >   tools: [",
  "$ >     'Python', 'Java', 'C++', 'JS/TS',",
  "$ >     'React/Next.js', 'PyTorch', 'Google Cloud Platform', 'Docker'", // Key technologies
  "$ >   ]",
  "$ > };",
  "$ > ",
  "$ > // Explore my work, contributions, and aspirations below!"
];


// Dynamic Taglines - UPDATED WITH MORE RESUME ALIGNED PHRASES
const taglines = [
  "Building Scalable & Intelligent Systems",
  "Crafting High-Impact Software Solutions",
  "Pushing Frontiers in EECS Research",
  "Bridging Theory with Practical Innovation",
  "Optimizing Performance & Developer Productivity",
  "Specializing in AI/ML & Distributed Systems"
];

// Framer Motion variants for tagline typing/fade effect
const taglineVariants = {
  initial: { opacity: 0, width: 0 },
  animate: { opacity: 1, width: "100%", transition: { duration: 1.5, ease: "easeInOut" } },
  exit: { opacity: 0, width: 0, transition: { duration: 0.5, ease: "easeInOut" } }
};


export default function Hero() {
  // State for dynamic tagline
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

  // Function to handle smooth scroll (MOVED HERE to be in component scope)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Cycle through taglines
    const taglineInterval = setInterval(() => {
      setCurrentTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(taglineInterval);
  }, [taglines.length]);


  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden
                        bg-gradient-to-br from-gray-950 to-gray-900
                        dark:from-gray-950 dark:to-gray-900
                        text-white p-6 md:p-8">
      {/* Existing Background Gradients/Shapes - very subtle */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-32 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob animation-delay-4000"></div>

      {/* Main content - now centered, but terminal explicitly left */}
      <div className="relative z-10 text-center max-w-4xl space-y-4 flex flex-col items-center py-20">
        {/* Static Headline: "Omprakash Sahani" */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4"
        >
          Omprakash Sahani
        </motion.h1>

        {/* Dynamic Tagline (This animation remains) */}
        <AnimatePresence mode="wait">
          <motion.p
            key={currentTaglineIndex}
            variants={taglineVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-lg md:text-xl text-gray-300 overflow-hidden whitespace-nowrap mx-auto max-w-full mb-8"
          >
            {taglines[currentTaglineIndex]}
          </motion.p>
        </AnimatePresence>

        {/* Standalone Static Code Terminal */}
        <div className="bg-black dark:bg-black backdrop-blur-sm rounded-xl p-5 md:p-6 mt-10 shadow-3xl border-0 text-left
                        w-full max-w-xl md:max-w-2xl aspect-video mx-auto relative overflow-hidden h-64 md:h-80">
            {/* Terminal Top Bar */}
            <div className="absolute top-0 left-0 right-0 flex justify-between items-center text-gray-400 text-xs p-3 border-b border-gray-700 dark:border-gray-800 z-10 bg-black">
                <span className="font-bold">Code Terminal</span>
                <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                    <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></span>
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                </div>
            </div>

            {/* Static Code Content Area - NOW WITH ENHANCED SYNTAX HIGHLIGHTING */}
            <div className="h-full w-full flex flex-col justify-start text-xs md:text-sm leading-relaxed whitespace-pre-wrap px-4 py-2 pt-10">
                {codeContentStaticDisplay.map((line, index) => {
                    const isPromptLine = line.startsWith('$ > ');
                    const prompt = isPromptLine ? <span className="text-gray-400">$ &gt; </span> : null;
                    const contentAfterPrompt = isPromptLine ? line.substring(4) : line;

                    let contentColorClass = "text-white"; // Default fallback

                    if (contentAfterPrompt.includes('const') || contentAfterPrompt.includes('class') || contentAfterPrompt.includes('function') || contentAfterPrompt.includes('static')) {
                        contentColorClass = "text-fuchsia-400"; // Keywords: const, class, function, static
                    } else if (contentAfterPrompt.includes('//')) {
                        contentColorClass = "text-gray-400 italic"; // Comments (slightly brighter)
                    } else if (contentAfterPrompt.includes("'") || contentAfterPrompt.includes('"')) {
                        contentColorClass = "text-yellow-400"; // Strings
                    } else if (contentAfterPrompt.includes('{') || contentAfterPrompt.includes('}') || contentAfterPrompt.includes(';')) {
                        contentColorClass = "text-cyan-400"; // Brackets/Semis
                    } else if (contentAfterPrompt.includes('role') || contentAfterPrompt.includes('pursuit') || contentAfterPrompt.includes('passion') || contentAfterPrompt.includes('Key Focus Areas') || contentAfterPrompt.includes('Explore my work')) {
                        contentColorClass = "text-lime-400"; // Properties/Descriptions/Highlighted Info (brighter green)
                    } else if (contentAfterPrompt.includes('-')) { // For list items like in Key Focus Areas
                         contentColorClass = "text-red-400"; // Dash for list item (brighter)
                    }
                    else if (contentAfterPrompt === '') {
                         contentColorClass = "text-transparent"; // Blank lines
                    } else {
                         contentColorClass = "text-white"; // Fallback for other text (pure white)
                    }


                    return (
                        <p key={index}>
                            {prompt}
                            <span className={contentColorClass}>
                                {contentAfterPrompt}
                            </span>
                        </p>
                    );
                })}
            </div>
        </div>

        {/* Call to Action Buttons - NOW LINKED TO SECTIONS */}
        <div className="flex justify-center gap-3 pt-6 w-full flex-wrap">
          <motion.a /* Changed to motion.a */
            href="#projects" /* Link to Projects section */
            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300 text-base inline-flex items-center justify-center"
          >
            View My Projects
          </motion.a>
          <motion.a /* Changed to motion.a */
            href="#about" /* Link to About section */
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-transparent border border-gray-400 text-gray-300 font-semibold rounded-full shadow-lg hover:bg-gray-700 hover:text-white transition duration-300 text-base inline-flex items-center justify-center"
          >
            Learn More About Me
          </motion.a>
          {/* Download Resume Button */}
          <motion.a /* Use <a> tag for download attribute */
            href="/resume.pdf" /* Path to your resume in the public folder */
            download="Omprakash_Sahani_Resume.pdf" /* Suggested filename for download */
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition duration-300 text-base inline-flex items-center justify-center" /* Added inline-flex for centering */
          >
            Download Resume
          </motion.a>
        </div>

        {/* NEW: GitHub & LinkedIn Icons - MOVED HERE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }} /* Adjusted delay to appear after buttons */
          className="flex justify-center gap-6 mt-10" /* Adjusted mt-6 for spacing from buttons */
        >
          <motion.a
            href="https://github.com/OmprakashSahani" /* <--- UPDATE THIS! */
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-8 h-8 md:w-9 md:h-9" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/omprakashsahani" /* <--- UPDATE THIS! */
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-8 h-8 md:w-9 md:h-9" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}