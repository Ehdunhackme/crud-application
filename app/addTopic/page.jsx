"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

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

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
        Add a New Topic
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Title Input */}
        <div>
          <label className="block text-gray-700 font-medium">Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            type="text"
            placeholder="Enter topic title"
            required
          />
        </div>

        {/* Description Input */}
        <div>
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            rows="3"
            placeholder="Enter topic description"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-500 transition duration-300"
        >
          Add Topic
        </button>
      </form>
    </div>
  );
}
