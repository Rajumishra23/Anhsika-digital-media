import React from "react";

const feedbackVideos = [
  {
    src: "/vivek-video.mp4",
    alt: "Vivek's Feedback",
  },
  // Add more video objects here as needed
];

const StudentFeedback = () => {
  return (
    <section className="bg-white py-10 text-[#652f8e] relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="flex justify-between items-center mb-6 relative">
          <h2 className="text-2xl text-gray-800 md:text-3xl font-semibold text-center w-full">
            Student Feedback
          </h2>
        </div>

        {/* Video Carousel */}
        <div className="flex overflow-x-auto gap-2 px-4 scroll-smooth no-scrollbar snap-x snap-mandatory">
          {feedbackVideos.map((video, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 snap-center overflow-hidden bg-black group rounded-2xl h-50 sm:h-76 w-[99%] sm:w-[40%] mx-auto sm:mx-0"
            >
              <video
                src={video.src}
                className="w-full h-full object-cover"
                muted
                controls
              />
            </div>
          ))}
        </div>
      </div>

      {/* Brochure CTA */}
      <div className="flex justify-center">
        <a
          href="/brochure.pdf"
          download
          className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-blue-500 text-white rounded-xl font-medium transition"
        >
          Download Course Brochure
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-down-to-line"
            aria-hidden="true"
          >
            <path d="M12 17V3" />
            <path d="m6 11 6 6 6-6" />
            <path d="M19 21H5" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default StudentFeedback;