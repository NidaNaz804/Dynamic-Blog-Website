import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link'
import React from 'react'

const Hero = ({ data }: { data: Blog }) => {
  return (
    <div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
    <img
      className="w-full h-48 object-cover object-center"
      src={urlFor(data.Image).url()}
      alt="blog"
    />
    <div className="p-6 bg-white">
      <h1 className="text-lg font-bold text-gray-900 mb-2">{data.Title}</h1>
      <p className="text-gray-700 mb-3">{data.Paragraph}</p>
      <Link
        href={`/blog/${data.slug}`}
        className="text-indigo-500 inline-flex items-center font-semibold"
      >
        Learn More
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </div>

  );
};

export default Hero;
