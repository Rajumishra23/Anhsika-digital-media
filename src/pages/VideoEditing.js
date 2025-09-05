import React from "react";
import { motion } from "framer-motion";
import OnlineOfflineSection from "../components/OnlineOfflineSection";
import Footer from "../components/Footer";
import UpcomingBatches from "../components/UpcomingBatches";
import StudentReview from "../components/StudentReview";
import PlacedStudent from "../components/PlacedStudent";
import Placement from "../components/Placement";

const VideoEditing = () => {
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
    <span className="block text-indigo-500">Video Editing</span>
    <span className="block text-white">Courses in Delhi</span>
  </h1>

  <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed px-2">
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

      {/* Advance Video Editing Section */}
      <section className="bg-black py-16 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center border-2 border-[#652f8e] rounded-3xl shadow-xl p-8">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl text-blue-500 font-extrabold mb-2 uppercase tracking-wide">
            ADVANCE
          </h2>
          <h3 className="text-xl sm:text-2xl text-blue-500 font-bold mb-4">
            VIDEO EDITING INSTITUTE IN SAKET, DELHI
          </h3>

          {/* Subheading */}
          <p className="text-lg sm:text-xl font-semibold mb-4">
            Be a Professional Video Editor in 3–4 Months
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
            Advanced Diploma in Video Editing (ADVE) is the best Professional Course for a student who wants to build their career in the Video Editing field. This is a 2–3 Months Diploma Course in the Advertising and Marketing Fields for any stream student—especially an Art stream student who has completed 12th can join the Video Editing Course.
          </p>

        {/* Image */}
<div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl">
  <img
    src="Raju1.png"
    alt="Video Editing Institute Promo"
    className="w-full h-[28rem] sm:h-[32rem] md:h-[36rem] lg:h-[40rem] xl:h-[52rem] 2xl:h-[64rem] object-cover transition-transform duration-500 hover:scale-105"
    loading="lazy"
  />
</div>


          {/* Call-to-Action Button */}
          <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
            Enroll Now →
          </button>
        </div>
      </section>

      {/* Other Sections */}
      <UpcomingBatches />
      <section><StudentReview /></section>
      <section><PlacedStudent /></section>
      
      <Footer />
    </section>
  );
};

export default VideoEditing;
