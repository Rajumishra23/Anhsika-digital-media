import React from "react";
import { FaStar } from "react-icons/fa";

// Rename array to avoid conflict with component name
const studentReviews = [
  {
    name: "Aadesh Nishad",
    image: "Avinash.webp",
    review:
      "Great institute for digital marketing and graphic design. Practical training and solid knowledge!",
  },
  {
    name: "Kundan Kumar",
    image: "kundan.webp",
    review:
      "Very good teaching and hands-on training. Highly recommend this institute!",
  },
  {
    name: "Ramesh Sahu",
    image: "rajnish.webp",
    review:
      "Completed digital marketing course here. Learned SEO, social media, email marketing. Trainer support was excellent!",
  },
  {
    name: "Anshika Digital Marketing Institute",
    image: "anshika.webp",
    review:
      "Top-notch institute with practical training and personal growth. Great for career building!",
  },
];

const StudentReview = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          What Our <span className="text-blue-600">Students Say</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {studentReviews.map((student, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 text-left"
            >
              <div className="w-20 h-20 mb-4 rounded-full overflow-hidden border-4 border-blue-400">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold text-blue-700 mb-1">
                {student.name}
              </h3>

              <div className="flex mb-2 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-sm text-gray-700">{student.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentReview;
