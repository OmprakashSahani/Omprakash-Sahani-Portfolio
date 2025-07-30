// components/Footer.js
"use client"; // Because we might use dynamic year or external links

import React from 'react';
import Link from 'next/link'; // For smooth scrolling links
import { motion } from 'framer-motion'; // For subtle animations

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Function to handle smooth scroll (copied from Navbar for consistency)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-950 dark:bg-black text-gray-400 py-10 md:py-12"
    >
      <div className="container text-center space-y-6">
        {/* Copyright */}
        <p className="text-sm md:text-base">
          &copy; {currentYear} **Omprakash Sahani**. All rights reserved.
        </p>

        {/* Quick Links (Optional, similar to Navbar) */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm md:text-base">
          <Link href="#about" onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors duration-300">
            About
          </Link>
          <Link href="#projects" onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition-colors duration-300">
            Projects
          </Link>
          <Link href="#research" onClick={() => scrollToSection('research')} className="hover:text-blue-400 transition-colors duration-300">
            Research
          </Link>
          <Link href="#contact" onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors duration-300">
            Contact
          </Link>
        </div>

        {/* Removed: Social Media Links (GitHub & LinkedIn Icons) */}
        {/*
        <div className="flex justify-center space-x-5 mt-5">
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="GitHub">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.93 0-1.091.39-1.983 1.029-2.675-.103-.253-.446-1.263.098-2.646 0 0 .84-.27 2.75 1.025A9.435 9.435 0 0112 6.844c.85.004 1.701.116 2.503.385 1.902-1.295 2.747-1.025 2.747-1.025.546 1.383.202 2.393.099 2.646.64.692 1.028 1.584 1.028 2.675 0 3.822-2.339 4.67-4.566 4.921.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A9.949 9.949 0 0022 12.017C22 6.484 17.523 2 12 2z" clipRule="evenodd" /></svg>
          </a>
          <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
          </a>
        </div>
        */}
      </div>
    </motion.footer>
  );
}