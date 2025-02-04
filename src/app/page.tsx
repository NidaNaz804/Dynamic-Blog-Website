import React from 'react'
import Hero from './componenets/Hero';
import { client } from '@/sanity/lib/client';


const HomePage = async () => {
  const query = `*[_type == 'blog'] {
  Title, Paragraph, "slug": slug.current, Image
}`

const data: Blog[] = await client.fetch(query)
console.log(data);
  return (
    <div>
    <div className="container mx-auto px-5 py-24">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {data.map((blogData) => (
          <Hero data={blogData} key={blogData.slug} />
        ))}
      </div>
    </div>
  </div>
);
};


export default HomePage