import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import GraphicDesigning from "./pages/Graphicdesigning";
import DigitalMarketing from "./pages/DigitalMarketing";
import VideoEditing from "./pages/VideoEditing";
import Header from "./components/Header";

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000); // Show modal after 1 second
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Header will stay on all pages */}
      <Header modalActive={showModal} />

      {/* Book Now Modal */}
{showModal && (
  <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-40 sm:pt-48 md:pt-56 px-4 sm:px-6">
    <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
      >
        ✕
      </button>
      <h2 className="text-2xl font-bold text-[#652f8e] mb-4 text-center">Book Now</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="email"
          placeholder="Email ID"
          className="w-full px-4 py-2 border rounded-md"
        />
        <select className="w-full px-4 py-2 border rounded-md">
          <option>Select Course</option>
          <option>Graphic Design</option>
          <option>Video Editing</option>
          <option>Digital Marketing</option>
        </select>
        <button
          type="submit"
          className="w-full bg-[#652f8e] text-white py-2 rounded-md hover:bg-[#501d6a] transition"
        >
          Send OTP
        </button>
      </form>
    </div>
  </div>
)}


      {/* Routes handle page navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/graphic-designing" element={<GraphicDesigning />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/video-editing" element={<VideoEditing />} />
      </Routes>
    </>
  );
}

export default App;