import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const courseHighlights = [
  {
    title: "100% Job Placement",
    subtitle: "Assistance after Course Completion",
    bg: "/Image/Asset32.svg",
  },
  {
    title: "Career Opportunities:",
    subtitle: [
      "Corporate Companies, MNCs",
      "News Channels, YouTubers",
      "Gaming Industry",
      "Ad Agencies & more",
    ],
    bg: "/Image/Asset32.svg",
  },
  {
    title: "Course Duration:",
    subtitle: "3-4 Months",
    bg: "/Image/Asset32.svg",
  },
  {
    title: "Class Timings:",
    subtitle: "1.5 Hours",
    bg: "/Image/Asset32.svg",
  },
  {
    title: "Fees & Payment Options:",
    subtitle: ["One Time Submit", "Extra Discount", "EMI also Available", "3–6 Months"],
    bg: "/Image/Asset32.svg",
  },
  {
    title: "Class Schedule:",
    subtitle: ["Alternative Days", "Monday, Wednesday, Friday"],
    bg: "/Image/Asset32.svg",
  },
];

export default function CourseHighlight() {
  const desktopSliderRef = useRef(null);
  const mobileSliderRef = useRef(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const cardWidth = ref.current.firstChild.offsetWidth + 16;
      const { scrollLeft } = ref.current;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      ref.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-white py-10 px-5 relative">
      {/* Desktop View */}
      <div className="sm:block hidden">
        <div className="flex justify-center items-center mb-5 relative">
          <h2 className="text-black text-3xl font-bold">Course Highlight</h2>
          <div className="absolute right-0 flex gap-2">
            <button
              className="p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700"
              onClick={() => scroll(desktopSliderRef, "left")}
            >
              <FaChevronLeft />
            </button>
            <button
              className="p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700"
              onClick={() => scroll(desktopSliderRef, "right")}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

        {/* Slider */}
        <div
          ref={desktopSliderRef}
          className="flex gap-4 scroll-smooth overflow-x-hidden relative z-0"
        >
          {courseHighlights.map((item, index) => {
            const isMultiLine = Array.isArray(item.subtitle);

            return (
              <div
                key={index}
                className="min-w-[700px] flex-shrink-0 rounded-lg p-6 text-center text-white shadow-xl border border-white/20"
                style={{
                  backgroundImage: `url(${item.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3 className="text-3xl font-bold mb-3 drop-shadow-md">{item.title}</h3>

                {isMultiLine ? (
                  <div className="space-y-1">
                    {item.subtitle.map((line, i) => (
                      <p key={i} className="text-sm font-medium leading-snug tracking-wide drop-shadow-md">
                        {line}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-base font-medium drop-shadow-md">{item.subtitle}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile View */}
      <div className="block sm:hidden">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-black text-2xl font-bold">Course Highlight</h2>
          <div className="flex gap-2">
            <button
              className="p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700"
              onClick={() => scroll(mobileSliderRef, "left")}
            >
              <FaChevronLeft />
            </button>
            <button
              className="p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700"
              onClick={() => scroll(mobileSliderRef, "right")}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={mobileSliderRef}
          className="flex gap-4 overflow-x-hidden scroll-smooth"
        >
          {courseHighlights.map((item, index) => {
            const isMultiLine = Array.isArray(item.subtitle);

            return (
              <div
                key={index}
                className="min-w-[90vw] flex-shrink-0 rounded-lg p-4 text-center text-white shadow-xl border border-white/20"
                style={{
                  backgroundImage: `url(${item.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3 className="text-xl font-bold mb-2 drop-shadow-md">{item.title}</h3>

                {isMultiLine ? (
                  <div className="space-y-1">
                    {item.subtitle.map((line, i) => (
                      <p key={i} className="text-sm font-medium leading-snug drop-shadow-md">{line}</p>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm font-medium drop-shadow-md">{item.subtitle}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
