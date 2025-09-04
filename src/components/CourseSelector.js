import React from "react";

const courses = [
  {
    title: "Graphic Designing",
    color: "bg-purple-500",
    image: "/courses.jpg",
    brochure: "/brochure.pdf",
  },
  { title: "Video Editing Course", image: "courses.jpg" },
  { title: "Digital Marketing Course", image: "courses.jpg" },
  { title: "UI/UX Designing Course", image: "courses.jpg" },
  { title: "Motion Graphics Course", image: "courses.jpg" },
  { title: "Photography Masterclass", image: "courses.jpg" },
  { title: "3D Animation Course", image: "courses.jpg" },
  { title: "Social Media Strategy", image: "courses.jpg" },
  { title: "Content Writing Course", image: "courses.jpg" },
  { title: "Branding & Identity Design", image: "courses.jpg" },
  { title: "Web Development Bootcamp", image: "courses.jpg" },
  { title: "Illustration & Sketching", image: "courses.jpg" },
  
];

const CourseSelector = () => {
  return (
    <section className="pb-6 px-4 bg-white">
      <h2 className="text-center text-2xl font-semibold mb-6">Select Your Course</h2>

      <div className="flex overflow-x-auto gap-4 px-2 scroll-smooth snap-x snap-mandatory no-scrollbar">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`snap-start flex-shrink-0 w-[266px] h-[400px] ${course.color} rounded-xl shadow-md relative`}
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <img
                alt={course.title}
                src={course.image}
                className="object-cover absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-0 bg-[#652f8e]/50 mix-blend-multiply transition duration-300 hover:bg-[#652f8e]/40" />
            </div>

            <div className="absolute top-5 left-4 text-white leading-tight drop-shadow-md">
              <div className="md:text-2xl text-3xl">{course.title}</div>
              <div className="text-3xl font-bold">Course</div>
            </div>

            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
              <a
                href={course.brochure}
                download
                className="text-[#652f8e] border border-[#652f8e] bg-white px-3 py-1 rounded-lg flex items-center gap-1 transition"
              >
                Download Brochure
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-down-to-line"
                >
                  <path d="M12 17V3" />
                  <path d="m6 11 6 6 6-6" />
                  <path d="M19 21H5" />
                </svg>
              </a>

              <button className="text-[#652f8e] bg-white rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-info"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseSelector;