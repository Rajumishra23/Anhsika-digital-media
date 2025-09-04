import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-white py-14 px-4 mt-16 overflow-hidden">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold text-black leading-snug">
          Best{" "}
          <span className="text-gray-800 text-3xl sm:text-4xl md:text-5xl font-bold">
            Institute
          </span>{" "}
          for
          <br />
          <span className="text-[#652f8e] font-bold text-lg sm:text-xl md:text-3xl">
            Graphic Designing,
          </span>{" "}
          <span className="text-pink-500 font-bold text-lg sm:text-xl md:text-3xl">
            Digital Marketing
          </span>{" "}
          &
          <br />
          <span className="text-blue-500 font-bold text-lg sm:text-xl md:text-3xl">
            Video Editing
          </span>{" "}
          Courses in Delhi
        </h1>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl">
          Television, Gaming, Media, Advertising
          <br />
          & Marketing Agency and Corporate Sector
        </p>
        <a href="enroll-form.html">
          <button className="mt-6 inline-flex items-center px-6 py-3 bg-black text-white rounded-full transition">
            Get Free Career Counselling
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
              className="ml-2 w-4 h-4"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </a>
      </div>

      {/* Decorative Images */}
      <div className="absolute left-20 top-1/3 transform -translate-y-1/2 hidden md:block">
        <img
          alt="Left Decoration"
          src="/v2-top-left.jpg"
          width="240"
          height="160"
          className="rounded-2xl shadow-lg"
        />
      </div>

      <div className="absolute right-0 top-1/3 transform -translate-y-1/2 hidden md:block">
        <img
          alt="Right Decoration"
          src="/v2-right.avif"
          width="240"
          height="160"
          className="rounded-2xl shadow-lg"
        />
      </div>

      {/* Video Section */}
      <div className="mt-12 mx-auto max-w-3xl">
        <video
          src="Videos/v2-home-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="rounded-2xl mx-auto shadow-lg w-full"
        />
      </div>

      {/* Bottom Decoration */}
      <div className="absolute top-1/2 left-6 hidden md:block">
        <img
          alt="Bottom Left Decoration"
          src="/v2-bottom-left.avif"
          width="200"
          height="120"
          className="rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;