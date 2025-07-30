// components/Navbar.js
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Keep motion for Navbar animation

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'Research', href: '#research' },
    { name: 'Blog', href: '/blog' }, // This is the link to a different page
    { name: 'Contact', href: '#contact' },
  ];

  // Function to handle smooth scroll to an ID on the SAME page
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after clicking a link
    }
  };

  return (
    <motion.nav // Retained motion.nav for animation
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg py-4 md:py-3"
    >
      <div className="container flex justify-between items-center">
        {/* Logo/Name - Always links to Home/Hero */}
        <Link href="#hero" onClick={() => scrollToSection('hero')} className="text-2xl font-bold text-white tracking-tight hover:text-blue-400 transition-colors duration-300">
          Omprakash Sahani
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              // !!! FIX HERE: Conditionally apply preventDefault and scrollToSection !!!
              onClick={(e) => {
                if (link.href.startsWith('#')) { // If it's an internal hash link
                  e.preventDefault(); // Prevent default jump
                  scrollToSection(link.href.substring(1)); // Smooth scroll
                }
                // Else, for '/blog', allow default Next.js Link behavior (client-side navigation)
                // No else needed, Next.js Link will handle navigation if default not prevented
              }}
              className="text-white hover:text-blue-400 text-lg font-medium transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button (Hamburger) and Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-blue-400 focus:outline-none focus:text-blue-400">
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <motion.div // Retained motion.div for animation
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto", transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
          closed: { opacity: 0, height: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } }
        }}
        className="md:hidden mt-4 bg-gray-800 bg-opacity-95 overflow-hidden"
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          {navLinks.map((link) => (
            <motion.div // Retained motion.div for animation
              key={link.name}
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: -20 }
              }}
            >
              <Link
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith('#')) { // If it's an internal hash link
                    e.preventDefault();
                    scrollToSection(link.href.substring(1));
                  }
                  setIsOpen(false); // Close mobile menu regardless of link type
                }}
                className="block text-xl hover:text-blue-400 font-medium py-2"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}