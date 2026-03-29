import { animate, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const NumberSection = () => {
  const numbers = [
    { id: 1, value: 3.6, title: "Years", title2: "Experience" },
    { id: 2, value: 3, title: "Projects", title2: "Worked On" },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  const AnimatedNumber = ({ value, duration = 1000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = value;
      const incrementTime = 16; // ~60fps
      const steps = duration / incrementTime;
      const increment = end / steps;

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(counter);
          setCount(end);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(counter);
    }, [value, duration]);

    return (
      <>{Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}</>
    );
  };

  return (
    <div
      ref={sectionRef}
      className="flex gap-10 justify-center lg:justify-start mt-10"
    >
      {numbers?.map((item) => (
        <div
          key={item.id}
          className="group text-center transition-all duration-300 hover:-translate-y-2"
        >
          <h2
            className="text-4xl lg:text-6xl font-bold text-white 
                   transition duration-300 
                   group-hover:text-green-400"
          >
            <AnimatedNumber value={item.value} />
          </h2>

          <p className="mt-2 text-sm lg:text-base text-gray-300">
            {item.title}
            <br />
            {item.title2}
          </p>

          {/* underline glow */}
          <div className="h-1 w-0 bg-green-500 mt-2 mx-auto transition-all duration-300 group-hover:w-12"></div>
        </div>
      ))}
    </div>
  );
};

export default NumberSection;
