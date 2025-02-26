"use client";  

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <nav
      className={`w-[95%] max-w-[1400px] bg-black text-white px-6 py-4 shadow-lg rounded-xl mx-auto mt-auto
      transition-all duration-700 ease-out transform hover:shadow-2xl hover:shadow-blue-500/50
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
    >
      {/* Navbar Flex Container */}
      <div className="flex justify-between items-center w-full">
        
        {/* Left: CRUD Application Title */}
        <h1 className="text-2xl font-bold text-white">CRUD Application</h1>

        {/* Right: Navigation Links (Aligned Properly) */}
        <div className="flex items-center space-x-6">
          {/* Home Link */}
          <Link 
            className="text-white text-lg font-semibold hover:text-gray-300 transition duration-300" 
            href="/"
          >
            Home
          </Link>

          {/* Create New Button */}
          <Link 
            href="/addTopic" 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-sm"
          >
            + Create New
          </Link>
        </div>
      </div>
    </nav>
  );
}
