import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { randomNumberBetween, Variants } from "./data/constants";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import SkillSection from "./SkillSection";

/* ✅ Clean Tabs */
const WhyMeTabs = [
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
];

const WhyMe = () => {
  /* ✅ Use string instead of object */
  const [activeTab, setActiveTab] = useState("experience");
  const [sparkles, setSparkles] = useState([]);

  const onClickEffect = (index) => {
    const newSparkles = Array.from({ length: 12 }).map((_, i) => {
      const startX =
        (index + 0.5) * (100 / WhyMeTabs.length) + randomNumberBetween(-10, 10);

      const startY = randomNumberBetween(40, 70);

      return {
        id: i,
        style: {
          left: `${startX}%`,
          top: `${startY}%`,
        },
      };
    });

    setSparkles(newSparkles);

    setTimeout(() => {
      setSparkles([]);
    }, 600);
  };

  /* ✅ Clean content mapping */
  const tabContent = {
    experience: <ExperienceSection />,
    education: <EducationSection />,
    skills: <SkillSection />,
  };

  return (
    <div id="whyme" className="container max-w-screen-xl mx-auto px-4 mt-40">
      {/* Title */}
      <motion.h1
        variants={Variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="text-white font-bold text-4xl md:text-5xl lg:text-6xl text-center lg:text-left"
      >
        Why Hire Me
      </motion.h1>

      {/* Card */}
      <motion.div
        variants={Variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        className="relative mt-10 p-6 rounded-2xl
                   bg-white/5 border border-white/20
                   shadow-xl"
      >
        <nav className="relative z-[9999]">
          <ul className="flex gap-3 justify-center lg:justify-start">
            {WhyMeTabs.map((item, index) => {
              const isActive = item.id === activeTab;

              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveTab(item.id);
                      onClickEffect(index);
                    }}
                    className={`px-6 py-2 rounded-full text-sm md:text-base border
                      transition-all duration-300 cursor-pointer
                      ${
                        isActive
                          ? "bg-green-500 text-black border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)]"
                          : "bg-white/5 text-gray-300 border-white/20 hover:bg-white/10"
                      }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Content */}
        <main className="mt-6 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {tabContent[activeTab]}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Sparkles (background only) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {sparkles.map((sparkle) => (
            <motion.div
              key={sparkle.id}
              className="absolute"
              style={sparkle.style}
              initial={{ opacity: 1, scale: 1 }}
              animate={{
                y: -120,
                opacity: 0,
                scale: 0.5,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WhyMe;
