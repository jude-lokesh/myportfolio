import React from "react";
const experiences = [
  {
    id: 1,
    duration: "Oct 2023 – Present",
    post: "Software Developer",
    company: "Compunet Connections, Chennai",
    current: true,
  },
  {
    id: 2,
    duration: "Oct 2022 – Sep 2023",
    company: "Genesys Academy of Computer Science, Puducherry",
    post: "Trainee Developer",
    current: false,
  },
];

const ExperienceSection = () => {
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 x1:grid-cols-3 mt-20">
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {experiences.map(({ id, duration, company, post, current }) => (
          <div
            key={id}
            className={`relative p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 
        hover:-translate-y-2 hover:shadow-xl
        ${
          current
            ? "border-green-500 bg-green-500/10 shadow-[0_0_25px_rgba(34,197,94,0.4)]"
            : "border-white/20 bg-white/5"
        }`}
          >
            {/* 🔥 Present Badge */}
            {current && (
              <span
                className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full 
                         bg-green-500 text-black font-semibold"
              >
                Present
              </span>
            )}

            {/* Header */}
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold
            ${current ? "bg-green-500 text-black" : "bg-gray-700 text-white"}`}
              >
                💼
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-white">
                {post}
              </h3>
            </div>

            {/* Content */}
            <div className="mt-4 text-sm md:text-base text-gray-300 space-y-1">
              <p className="text-green-400 font-medium">{duration}</p>
              <p>{company}</p>
            </div>

            {/* Bottom accent line */}
            <div
              className={`h-1 mt-5 rounded-full transition-all duration-300
          ${current ? "bg-green-500 w-16" : "bg-white/20 w-10"}`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
