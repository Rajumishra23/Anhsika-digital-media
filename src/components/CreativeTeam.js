import React from "react";

const teamMembers = [
  { name: "Ankit KK", role: "Founder", image: "Ankit-1.jpg" },
  { name: "Sulekha", role: "Founder", image: "sulekha-1.jpg" },
  { name: "Pooja", role: "Admin Dept.", image: "pooja-1.webp" },
  { name: "Ananya Mukhi", role: "HR", image: "Ananya-1.webp" },
];

const CreativeTeam = () => {
  return (
    <section className="bg-[#f3f4f6] py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10 sm:mb-12">
          Meet Our <span className="text-purple-600">Creative Team</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-5 sm:p-6 text-center"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden border-4 border-purple-400">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-purple-700 mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeTeam;