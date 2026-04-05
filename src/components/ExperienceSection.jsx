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
    <div className="relative max-w-4xl mx-auto mt-20 px-4">
      {/* 🔥 Top Experience Summary */}
      <div className="mb-12 text-center">
        <h4 className="text-3xl md:text-4xl font-bold text-white">
          3.6+ Years of Experience
        </h4>
        <p className="text-gray-400 mt-2">
          Building scalable and user-focused web applications
        </p>
      </div>

      {/* 🔥 Vertical Timeline Line */}
      <div className="absolute left-6 top-24 bottom-0 w-[2px] bg-white/20"></div>

      {/* Timeline Items */}
      <div className="space-y-10">
        {experiences.map(({ id, duration, company, post, current }) => (
          <div key={id} className="relative flex items-start gap-6">
            {/* 🔵 Timeline Dot */}
            <div className="relative z-10">
              <div
                className={`w-4 h-4 rounded-full border-4 
                ${current ? "bg-green-500 border-green-300" : "bg-gray-500 border-gray-300"}`}
              ></div>
            </div>

            {/* 💼 Card */}
            <div
              className={`flex-1 p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 
              hover:-translate-y-2 hover:shadow-xl
              ${
                current
                  ? "border-green-500 bg-green-500/10 shadow-[0_0_25px_rgba(34,197,94,0.3)]"
                  : "border-white/20 bg-white/5"
              }`}
            >
              {/* Present Badge */}
              {current && (
                <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-green-500 text-black font-semibold">
                  Present
                </span>
              )}

              {/* Header */}
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {post}
              </h3>

              {/* Content */}
              <div className="mt-3 text-sm md:text-base text-gray-300 space-y-1">
                <p className="text-green-400 font-medium">{duration}</p>
                <p>{company}</p>
              </div>

              {/* Bottom line accent */}
              <div
                className={`h-[2px] mt-5 rounded-full
                ${current ? "bg-green-500 w-20" : "bg-white/20 w-12"}`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
