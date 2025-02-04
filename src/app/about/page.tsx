import { Metadata } from "next";
import Image from "next/image";

// Metadata for SEO
export const metadata: Metadata = {
  title: "About - Nida Naz Travel Blog",
  description:
    "Learn more about Nida Naz, the passionate travel blogger behind inspiring journeys and adventures.",
  openGraph: {
    title: "About - Nida Naz Travel Blog",
    description:
      "Explore the story of Nida Naz, the travel enthusiast sharing incredible experiences and insights on her blog.",
  },
};

export default function AboutPage() {
  return (
    <section className="py-12 px-4 2xl:px-12 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="text-center">
          <h1 className="text-3xl font-bold text-dark dark:text-light mb-4">About the Author</h1>
          <p className="text-lg text-dark/80 dark:text-light/80">
            Welcome to my travel blog! I am Nida Naz, a passionate traveler sharing my journeys, tips, and stories from around the world.
          </p>
        </header>

        {/* Author Image & Bio */}
        <div className="mt-8 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/profile-pic.jpg"  
              alt="Nida Naz - Author"
              width={300}
              height={300}
              className="rounded-full shadow-lg"
            />
          </div>

          <div className="mt-4 lg:mt-0">
            <h2 className="text-xl font-semibold text-dark dark:text-light mb-4">Meet Nida Naz</h2>
            <p className="text-lg text-dark/80 dark:text-light/80 leading-relaxed mb-4">
              I am Nida, a passionate wanderer, discovering hidden gems and experiencing new cultures across the globe. Through my blog, I share personal travel stories, practical tips, and helpful insights to inspire others to explore the world with an open heart and mind.
            </p>
            <p className="text-lg text-dark/80 dark:text-light/80 leading-relaxed">
              From city escapades to serene countryside getaways, I write about every place I visit with the hope of sparking curiosity and excitement for the next adventure in you!
            </p>
          </div>
        </div>

        {/* Blog Mission Section */}
        <div className="mt-12 bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-dark dark:text-light mb-4">The Mission of This Blog</h3>
          <p className="text-lg text-dark/80 dark:text-light/80 leading-relaxed">
            My mission is simple: to share my love for travel and encourage you to embark on your own journey of discovery. Whether you're a solo traveler, a family, or someone who just loves to dream of new destinations, this blog is your resource for travel inspiration and tips.
          </p>
          <p className="text-lg text-dark/80 dark:text-light/80 leading-relaxed mt-4">
            I believe that travel is more than just visiting places; it's about embracing different cultures, understanding our world better, and most importantly—finding joy in every step of the journey.
          </p>
        </div>
      </div>
    </section>
  );
}
