import React from "react";

const DemoSection = () => {
  return (
    <section className="bg-purple-700 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Top Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12">
          Online and Offline Classes
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-stretch">

          {/* Left Side: Demo Form */}
          <div className="bg-white text-gray-800 rounded-xl p-6 sm:p-8 shadow-lg h-full flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-purple-700">
              Book Free Demo Session
            </h2>
            <form className="space-y-4 sm:space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="tel"
                placeholder="Mobile No."
                className="w-full px-4 py-2 border rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Email ID"
                className="w-full px-4 py-2 border rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <select className="w-full px-4 py-2 border rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Select Course</option>
                <option>Graphic Designing</option>
                <option>Video Editing</option>
                <option>Digital Marketing</option>
                <option>UI/UX Design</option>
                <option>Photography</option>
                <option>3D Animation</option>
              </select>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-800 transition text-sm sm:text-base"
              >
                Send OTP
              </button>
            </form>
          </div>

          {/* Right Side: Credentials */}
          <div className="bg-indigo-100 text-black rounded-xl p-6 sm:p-8 shadow-lg h-full flex flex-col justify-center items-center max-w-full md:max-w-md mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-purple-700 text-center">
              Become a <span className="text-yellow-500 font-bold">Professional</span><br /> and Certified
            </h2>
            <p className="mb-6 text-sm sm:text-base text-center text-gray-700">
              ✅ Verified with Multi-Factor<br />
              ✅ Approved with 100% Authenticated
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {[1, 2, 3, 4].map((num, i) => (
                <div key={i} className="bg-white text-black rounded-lg p-4 shadow-md text-center border">
                  <div className="flex justify-center mb-2">
                    <div className="bg-purple-200 text-purple-800 font-bold w-10 h-10 flex items-center justify-center rounded-full">
                      {num}
                    </div>
                  </div>
                  <p className="text-sm font-medium">
                    {num === 1 || num === 3
                      ? "11 Years of excellency in computer education"
                      : num === 2
                      ? "Institute registered Ministry of MSME Govt.of India"
                      : "ISO Certified"}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DemoSection;