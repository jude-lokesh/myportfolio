import { motion, useAnimate } from "framer-motion";
import React, { useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaPhoneAlt,
} from "react-icons/fa";
import { description, nameText, personName, role } from "./data/constants";
import profileImg from "../assets/ProfileImage.jpeg";

const buttons = [
  {
    id: 1,
    icon: <FaGithub />,
    name: "GitHub",
    action:
      "https://github.com/jude-lokesh?tab=overview&from=2026-02-01&to=2026-02-28",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    name: "Linked In",
    action: "https://www.linkedin.com/in/logeshwaranvm",
  },
  {
    id: 3,
    icon: <FaInstagram />,
    name: "Instagram",
    action: "https://www.instagram.com/jude.lokesh",
  },
  {
    id: 4,
    icon: <FaPhoneAlt />,
    name: "Contact",
    action: "#contact",
  },
];

const AnimatedWords = ({ text, delay = 0 }) => {
  return text.split(" ").map((word, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: delay + i * 0.1,
      }}
      className="inline-block mr-2"
    >
      {word}
    </motion.span>
  ));
};
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [scope, animate] = useAnimate();

  return (
    <div className="container max-w-screen-xl mx-auto px-4 text-white">
      <section className="relative w-full mt-10">
        <div className="w-full px-5 sm:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl max:max-w-3xl mx-auto">
            <div className="lg:py-6 z-[100]">
              <div className="text-center lg:text-left">
                {/* <h6 className="mb-[15px] opacity-[70%] tracking-widest font-[300] text-[14px]">
                  {role.map((letter, i) => (
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: i / 10 }}
                      key={i}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </h6>
                <h1 className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                  {nameText.map((word, i) => (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.25, delay: i / 10 }}
                      key={i}
                    >
                      {word}
                    </motion.span>
                  ))}{" "}
                  <span className="text-transparent bg-clip-text bg-green-500 pl-2">
                    {personName.map((letter, i) => (
                      <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.25,
                          delay: (name.length + i) / 20,
                        }}
                        key={i}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                </h1>
                <p className="text-[15px] opacity-[70%] font-[300] mt-[10px] text-white text-center lg:text-left mx-auto max-w-xl">
                  {description.map((word, i) => (
                    <motion.span
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.25,
                        delay: i / 20,
                      }}
                      key={i}
                    >
                      {word}
                    </motion.span>
                  ))}
                </p> */}
                <div className="text-center lg:text-left max-w-2xl">
                  {/* Role */}
                  <h6 className="mb-3 tracking-widest text-sm text-gray-400 uppercase">
                    <AnimatedWords text={role} />
                  </h6>

                  {/* Name */}
                  <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                    <AnimatedWords text={nameText} />

                    <span className="text-green-400 ml-2 inline-block">
                      {personName.split("").map((letter, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.5 + i * 0.05,
                          }}
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </span>
                  </h1>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed"
                  >
                    {description}
                  </motion.p>
                </div>
                <div className="flex mt-20 md:mt-10 justify-center lg:justify-normal">
                  <div ref={scope}></div>
                  <div className="flex flex-wrap justify-center items-center gap-4">
                    {buttons.map(({ id, icon, name, action }) => {
                      const isContact = name === "Contact";

                      return (
                        <a
                          key={id}
                          href={action}
                          target={isContact ? "_self" : "_blank"}
                          rel="noopener noreferrer"
                          aria-label={name}
                          className="group flex items-center justify-center gap-2 
                   rounded-full px-4 py-3
                   border-2 border-green-500 text-green-500 text-lg
                   transition-all duration-300
                   hover:scale-110 hover:text-white hover:bg-green-500
                   hover:shadow-[0_0_15px_rgba(34,197,94,0.7)]"
                        >
                          {/* Icon */}
                          <span className="text-xl transition-transform duration-300 group-hover:rotate-12">
                            {icon}
                          </span>

                          {/* Text only on md+ */}
                          {isContact && (
                            <span className="hidden md:inline text-sm font-medium">
                              Contact Me
                            </span>
                          )}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end items-center w-full mt-10 lg:mt-0">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Glow background */}
                <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-spin-slow"></div>

                {/* Image container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isLoaded ? 1 : 0,
                    scale: isLoaded ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 w-full h-full rounded-full border-4 border-green-500 overflow-hidden shadow-xl"
                >
                  <img
                    src={profileImg}
                    alt="profile"
                    onLoad={() => {
                      setIsLoaded(true);
                      setIsLoading(false);
                    }}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
