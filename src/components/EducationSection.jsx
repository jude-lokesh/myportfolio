import React from "react";
const education = [
  {
    id: 1,
    duration: "2017 - 2021",
    company: "GKM Collage of Engineering and Technology - Chennai",
    university: "Anna University",
    post: "Bachelor of Engineering",
    percentage: "CGPA - 7.9",
  },
];

const EducationSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-10">
      {education.map(
        ({ id, duration, company, university, post, percentage }) => (
          <div
            key={id}
            className="relative p-6 rounded-2xl border border-white/20 
                   bg-white/5 backdrop-blur-md
                   transition-all duration-300 
                   hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Header */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black text-lg font-bold">
                🎓
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-white">
                {post}
              </h3>
            </div>

            {/* Content */}
            <div className="mt-4 text-sm md:text-base text-gray-300 space-y-1">
              <p className="text-green-400 font-medium">{duration}</p>
              <p>{company}</p>
              <p className="text-gray-400">{university}</p>

              {/* Percentage badge */}
              <span
                className="inline-block mt-2 px-3 py-1 text-xs font-medium 
                           bg-green-500/20 text-green-400 rounded-full"
              >
                {percentage}
              </span>
            </div>

            {/* Bottom accent */}
            <div className="h-1 w-12 bg-green-500 mt-5 rounded-full"></div>
          </div>
        ),
      )}
    </div>
  );
};

export default EducationSection;
