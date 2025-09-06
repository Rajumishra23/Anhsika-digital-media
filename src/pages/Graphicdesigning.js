import React, { useState } from "react"; // Added useState import
import { motion } from "framer-motion";
import OnlineOfflineSection from "../components/OnlineOfflineSection";
import StudentReview from "../components/StudentReview";
import UpcomingBatches from "../components/UpcomingBatches";
import StudentPortfolio from "../components/StudentPortfolio";
import PlacedStudent from "../components/PlacedStudent";
import Footer from "../components/Footer";

const softwares = [
  { name: "Adobe Illustrator", gradient: "from-orange-500 to-purple-800", image: "ai.jpg" },
  { name: "Adobe Photoshop", gradient: "from-blue-500 to-black", image: "ps.jpg" },
  { name: "Adobe InDesign", gradient: "from-pink-600 to-red-800", image: "id.webp" },
  { name: "CorelDRAW", gradient: "from-green-400 to-green-800", image: "corel.jpg" },
];

const videos = [
  { src: "/vivek-video.mp4", label: "Vivek" },
  { src: "/sumit.mp4", label: "Sumit", hasOverlay: true },
  { src: "/Adm.mp4", label: "Adm" },
];

const GraphicDesigning = () => {
  const [active, setActive] = useState("graphic"); // Added state for active tab

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-black text-white min-h-[100vh] px-4 pt-8">
      <motion.div
        className="text-center max-w-3xl mx-auto mt-28 sm:mt-32 md:mt-36 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1
          className="font-extrabold leading-snug space-y-1 text-2xl sm:text-3xl md:text-4xl"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          <span className="block text-white">Best</span>
          <span className="block text-white">Institute for</span>
          <span className="block text-blue-600">Graphic Designing</span>
          <span className="block text-white">Courses in Delhi</span>
        </h1>

        <p className="mt-4 text-white-700 text-sm sm:text-base leading-relaxed px-2">
          Television, Gaming, Media, Advertising & Marketing Agency and Corporate Sector
        </p>

        <button
          className="mt-6 text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            backgroundImage: "url('bgbtn.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          Free Career Counselling →
        </button>
      </motion.div>
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
      <div className="relative overflow-hidden rounded-xl shadow-xl mx-auto" style={{ width: "70%", paddingTop: "45%" }}>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
          src="/Videos/v2-home-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Demo Section */}
      <motion.div className="mt-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <OnlineOfflineSection />
      </motion.div>

      {/* 4 Software Section */}
      <section className="py-10 px-4 bg-black">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white-800">
          Become a Professional Graphic Designer in 4 Software
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {softwares.map((software, index) => (
            <div
              key={index}
              className={`flex items-center px-4 py-4 gap-6 rounded-xl text-white shadow-md bg-gradient-to-r ${software.gradient}`}
            >
              <div className="w-16 h-16 relative mr-3">
                <img
                  src={software.image}
                  alt={software.name}
                  className="object-contain absolute inset-0 w-full h-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="text-lg md:text-lg font-semibold">{software.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Student Feedback Section */}
      <section className="bg-white py-10 text-[#652f8e] relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6 relative">
            <h2 className="text-2xl text-gray-800 md:text-3xl font-semibold text-center w-full">
              Student Feedback
            </h2>
          </div>

          <div className="flex overflow-x-auto gap-2 px-4 scroll-smooth no-scrollbar snap-x snap-mandatory">
            {videos.map((video, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 snap-center overflow-hidden bg-black group rounded-2xl h-50 sm:h-76 w-[99%] sm:w-[40%] mx-auto sm:mx-0"
              >
                <video src={video.src} className="w-full h-full object-cover" muted playsInline />
                {video.hasOverlay && (
                  <button className="absolute inset-0 flex items-center justify-center bg-black/30 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="lucide lucide-circle-play w-16 h-16 text-white opacity-90 hover:scale-105 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href="/brochure.pdf"
              download
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-blue-500 text-white rounded-xl font-medium transition"
            >
              Download Course Brochure
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-arrow-down-to-line"
                width={18}
                height={18}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 17V3" />
                <path d="m6 11 6 6 6-6" />
                <path d="M19 21H5" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-black text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Ratings */}
          <div className="flex items-center justify-center gap-6 mb-8 flex-wrap">
            <div className="flex items-center gap-2">
              <img src="Image/Asset35.svg" alt="Google Reviews" className="h-6" />
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <span className="ml-1">5.0</span>
            </div>
            <span className="text-gray-400">|</span>
            <div className="flex items-center gap-2">
              <img src="Image/Asset36.svg" alt="Justdial Reviews" className="h-6" />
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <span className="ml-1">4.9</span>
            </div>
          </div>

          {/* Job Placement Section */}
          <div className="border border-gray-300 rounded-xl px-6 py-8 inline-block mb-6 text-center">
            <p className="text-lg font-medium mb-2">100% Job Placement</p>
            <p className="text-xl md:text-2xl font-bold">
              Learn <span className="text-yellow-400">50+ Modules</span> with AI
            </p>
            <p className="mt-1 text-gray-300 text-base">and Your Convenient Batch Slot</p>
          </div>

          <section className="py-10 bg-black">
            <div className="max-w-7xl mx-auto px-4">
              {/* Heading */}
              <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold text-blue-500">Upcoming Batches</h2>
                <p className="text-white-500 mt-2">Choose the course and join our next batch</p>
              </div>

              {/* Tabs */}
              <div className="relative mb-10">
                <div className="flex gap-3 overflow-x-auto no-scrollbar px-2 py-2 scroll-smooth">
                  <button
                    onClick={() => setActive("graphic")}
                    className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition border whitespace-nowrap ${
                      active === "graphic"
                        ? "bg-gray-300 text-gray-700 border-gray-400 shadow"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-purple-50 hover:text-[#652f8e]"
                    }`}
                  >
                    Graphic Designing
                  </button>
                  <button
                    onClick={() => setActive("video")}
                    className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition border whitespace-nowrap ${
                      active === "video"
                        ? "bg-gray-300 text-gray-700 border-gray-400 shadow"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-purple-50 hover:text-[#652f8e]"
                    }`}
                  >
                    Video Editing
                  </button>
                  <button
                    onClick={() => setActive("digital")}
                    className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition border whitespace-nowrap ${
                      active === "digital"
                        ? "bg-gray-300 text-gray-700 border-gray-400 shadow"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-purple-50 hover:text-[#652f8e]"
                    }`}
                  >
                    Digital Marketing
                  </button>
                </div>
              </div>

              {/* Batch Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {active === "graphic" && (
                  <>
                    {/* 3 Graphic Designing Cards */}
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-lg relative overflow-hidden">
                      <span className="absolute top-2 right-4 text-xs font-semibold bg-[#652f8e] text-white px-3 py-1 rounded-full">Weekday</span>
                      <h3 className="text-lg font-bold text-[#652f8e] mb-3">Graphic Design - Morning</h3>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p><span className="font-medium">📆 Batch Start:</span> 17 July, August</p>
                        <p><span className="font-medium">⏰ Time:</span> Morning 11:00</p>
                        <p><span className="font-medium">🎓 Class Mode:</span> Offline + Online</p>
                      </div>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-lg relative overflow-hidden">
                      <span className="absolute top-2 right-4 text-xs font-semibold bg-[#652f8e] text-white px-3 py-1 rounded-full">Weekend</span>
                      <h3 className="text-lg font-bold text-[#652f8e] mb-3">Graphic Design - Evening</h3>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p><span className="font-medium">📆 Batch Start:</span> 19 July, August</p>
                        <p><span className="font-medium">⏰ Time:</span> Evening 5:00</p>
                        <p><span className="font-medium">🎓 Class Mode:</span> Online</p>
                      </div>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-lg relative overflow-hidden">
                      <span className="absolute top-2 right-4 text-xs font-semibold bg-[#652f8e] text-white px-3 py-1 rounded-full">Weekend</span>
                      <h3 className="text-lg font-bold text-[#652f8e] mb-3">Graphic Design - Weekend</h3>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p><span className="font-medium">📆 Batch Start:</span> 21 July, August</p>
                        <p><span className="font-medium">⏰ Time:</span> Afternoon 2:00</p>
                        <p><span className="font-medium">🎓 Class Mode:</span> Offline</p>
                      </div>
                    </div>
                  </>
                )}

                {active === "video" && (
                  <>
                    {/* 3 Video Editing Cards */}
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-lg relative overflow-hidden">
                      <span className="absolute top-2 right-4 text-xs font-semibold bg-[#652f8e] text-white px-3 py-1 rounded-full">Weekday</span>
                      <h3 className="text-lg font-bold text-[#652f8e] mb-3">Video Editing - Morning</h3>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p><span className="font-medium">📆 Batch Start:</span> 20 July, August</p>
                        <p><span className="font-medium">⏰ Time:</span> Morning 10:00</p>
                        <p><span className="font-medium">🎓 Class Mode:</span> Online</p>
                      </div>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-lg relative overflow-hidden">
                      <span className="absolute top-2 right-4 text-xs font-semibold bg-[#652f8e] text-white px-3 py-1 rounded-full">Weekend</span>
                      <h3 className="text-lg font-bold text-[#652f8e] mb-3">Video Editing - Evening</h3>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p><span className="font-medium">📆 Batch Start:</span> 22 July, August</p>
                        <p><span className="font-medium">⏰ Time:</span> Evening 6:00</p>
                        <p><span className="font-medium">🎓 Class Mode:</span> Offline</p>
                      </div>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-lg relative overflow-hidden">
                      <span className="absolute top-2 right-4 text-xs font-semibold bg-[#652f8e] text-white px-3 py-1 rounded-full">Weekend</span>
                      <h3 className="text-lg font-bold text-[#652f8e] mb-3">Video Editing - Weekend</h3>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p><span className="font-medium">📆 Batch Start:</span> 24 July, August</p>
                        <p><span className="font-medium">⏰ Time:</span> Afternoon 3:00</p>
                        <p><span className="font-medium">🎓 Class Mode:</span> Hybrid</p>
                      </div>
                    </div>
                  </>
                )}

                {active === "digital" && (
                  <>
                    {/* 3 Digital Marketing Cards */}
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-lg relative overflow-hidden">
                      <span className="absolute top-2 right-4 text-xs font-semibold bg-[#652f8e] text-white px-3 py-1 rounded-full">Weekday</span>
                      <h3 className="text-lg font-bold text-[#652f8e] mb-3">Digital Marketing - Morning</h3>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p><span className="font-medium">📆 Batch Start:</span> 25 July, August</p>
                        <p><span className="font-medium">⏰ Time:</span> Morning 9:00</p>
                        <p><span className="font-medium">🎓 Class Mode:</span> Offline</p>
                      </div>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-lg relative overflow-hidden">
                      <span className="absolute top-2 right-4 text-xs font-semibold bg-[#652f8e] text-white px-3 py-1 rounded-full">Weekend</span>
                      <h3 className="text-lg font-bold text-[#652f8e] mb-3">Digital Marketing - Evening</h3>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p><span className="font-medium">📆 Batch Start:</span> 27 July, August</p>
                        <p><span className="font-medium">⏰ Time:</span> Evening 7:00</p>
                        <p><span className="font-medium">🎓 Class Mode:</span> Online</p>
                      </div>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-lg relative overflow-hidden">
                      <span className="absolute top-2 right-4 text-xs font-semibold bg-[#652f8e] text-white px-3 py-1 rounded-full">Weekend</span>
                      <h3 className="text-lg font-bold text-[#652f8e] mb-3">Digital Marketing - Weekend</h3>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p><span className="font-medium">📆 Batch Start:</span> 29 July, August</p>
                        <p><span className="font-medium">⏰ Time:</span> Afternoon 4:00</p>
                        <p><span className="font-medium">🎓 Class Mode:</span> Hybrid</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>

          {/* Student Review Section */}
          <div className="border border-gray-300 rounded-xl px-6 py-8 text-center">
            <StudentReview />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-black text-white py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center justify-between border border-gray-700 rounded-lg p-4 bg-gray-900">
            <span className="text-white">Client based Live Projects</span>
            <img src="/about-icon/icon3.svg" alt="Handshake" className="w-10 h-10 object-contain" />
          </div>
          <div className="flex items-center justify-between border border-gray-700 rounded-lg p-4 bg-gray-900">
            <span className="text-white">Every Month 10+ Students Placement</span>
            <img src="/about-icon/icon1.svg" alt="Users" className="w-10 h-10 object-contain" />
          </div>
          <div className="flex items-center justify-between border border-gray-700 rounded-lg p-4 bg-gray-900">
            <span className="text-white">Individual Doubt Clearing Session</span>
            <img src="/about-icon/icon2.svg" alt="Question" className="w-10 h-10 object-contain" />
          </div>
          <div className="flex items-center justify-between border border-gray-700 rounded-lg p-4 bg-gray-900">
            <span className="text-white">Advertising and Marketing Industry Expert Trainer</span>
            <img src="/about-icon/icon4.svg" alt="Award" className="w-10 h-10 object-contain" />
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="/syllabus.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-md shadow-lg"
          >
            <i className="fas fa-download"></i> Download Course Syllabus
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lucide lucide-arrow-down-to-line"
              width={18}
              height={18}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 17V3" />
              <path d="m6 11 6 6 6-6" />
              <path d="M19 21H5" />
            </svg>
          </a>
        </div>
      </section>

      {/* Advance Digital Marketing Section */}
      <section className="bg-black text-white py-12 px-6">
        <div className="max-w-5xl mx-auto border border-gray-500 rounded-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Advance <span className="text-blue-500">Digital Marketing Course</span> Module 2025 with AI
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Digital marketing is a dynamic and essential discipline in today's digital age, encompassing a wide range of strategies and techniques to promote businesses, build brand presence, and drive customer engagement and conversions. In our digital marketing institute, students will gain a comprehensive understanding of key digital marketing concepts and tools.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            ✩ From website design and search engine optimization (SEO) to social media marketing, email marketing, content creation, and analytics, our modules cover all essential areas. Students will learn to develop effective digital marketing strategies, leverage various platforms and channels, and measure and optimize their campaigns for maximum impact. Our institute provides hands-on training, industry insights, and practical skills to equip aspiring marketers with the knowledge and expertise needed to thrive in the ever-evolving digital landscape.
          </p>
          <a
            href="/demo"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg font-semibold"
          >
            Book Free Demo Class <i className="fas fa-download"></i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lucide lucide-arrow-down-to-line"
              width={18}
              height={18}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 17V3" />
              <path d="m6 11 6 6 6-6" />
              <path d="M19 21H5" />
            </svg>
          </a>
        </div>
      </section>
      {/* Top Image Section */}
      <section className="relative w-full bg-black">
        <img
          src="Asset 30.svg"
          alt="Graphic Design Banner"
          className="w-80 h-48 mx-auto block object-cover"
        />
      </section>

      {/* Content Section below the image */}
      <section className="bg-black text-white py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Anshika Digital Media</h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Professional Training Institute of Graphic Designing and Video Editing, Courses provided at an advanced level. We are not only conducting courses but along with the courses we also provide live projects for our students to practice. Training Institute of Graphic Designing and Video Editing, Courses provided at an advanced level. We are not only conducting courses but along with the courses we also provide live projects for our students to practice. We also provide 100% job placement to our students. After completion of the course, we also provide paid internships to our students. The entire preparation for the internship is done by our institute itself, in which we provide the resume, portfolio, and interview schedule to the students. During the internship, the starting salary package is 1,80,000/- to 3,00,000/- per annum.
          </p>
          <br></br>
          <PlacedStudent />
        </div>
      </section>
      <section className="py-12 bg-black text-[#652f8e]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="border-2 border-[#652f8e] bg-black rounded-2xl p-6 shadow-lg bg-white text-center">
            {/* Heading */}
            <h2 className="text-3xl font-bold mb-1 text-indigo-600">Goodbye</h2>
            <h3 className="text-xl font-semibold mb-6 text-white">Dear Students</h3>

            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow-md mb-6">
              <img
                src="Asset 29.svg"
                alt="Farewell Moment"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Footer Text */}
            <p className="text-white bg-black">..................</p>
            <p className="text-lg font-medium text-white">Connection Forever!</p>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default GraphicDesigning;