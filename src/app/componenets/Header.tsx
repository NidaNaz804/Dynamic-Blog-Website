import React from 'react';
import { Mountain } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">Travel Blog</span>
          </Link>

          {/* Navigation */}
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center mt-4 md:mt-0">
            <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
            <Link href="/about" className="mr-5 hover:text-gray-900">About</Link>
            <Link href="/contact" className="mr-5 hover:text-gray-900">Contact</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
