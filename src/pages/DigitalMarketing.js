import React from "react";
import { motion } from "framer-motion";
import OnlineOfflineSection from "../components/OnlineOfflineSection";
import {
  FaBullhorn, FaLaptopCode, FaSearch, FaGoogle, FaFacebookF,
  FaEnvelope, FaFileAlt, FaVideo, FaMobileAlt, FaRegImages,
  FaChartLine, FaPercentage, FaUserShield, FaHandshake,
  FaShoppingCart, FaUserFriends, FaProjectDiagram, FaUserTie
} from "react-icons/fa";
import Footer from "../components/Footer";
import UpcomingBatches from "../components/UpcomingBatches";
import StudentReview from "../components/StudentReview";
import StudentPortfolio from "../components/StudentPortfolio";
import PlacedStudent from "../components/PlacedStudent";

const modules = [
  { title: "Introduction of Digital Marketing", icon: <FaBullhorn /> },
  { title: "Website Design & Development", icon: <FaLaptopCode /> },
  { title: "Search Engine Optimization (SEO)", icon: <FaSearch /> },
  { title: "Pay-Per-Click Advertising (PPC)", icon: <FaGoogle /> },
  { title: "Social Media Marketing", icon: <FaFacebookF /> },
  { title: "Email Marketing", icon: <FaEnvelope /> },
  { title: "Content Marketing", icon: <FaFileAlt /> },
  { title: "Video Marketing", icon: <FaVideo /> },
  { title: "Mobile Marketing", icon: <FaMobileAlt /> },
  { title: "Display Marketing", icon: <FaRegImages /> },
  { title: "Analytics & Data Interpretation", icon: <FaChartLine /> },
  { title: "Conversion Rate Optimization", icon: <FaPercentage /> },
  { title: "Online Reputation Management", icon: <FaUserShield /> },
  { title: "Affiliate Marketing", icon: <FaHandshake /> },
  { title: "E-commerce Marketing", icon: <FaShoppingCart /> },
  { title: "Influencer Marketing", icon: <FaUserFriends /> },
  { title: "Digital Strategy & Planning", icon: <FaProjectDiagram /> },
  { title: "Interview Preparation", icon: <FaUserTie /> },
];

const DigitalMarketing = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Example videos array (replace with your actual video data)
  const videos = [
    { src: "/Videos/video1.mp4", hasOverlay: true },
    { src: "/Videos/video2.mp4", hasOverlay: true },
    { src: "/Videos/video3.mp4", hasOverlay: true },
  ];

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
    <span className="block text-pink-600">Digital Marketing</span>
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



      <div className="relative overflow-hidden rounded-xl shadow-xl mx-auto" style={{ width: '70%', paddingTop: '45%' }}>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
          src="/Videos/v2-home-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>

      {/* Demo Section */}
      <motion.div className="mt-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <OnlineOfflineSection />
      </motion.div>

      {/* Middle Section */}
      <motion.div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 mt-20"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
      >
        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.img
            src="Digital.webp"
            alt="Anshika Training Session"
            className="w-[36rem] sm:w-[40rem] md:w-[48rem] lg:w-[56rem] h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl object-cover shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="w-full lg:w-1/2 text-center border-2 border-purple-600 rounded-xl p-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 mb-4">
            Why Choose Anshika Digital Media?
          </h2>
          <p className="text-white-700 text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
            Anshika Digital Media is not just an ordinary training institute — we’re a full-scale advertising agency. This unique position allows us to train our students with a hands-on, industry-level approach, working directly on real client projects.
          </p>
          <p className="text-white-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            By giving learners exposure to actual market demands and professional workflows, we ensure they gain practical skills that employers truly value. As a result, we have a 100% job placement success rate — making our training not just educational, but career-focused.
          </p>

          <button
            className="text-white text-sm sm:text-base md:text-base font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              backgroundImage: "url('bgbtn.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            Enroll Now →
          </button>
        </div>
      </motion.div>

      {/* Curriculum Section */}
      <motion.div className="bg-black text-white py-16 px-4 mt-20 border-2 border-blue-600 rounded-t-3xl"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-600 mb-6">
            50+ Modules of Digital Marketing
          </h2>
          <p className="text-white-700 text-sm sm:text-base md:text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
            Master every aspect of digital marketing with our industry-leading curriculum. From SEO to AI-driven marketing, we've got it all covered.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-300 hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-4xl mb-4 text-blue-500">
                  {React.cloneElement(module.icon, {
                    className: "w-10 h-10 text-blue-500 group-hover:text-cyan-400 transition-colors duration-300",
                  })}
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">{module.title}</h3>
                <button className="bg-black text-white text-sm px-4 py-2 rounded-full hover:bg-gray-800 transition">
                  Read More »
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <button
              className="text-white text-center text-sm sm:text-base font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
              style={{
                fontFamily: "Arial, Helvetica, sans-serif",
                backgroundImage: "url('bgbtn.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              Download Course Syllabus →
            </button>
          </div>
        </div>
      </motion.div>

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

          {/* Upcoming Batches Section */}
          <UpcomingBatches />

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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg font-medium hover:scale-105 transition-transform"
          >
            Request Free Demo →
          </a>
        </div>
      </section>

      {/* Student Portfolio Section */}
      <section className="bg-white text-black py-12 px-4">
        <StudentPortfolio />
      </section>

      {/* Placed Student Section */}
      <section className="bg-black text-white py-12 px-4">
        <PlacedStudent />
      </section>

      {/* Footer Section */}
      <Footer />
    </section>
  );
};

export default DigitalMarketing;
