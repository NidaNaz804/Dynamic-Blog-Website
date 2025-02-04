import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText, PortableTextComponents } from "next-sanity";
import Comments from "@/app/componenets/commentBox";
import Image from "next/image";
import { Metadata } from "next";

// Generate metadata for SEO
export async function generateMetadata({ params: { slug } }: { params: { slug: string } }): Promise<Metadata> {
  const query = `*[_type == "blog" && slug.current == $slug][0]{ Title, Image }`;
  const data = await client.fetch(query, { slug });

  return {
    title: data?.Title || "Travel Blog",
    description: `Read more about ${data?.Title}, an amazing travel experience shared by Nida Naz.`,
    openGraph: {
      images: data?.Image ? [{ url: urlFor(data.Image).url() }] : [],
    },
  };
}

// Define custom styles for PortableText (content from Sanity)
const customPortableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-4 leading-relaxed text-lg">{children}</p>,
    h1: ({ children }) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold my-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-medium my-3">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-purple-500 pl-4 italic my-4 text-gray-600 dark:text-gray-300">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-5 my-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-5 my-4">{children}</ol>,
  },
};

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
  const query = `*[_type == "blog" && slug.current == $slug][0]{
    Title, Paragraph, Image, block
  }`;

  const data = await client.fetch(query, { slug });

  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">{data.Title}</h1>

      {/* Featured Image */}
      {data.Image && (
        <Image
          src={urlFor(data.Image).url()}
          width={800}
          height={500}
          alt={data.Title}
          className="rounded-lg w-full max-w-4xl mx-auto"
        />
      )}

      {/* Blog Content with Proper Spacing */}
      <section className="text-lg leading-relaxed text-dark/80 dark:text-light/80">
        <PortableText value={data.block} components={customPortableTextComponents} />
      </section>

      {/* About the Author Section */}
      <section className="mt-12 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-dark dark:text-light">About the Author</h2>
        <p className="text-dark/80 dark:text-light/80 mt-2">
          <strong>Nida Naz</strong> is a passionate travel blogger who loves to explore new places and share her experiences with the world. Follow along for more travel inspiration!
        </p>
      </section>

      {/* Comments Section */}
      <Comments />
    </article>
  );
}
