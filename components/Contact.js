// components/Contact.js
"use client";

import React from 'react';
import { motion } from 'framer-motion';
// You might want to use icons here later, e.g., from 'react-icons' or custom SVGs

export default function Contact() {
  const email = "Omprakash.Sahani7991@gmail.com"; // <--- UPDATE THIS!
  const linkedin = "https://www.linkedin.com/in/omprakashsahani"; // <--- UPDATE THIS!
  const github = "https://github.com/OmprakashSahani"; // <--- UPDATE THIS!
  const googleScholar = "https://scholar.google.com/citations?user=your-scholar-id"; // <--- UPDATE THIS! (Optional, for research)

  return (
    <section id="contact" className="py-16 md:py-24
                                    bg-gray-900 dark:bg-gray-950
                                    text-white">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Let&apos;s Connect {/* FIXED: ' to &apos; */}
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl text-gray-300 dark:text-gray-100 leading-relaxed">
            I&apos;m always open to discussing new opportunities, collaborations, or research ideas. Feel free to reach out! {/* FIXED: ' to &apos; */}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 rounded-full text-base font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300"
              >
                {/* Email icon placeholder */}
                📧 Email Me
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 rounded-full text-base font-semibold shadow-lg hover:bg-indigo-700 transition-colors duration-300"
              >
                {/* LinkedIn icon placeholder */}
                🔗 LinkedIn
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-gray-700 dark:bg-gray-600 rounded-full text-base font-semibold shadow-lg hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors duration-300"
              >
                {/* GitHub icon placeholder */}
                💻 GitHub
              </a>
            )}
            {googleScholar && (
              <a
                href={googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-red-700 rounded-full text-base font-semibold shadow-lg hover:bg-red-800 transition-colors duration-300"
              >
                {/* Google Scholar icon placeholder */}
                📚 Google Scholar
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}