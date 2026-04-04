import React from "react";
import { motion } from "framer-motion";
import css from "../assets/skill/css.png";
import html from "../assets/skill/html.png";
import js from "../assets/skill/js.png";
import typescript from "../assets/skill/typescript.png";
import react from "../assets/skill/react.png";
import next from "../assets/skill/nextjs.png";
import mui from "../assets/skill/mui.png";
import redux from "../assets/skill/redux.png";
import webpack from "../assets/skill/webpack.png";
import npm from "../assets/skill/npm.png";
import yarn from "../assets/skill/yarn.png";
import vscode from "../assets/skill/vsCode.png";
import git from "../assets/skill/git.png";
import bitbucket from "../assets/skill/bitbucket.png";
import claude from "../assets/skill/claude.png";
import cursor from "../assets/skill/cursor.png";

const SkillSection = () => {
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        {
          name: "HTML5",
          icon: html,
          level: 90,
        },
        {
          name: "CSS3",
          icon: css,
          level: 90,
        },
        {
          name: "MUI",
          icon: mui,
          level: 95,
        },
        {
          name: "JavaScript",
          icon: js,
          level: 90,
        },
        {
          name: "TypeScript",
          icon: typescript,
          level: 90,
        },
        {
          name: "React",
          icon: react,
          level: 90,
        },
        {
          name: "Next",
          icon: next,
          level: 90,
        },
      ],
    },
    {
      category: "State Management & Data Fetching",
      skills: [
        {
          name: "Redux Toolkit",
          icon: redux,
          level: 90,
        },
      ],
    },
    {
      category: "Build & Tooling",
      skills: [
        {
          name: "Webpack",
          icon: webpack,
          level: 80,
        },
        {
          name: "Npm",
          icon: npm,
          level: 80,
        },
        {
          name: "Yarn",
          icon: yarn,
          level: 80,
        },
      ],
    },
    {
      category: "IDEs & Version Control",
      skills: [
        {
          name: "Visual Studio Code",
          icon: vscode,
          level: 95,
        },
        {
          name: "Git",
          icon: git,
          level: 95,
        },
        {
          name: "Bitbucket",
          icon: bitbucket,
          level: 95,
        },
      ],
    },
    {
      category: "AI and Dev Tools",
      skills: [
        {
          name: "Claude",
          icon: claude,
          level: 80,
        },
        {
          name: "Cursor",
          icon: cursor,
          level: 80,
        },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="mt-20 max-w-5xl mx-auto">
      {skillsData.map((group, index) => (
        <div key={index} className="mb-12">
          {/* Category Title */}
          <h2 className="text-xl md:text-2xl font-semibold text-green-400 mb-6">
            {group.category}
          </h2>

          {/* Skills Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          >
            {group.skills.map((skill, i) => (
              <motion.div
                key={i}
                variants={item}
                className="group p-4 rounded-2xl border border-white/20 
                       bg-white/5 backdrop-blur-md
                       transition-all duration-300
                       hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]"
              >
                {/* Icon */}
                <div className="flex justify-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    draggable={false}
                    className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Name */}
                <h3 className="text-center text-sm mt-3 text-white font-medium">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                {/* <div className="w-full bg-white/10 rounded-full h-1.5 mt-3 overflow-hidden">
                  <div
                    className="bg-green-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div> */}

                {/* Level % */}
                {/* <p className="text-xs text-gray-400 text-center mt-1">
                  {skill.level}%
                </p> */}

                {/* Stars */}
                {/* <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className="text-xs">
                      {index < Math.round(skill.level / 20) ? "⭐" : "☆"}
                    </span>
                  ))}
                </div> */}
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default SkillSection;
