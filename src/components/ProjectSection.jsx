import React, { useState } from "react";
import { Variants } from "./data/constants";
import { motion } from "framer-motion";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import whatsappLogin from "../assets/projectImg/whatsappLogin.png";
import whatsappMsg from "../assets/projectImg/whatsappMsg.jpeg";
import whatsappProfile from "../assets/projectImg/whatsappProfile.png";

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "TeamSync",
      description: "Communication Tool",
      picture: whatsappLogin,
      tools: ["React", "FastApi"],
    },
    {
      id: 2,
      title: "TeamSync",
      description: "Communication Tool",
      picture: whatsappMsg,
      tools: ["React", "FastApi"],
    },
    {
      id: 3,
      title: "TeamSync",
      description: "Communication Tool",
      picture: whatsappProfile,
      tools: ["React", "FastApi"],
    },
  ];

  const [page, setPage] = useState(0);

  // Safe index (handles negative values)
  const projectIndex =
    ((page % projects.length) + projects.length) % projects.length;

  const paginate = (direction) => {
    setPage((prev) => prev + direction);
  };

  const currentProject = projects[projectIndex];

  return (
    <div id="projects" className="container max-w-screen-xl mx-auto mt-40 px-4">
      <motion.h1
        variants={Variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl text-center lg:text-left"
      >
        My Projects
      </motion.h1>

      <div className="w-full flex flex-col items-center mt-20 border-2 border-primary bg-white/30 p-8 rounded-3xl">
        {/* Navigation Buttons */}
        <div className="w-full flex justify-between z-[100] relative">
          <div
            className="text-white text-3xl"
            onClick={() => paginate(-1)}
            aria-label="Previous Slide"
          >
            <FaChevronLeft />
          </div>

          <div
            className="text-white text-3xl"
            onClick={() => paginate(1)}
            aria-label="Next Slide"
          >
            <FaChevronRight />
          </div>
        </div>

        {/* Project Image */}
        <img
          src={currentProject.picture}
          alt={currentProject.title}
          className="max-w-full md:max-w-[65%] h-[200px] md:h-[500px] object-contain rounded-xl mt-6"
        />

        {/* Title */}
        <h2 className="text-white text-3xl mt-4 font-semibold">
          {currentProject.title}
        </h2>

        {/* Description */}
        <p className="text-white mt-2 text-lg text-center max-w-lg">
          {currentProject.description}
        </p>

        {/* Tools */}
        <div className="text-primary text-md mt-2 font-bold">
          <strong className="mr-2">Tools:</strong>
          {currentProject.tools.join(", ")}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-10">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === projectIndex ? "bg-green-500" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
