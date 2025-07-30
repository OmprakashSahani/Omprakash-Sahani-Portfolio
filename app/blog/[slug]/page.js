// app/blog/[slug]/page.js
import React from 'react';
import { getAllPostIds, getPostData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';


export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export async function generateMetadata({ params }) {
  const postData = await getPostData(params.slug);
  if (!postData) {
    return { title: 'Post Not Found' };
  }
  return {
    title: `${postData.title} | Omprakash Sahani Blog`,
    description: postData.excerpt,
  };
}

export default async function PostPage({ params }) {
  const postData = await getPostData(params.slug);

  if (!postData) {
    notFound();
  }

  return (
    <article
      className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-h-screen"
    >
      <div className="container max-w-4xl mx-auto px-4 md:px-8">
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-700 dark:text-blue-300"
        >
          {postData.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
          By {postData.author} on {postData.date}
        </p>
        <div
          className="prose dark:prose-invert prose-lg text-gray-800 dark:text-gray-100 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
        <Link href="/blog" className="mt-12 inline-block text-blue-600 dark:text-blue-400 hover:underline">
          &larr; Back to all articles
        </Link>
      </div>
    </article>
  );
}