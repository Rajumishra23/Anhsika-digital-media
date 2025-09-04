import React from "react";
import CourseSelector from "./components/CourseSelector";
import OnlineOfflineSection from "./components/OnlineOfflineSection";
import StudentFeedback from "./components/StudentFeedback";
import StudentPortfolio from "./components/StudentPortfolio";
import StudentReview from "./components/StudentReview";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import UpcomingBatches from "./components/UpcomingBatches";
import PlacedStudent from "./components/PlacedStudent";
import Recently from "./components/Recently";
import CreativeTeam from "./components/CreativeTeam";
import Header from "./components/Header";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";


function App() {
  return (
    <div className="font-sans antialiased bg-white text-gray-800">
     <Header/>
      <HeroSection />
      <CourseSelector />
      <OnlineOfflineSection />
      <StudentFeedback />
      <PlacedStudent/>
      <StudentPortfolio /> 
      <Recently/> 
      <UpcomingBatches/>   
      <CreativeTeam/> 
      <StudentReview />
      <About/>
      <WhyChoose/>
      <Footer />
    </div>
  );
}

export default App;