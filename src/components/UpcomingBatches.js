// UpcomingBatches.jsx
import React from "react";

const batches = [
  {
    title: "Graphic Design - Morning",
    type: "Weekday",
    startDate: "17 July, August",
    time: "Morning 11:00",
    mode: "Offline and Online (hybrid)",
  },
  {
    title: "Video Editing - Evening",
    type: "Weekend",
    startDate: "20 July, August",
    time: "Evening 5:00",
    mode: "Online",
  },
  {
    title: "Digital Marketing - Morning",
    type: "Weekday",
    startDate: "22 July, August",
    time: "Morning 10:00",
    mode: "Offline",
  },
  // Add more batches as needed
];

const UpcomingBatches = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-[#652f8e]">Upcoming Batches</h2>
          <p className="text-gray-500 mt-2">Choose the course and join our next batch</p>
        </div>

        {/* Tabs */}
        <div className="relative mb-10">
          <div className="flex gap-3 overflow-x-auto no-scrollbar px-2 py-2 scroll-smooth">
            <button className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition border whitespace-nowrap bg-gray-300 text-gray-700 border-gray-400 shadow">
              Graphic Designing
            </button>
            <button className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition border whitespace-nowrap bg-white text-gray-700 border-gray-300 hover:bg-purple-50 hover:text-[#652f8e]">
              Video Editing
            </button>
            <button className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition border whitespace-nowrap bg-white text-gray-700 border-gray-300 hover:bg-purple-50 hover:text-[#652f8e]">
              Digital Marketing
            </button>
          </div>

          {/* Scroll Right Button */}
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-1 z-10 hidden sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-[#652f8e]"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>

        {/* Batch Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {batches.map((batch, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 relative overflow-hidden"
            >
              <span className="absolute top-2 right-4 text-xs font-semibold bg-[#652f8e] text-white px-3 py-1 rounded-full">
                {batch.type}
              </span>
              <h3 className="text-lg font-bold text-[#652f8e] mb-3">{batch.title}</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <span className="font-medium">📆 Batch Start:</span> {batch.startDate}
                </p>
                <p>
                  <span className="font-medium">⏰ Time:</span> {batch.time}
                </p>
                <p>
                  <span className="font-medium">🎓 Class Mode:</span> {batch.mode}
                </p>
              </div>
              <button className="mt-5 w-full bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition">
                Enroll Now →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingBatches;
