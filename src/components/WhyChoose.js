import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const reasons = [
  {
    title: "Empowering Creativity Since 2018",
    content:
      "We’ve been nurturing creative minds with industry-relevant skills and hands-on training since our inception.",
  },
  {
    title: "Where Imagination Meets Innovation",
    content:
      "Our curriculum blends artistic vision with cutting-edge tools to help students build standout portfolios.",
  },
  {
    title: "Career-Oriented Practical Learning",
    content:
      "Every module is designed to prepare students for real-world challenges with practical exposure and mentorship.",
  },
  {
    title: "Leaders in Creative Education",
    content:
      "With 12+ years of excellence, we’ve trained thousands of professionals who now lead in top agencies and startups.",
  },
];

const WhyChoose = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-700 text-center mb-10">
          Why Choose Our Institute?
        </h2>

        <div className="space-y-4">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 border border-purple-200"
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="text-lg font-semibold text-purple-800">
                  {item.title}
                </span>
                <span className="text-purple-600">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              {activeIndex === index && (
                <p className="mt-3 text-sm text-gray-700">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;