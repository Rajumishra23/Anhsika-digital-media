import React from "react";

const companyLogos = [
  "/Job-01.webp",
  // Add more logo paths here (up to 16 or more)
];

const PlacementShowcase = () => {
  return (
    <section className="py-12 relative border-4 border-purple-900 rounded-lg md:border-none mx-1">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="flex justify-between items-center mb-6 relative">
          <h3 className="text-xl font-semibold text-gray-800 mb-10 text-center w-full">
            Some of Our{" "}
            <span className="text-2xl text-[#652f8e] font-bold">Students</span> Got the{" "}
            <span className="text-2xl text-[#652f8e] font-bold">Placement</span> in these{" "}
            <span className="text-2xl text-[#652f8e] font-bold">Companies</span>
          </h3>

          {/* Navigation Buttons (non-functional for now) */}
          <div className="absolute right-0 top-0 gap-2 hidden md:flex">
            <button className="bg-[#652f8e] hover:bg-[#501d6a] text-white p-2 rounded-full">
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
                className="lucide lucide-chevron-left w-5 h-5"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button className="bg-[#652f8e] hover:bg-[#501d6a] text-white p-2 rounded-full">
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
                className="lucide lucide-chevron-right w-5 h-5"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Logo Grid */}
        <div className="overflow-hidden mx-auto md:w-[832px] h-[260px] md:h-auto">
          <div className="no-scrollbar h-[300px] md:h-auto overflow-auto grid grid-cols-2 gap-4 md:flex md:gap-6 md:overflow-x-auto md:overflow-y-hidden">
            {companyLogos.map((logo, index) => (
              <div key={index} className="h-28 w-full md:w-[140px] flex-shrink-0 relative">
                <img
                  alt={`job${index + 1}`}
                  src={logo}
                  className="object-contain absolute inset-0 w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center hidden md:block">
          <button className="px-6 py-2 bg-[#652f8e] hover:bg-[#501d6a] text-white rounded-full font-semibold transition">
            Enroll Now
          </button>
          <p className="mt-3 text-sm text-gray-600 font-medium">
            📧 info@example.com   |   📞 +91 9876543210
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlacementShowcase;