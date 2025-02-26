import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((t, i) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex gap-5 items-center 
          rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white"
        >
          {/* Number Circle */}
          <div className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white font-bold rounded-full">
            {i + 1}
          </div>

          {/* Topic Details */}
          <div className="flex-1">
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link 
              href={`/editTopic/${t._id}`} 
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300"
            >
              <HiPencilAlt size={20} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
