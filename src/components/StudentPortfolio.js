import React, { useRef } from "react";

const students = [
  { name: "Sunil Kumar", image: "Sunil-1.jpg", software: ["Photoshop", "Illustrator", "CorelDraw"], views: 345 },
  { name: "Raj Mehra", image: "Rajnish-1.jpg", software: ["Photoshop", "Illustrator", "After Effects"], views: 345 },
  { name: "Pooja Singh", image: "Pooja-1.webp", software: ["CorelDraw", "Photoshop", "Illustrator"], views: 345 },
  { name: "Aman", image: "Aman-1.jpg", software: ["After Effects", "Premiere Pro"], views: 345 },
  { name: "Mansi", image: "mansi.webp", software: ["After Effects", "Figma", "Photoshop"], views: 345 },
  { name: "Hemant", image: "Hemant.webp", software: ["Premiere Pro", "XD", "Illustrator"], views: 345 },
];

const Portfolio = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center relative">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10">
          Our Student Works <span className="text-purple-600">Portfolio</span>
        </h2>

        {/* Scroll Wrapper */}
        <div className="relative">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100 z-10"
          >
            ⟨
          </button>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="flex space-x-4 sm:space-x-6 px-4 sm:px-12 scroll-smooth scrollbar-hide"
            style={{
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
              touchAction: "none", // disables swipe on mobile
            }}
          >
            {students.map((student, idx) => (
              <div
                key={idx}
                className="min-w-[220px] sm:min-w-[250px] bg-purple-100 rounded-xl shadow-md hover:shadow-lg transition duration-300 p-5 sm:p-6 text-center flex-shrink-0"
              >
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full mx-auto mb-3 sm:mb-4"
                />
                <h3 className="text-base sm:text-lg font-semibold text-purple-800 mb-1 sm:mb-2">
                  {student.name}
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  {student.software.join(", ")}
                </p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition text-sm mb-2">
                  Portfolio
                </button>
                <p className="text-xs text-gray-500">👁️ {student.views} views</p>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100 z-10"
          >
            ⟩
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;