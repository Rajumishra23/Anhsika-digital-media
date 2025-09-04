import React, { useRef } from "react";

const placedStudents = [
  { name: "Akil", role: "Graphic Designer", company: "Adwemy Motor Pvt. Ltd.", image: "Akil-1.jpg" },
  { name: "Aman", role: "Graphic Designer", company: "Adwemy Motor Pvt. Ltd.", image: "Aman-1.jpg" },
  { name: "Amit", role: "Graphic Designer", company: "Adwemy Motor Pvt. Ltd.", image: "Amit-1.jpg" },
  { name: "Arjun", role: "Graphic Designer", company: "Adwemy Motor Pvt. Ltd.", image: "arjun-1.webp" },
  { name: "Bhavna", role: "Graphic Designer", company: "Adwemy Motor Pvt. Ltd.", image: "Bhavna-1.jpg" },
  { name: "Mansi", role: "Graphic Designer", company: "Adwemy Motor Pvt. Ltd.", image: "mansi-1.webp" },
  { name: "Karan", role: "Graphic Designer", company: "Adwemy Motor Pvt. Ltd.", image: "karan-1.jpg" },
];

const RecentlyPlaced = () => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -250 : 250,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-12 px-4 relative">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10">
          Our <span className="text-purple-600">Recently Placed</span> Students
        </h2>

        {/* Wrapper for buttons + slider */}
        <div className="relative flex items-center">
          {/* Left Button */}
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
          >
            ⟨
          </button>

          {/* Sliding Row */}
          <div
            ref={scrollRef}
            className="flex overflow-hidden space-x-4 sm:space-x-6 scroll-smooth px-8"
          >
            {placedStudents.map((student, index) => (
              <div
                key={index}
                className="min-w-[200px] sm:min-w-[220px] bg-purple-100 rounded-xl shadow-md hover:shadow-lg transition duration-300 p-4 sm:p-6 text-center flex-shrink-0"
              >
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full object-cover mb-3 sm:mb-4 border-4 border-purple-300"
                />
                <h3 className="text-base sm:text-lg font-semibold text-purple-800 mb-1 sm:mb-2">
                  {student.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 mb-1">{student.role}</p>
                <p className="text-xs text-gray-500">{student.company}</p>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
          >
            ⟩
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentlyPlaced;
