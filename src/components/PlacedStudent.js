import React, { useRef, useEffect } from "react";

const PlacedStudent = () => {
  const companies = [
    { name: "AANS Infosys", image: "brand.webp" },
    { name: "TechAlpha", image: "Taca.webp" },
    { name: "Scorp", image: "scorp.webp" },
    { name: "International Education Overseas", image: "Edu.webp" },
    { name: "TopGro", image: "top.webp" },
    { name: "ND Solutions", image: "N.webp" },
  ];

  const containerRef = useRef(null);

  const scrollTo = (direction) => {
    if (!containerRef.current) return;

    const el = containerRef.current;
    const scrollAmount = el.scrollHeight;

    el.scrollTo({
      top: direction === "top" ? 0 : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const preventScroll = (e) => e.preventDefault();
    el.addEventListener("wheel", preventScroll, { passive: false });

    return () => {
      el.removeEventListener("wheel", preventScroll);
    };
  }, []);

  return (
    <section className="bg-white py-16 px-4 relative">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
          Some of Our <span className="text-purple-600">Students</span> Got the{" "}
          <span className="text-blue-600">Placement</span> in these{" "}
          <span className="text-green-600">Companies</span>
        </h2>

        <div className="flex justify-center relative">
          {/* Logos Grid */}
          <div
            ref={containerRef}
            className="grid grid-cols-2 gap-6 max-h-[400px] pr-14 scrollbar-hide"
            style={{ overflowY: "hidden", touchAction: "none" }}
          >
            {companies.map((company, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-white p-4 rounded-xl shadow hover:shadow-md transition"
              >
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-24 h-24 object-cover rounded-full mb-3 border-2 border-purple-500"
                />
                <p className="text-gray-700 font-medium text-center">
                  {company.name}
                </p>
              </div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between py-4">
            <button
              onClick={() => scrollTo("top")}
              className="bg-purple-600 text-white w-10 h-10 rounded-full shadow hover:bg-purple-700 flex items-center justify-center"
            >
              ↑
            </button>
            <button
              onClick={() => scrollTo("bottom")}
              className="bg-purple-600 text-white w-10 h-10 rounded-full shadow hover:bg-purple-700 flex items-center justify-center"
            >
              ↓
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#"
          className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition text-sm font-semibold mt-10"
        >
          Enroll Now
        </a>

        {/* Contact Info */}
        <div className="text-sm text-gray-600 text-center space-y-1 mt-4">
          <p>
            Email:{" "}
            <a href="mailto:info@example.com" className="underline">
              info@example.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+919017654260" className="underline">
              +91 9017654260
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlacedStudent;