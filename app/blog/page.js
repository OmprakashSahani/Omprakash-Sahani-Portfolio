// app/blog/page.js
import React from 'react';
import { getSortedPostsData } from '@/lib/posts'; // Server-side data fetching
import Link from 'next/link';
// Removed motion import here as it's not directly needed for this component, but can be added if desired.

// This component is a Server Component, as it fetches data directly
export const metadata = {
  title: 'Blog | Omprakash Sahani',
  description: 'Technical articles and insights by Omprakash Sahani on software engineering and EECS research.',
};

export default function BlogPage() {
  const allPostsData = getSortedPostsData(); // Fetch posts data on the server

  return (
    <section id="blog" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-h-screen">
      <div className="container">
        <h1 // Changed from motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-800 dark:text-gray-200"
          // Removed animation props
        >
          My Technical Articles
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPostsData.map(({ id, date, title, excerpt, tags }) => (
            <div // Changed from motion.div
              key={id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 flex flex-col h-full border border-gray-200 dark:border-gray-600"
              // Removed animation props
            >
              <Link href={`/blog/${id}`} className="text-xl font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-2 transition-colors duration-200">
                {title}
              </Link>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 flex-grow">{excerpt}</p>
              <small className="text-gray-500 dark:text-gray-400 text-xs mb-3">{date}</small>
              <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag, index) => (
                  <span key={index} className="bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100 text-xs px-2 py-0.5 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}