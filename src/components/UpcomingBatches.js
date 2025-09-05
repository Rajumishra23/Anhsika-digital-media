import React, { useState } from "react";

const batches = [
  { category: "Graphic Designing", title: "Graphic Design - Morning", type: "Weekday", startDate: "17 July, August", time: "Morning 11:00", mode: "Offline and Online (hybrid)" },
  { category: "Graphic Designing", title: "Graphic Design - Evening", type: "Weekend", startDate: "19 July, August", time: "Evening 5:00", mode: "Online" },
  { category: "Graphic Designing", title: "Graphic Design - Weekend", type: "Weekend", startDate: "21 July, August", time: "Afternoon 2:00", mode: "Offline" },
  { category: "Video Editing", title: "Video Editing - Morning", type: "Weekday", startDate: "20 July, August", time: "Morning 10:00", mode: "Online" },
  { category: "Video Editing", title: "Video Editing - Evening", type: "Weekend", startDate: "22 July, August", time: "Evening 6:00", mode: "Offline" },
  { category: "Video Editing", title: "Video Editing - Weekend", type: "Weekend", startDate: "24 July, August", time: "Afternoon 3:00", mode: "Hybrid" },
  { category: "Digital Marketing", title: "Digital Marketing - Morning", type: "Weekday", startDate: "25 July, August", time: "Morning 9:00", mode: "Offline" },
  { category: "Digital Marketing", title: "Digital Marketing - Evening", type: "Weekend", startDate: "27 July, August", time: "Evening 7:00", mode: "Online" },
  { category: "Digital Marketing", title: "Digital Marketing - Weekend", type: "Weekend", startDate: "29 July, August", time: "Afternoon 4:00", mode: "Hybrid" },
];

const categories = ["Graphic Designing", "Video Editing", "Digital Marketing"];

const UpcomingBatches = ({ batchRef }) => {
  const [activeCategory, setActiveCategory] = useState("Graphic Designing");

  const filteredBatches = batches.filter(batch => batch.category === activeCategory);

  return (
    <section ref={batchRef} className="py-10 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-[#652f8e]">Upcoming Batches</h2>
          <p className="text-gray-500 mt-2">Choose the course and join our next batch</p>
        </div>

        {/* Tabs */}
        <div className="relative mb-10">
          <div className="flex gap-3 overflow-x-auto no-scrollbar px-2 py-2 scroll-smooth">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition border whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-gray-300 text-gray-700 border-gray-400 shadow"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-purple-50 hover:text-[#652f8e]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Batch Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBatches.map((batch, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 relative overflow-hidden"
            >
              <span className="absolute top-2 right-4 text-xs font-semibold bg-[#652f8e] text-white px-3 py-1 rounded-full">
                {batch.type}
              </span>
              <h3 className="text-lg font-bold text-[#652f8e] mb-3">{batch.title}</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><span className="font-medium">📆 Batch Start:</span> {batch.startDate}</p>
                <p><span className="font-medium">⏰ Time:</span> {batch.time}</p>
                <p><span className="font-medium">🎓 Class Mode:</span> {batch.mode}</p>
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
