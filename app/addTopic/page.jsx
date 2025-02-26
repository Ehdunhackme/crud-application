"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isVisible, setIsVisible] = useState(false); // Animation control

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Delay for smooth fade-in
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (!res.ok) {
        throw new Error("Failed to create a topic");
      }

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-6 
      transition-all duration-700 ease-out transform 
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* Animated Title */}
      <h2
        className={`text-3xl font-bold text-gray-800 text-center mb-4 
        transition-all duration-700 ease-out 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
      >
        Create a New Topic 
      </h2>

      {/* Title Input */}
      <div className="relative group">
        <label className="block text-gray-700 font-medium">Title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none 
          transition-all duration-300 ease-in-out group-hover:shadow-md group-hover:border-blue-500"
          type="text"
          placeholder="Enter topic title"
          required
        />
      </div>

      {/* Description Input */}
      <div className="relative group">
        <label className="block text-gray-700 font-medium">Description</label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none 
          transition-all duration-300 ease-in-out group-hover:shadow-md group-hover:border-blue-500"
          rows="3"
          placeholder="Enter topic description"
          required
        ></textarea>
      </div>

      {/* Animated Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white font-semibold py-3 rounded-md 
        transition-all duration-500 ease-in-out transform hover:bg-green-500 hover:scale-105 hover:shadow-lg"
      >
        ✅ Add Topic
      </button>
    </form>
  );
}
