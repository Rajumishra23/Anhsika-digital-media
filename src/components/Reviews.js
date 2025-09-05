import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Reviews = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <section className="bg-white py-12 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
          Reviews
        </h2>

        {/* Top Review Logos */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
          {/* Google */}
          <div className="flex items-center gap-2">
            <img
              src="/Image/Asset35.svg"
              alt="Google Review"
              className="w-[180px] h-[60px] object-contain rounded-md shadow"
            />
            <span className="text-black font-semibold text-lg">5.0</span>
          </div>

          {/* Divider */}
          <div className="w-px h-8 bg-gray-400"></div>

          {/* Justdial */}
          <div className="flex items-center gap-2">
            <img
              src="/Image/Asset36.svg"
              alt="Justdial Review"
              className="w-[180px] h-[60px] object-contain rounded-md shadow"
            />
            <span className="text-black font-semibold text-lg">4.9</span>
          </div>
        </div>

        {/* Buttons + Icon Dropdown */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10 relative">
          <a
            href="#studentReview"
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
          >
            Students Reviews
          </a>

          <a
            href="#studentPortfolio"
            className="px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
          >
            Student Work
          </a>

          <a
            href="#upcomingBatch"
            className="px-4 py-2 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700 transition"
          >
            Upcoming Batch
          </a>
        </div>

        {/* Dropdown Icon */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition"
          >
            <FaChevronDown className="text-gray-700" />
          </button>

          {/* Dropdown Content */}
          {showDropdown && (
            <div className="absolute top-12 right-0 bg-white border rounded-md shadow px-4 py-2 text-sm z-10">
              <span className="text-gray-700 cursor-pointer hover:underline">
                Learn&nbsp;more
              </span>
            </div>
          )}
        </div>

        {/* Expanded Image Section + Software Covered */}
        <div className="bg-gray-100 rounded-xl shadow-lg p-6 mb-10">
          <img
            src="/Image/gOFofM.svg"
            alt="Review Banner"
            className="w-full max-w-[1000px] h-auto object-contain rounded-lg mb-6 mx-auto"
          />

          {/* Software Covered Section Inside Same Box */}
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Software Covered
          </h3>

          <div className="space-y-6">
            {/* Students Reviews Section */}
            <div
              id="studentReview"
              className="flex flex-col sm:flex-row items-center bg-white px-4 py-3 rounded-md shadow-sm border border-gray-200 max-w-fit mx-auto mb-4"
            >
              <img
                src="/Image/sjcRYS.svg"
                alt="Photoshop"
                className="w-[180px] h-[100px] sm:w-[250px] sm:h-[150px] object-contain sm:mr-4 mb-3 sm:mb-0"
              />
              <div className="flex flex-col justify-center text-center sm:text-left">
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                  Photoshop
                </h4>
                <button className="mt-2 inline-block px-4 py-2 bg-purple-600 text-white text-sm sm:text-xs rounded hover:bg-purple-700 transition w-auto mx-auto sm:mx-0">
                  Read More
                </button>
              </div>
            </div>

            {/* Student Work Section */}
            <div
              id="studentPortfolio"
              className="flex flex-col sm:flex-row-reverse items-center bg-white px-4 py-3 rounded-md shadow-sm border border-gray-200 max-w-fit mx-auto mb-4"
            >
              <img
                src="/Image/ynQkii.svg"
                alt="Premiere Pro"
                className="w-[180px] h-[100px] sm:w-[250px] sm:h-[150px] object-contain sm:ml-4 mb-3 sm:mb-0"
              />
              <div className="flex flex-col justify-center text-center sm:text-right">
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                  Premiere Pro
                </h4>
                <button className="mt-2 inline-block px-4 py-2 bg-purple-600 text-white text-sm sm:text-xs rounded hover:bg-purple-700 transition w-auto mx-auto sm:mx-0">
                  Read More
                </button>
              </div>
            </div>

            {/* Upcoming Batch Section */}
            <div
              id="upcomingBatch"
              className="flex flex-col sm:flex-row items-center bg-white px-4 py-3 rounded-md shadow-sm border border-gray-200 max-w-fit mx-auto mb-4"
            >
              <img
                src="/Image/VrybWN.svg"
                alt="After Effects"
                className="w-[180px] h-[100px] sm:w-[250px] sm:h-[150px] object-contain sm:mr-4 mb-3 sm:mb-0"
              />
              <div className="flex flex-col justify-center text-center sm:text-left">
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                  After Effects
                </h4>
                <button className="mt-2 inline-block px-4 py-2 bg-purple-600 text-white text-sm sm:text-xs rounded hover:bg-purple-700 transition w-auto mx-auto sm:mx-0">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
