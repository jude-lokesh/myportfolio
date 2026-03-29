import React from "react";
import { motion } from "framer-motion";
import { AboutMe1, AboutMe2, AboutMe3, AboutMe4 } from "./data/constants";

const AnimatedText = ({ text, baseDelay = 0 }) => {
  return (
    <p className="text-gray-300 leading-relaxed">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.03,
            delay: baseDelay + i * 0.01,
          }}
        >
          {char}
        </motion.span>
      ))}
    </p>
  );
};

const About = () => {
  return (
    <div id="services" className="container max-w-screen-xl mx-auto px-4 mt-30">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-white font-bold text-4xl md:text-5xl lg:text-6xl text-center lg:text-left"
      >
        About
      </motion.h2>

      {/* Content */}
      <div className="mt-6 space-y-4">
        <AnimatedText text={AboutMe1.join("")} baseDelay={0} />
        <AnimatedText text={AboutMe2.join("")} baseDelay={0.5} />
        <AnimatedText text={AboutMe3.join("")} baseDelay={1} />
        <AnimatedText text={AboutMe4.join("")} baseDelay={1.5} />
      </div>
    </div>
  );
};

export default About;
