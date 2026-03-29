import React from "react";
import { motion } from "framer-motion";
import { services, Variants } from "./data/constants";

const ServicesSection = () => {
  return (
    <div id="services" className="container max-w-screen-xl mx-auto px-4 mt-40">
      <motion.div
        variants={Variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="pt-4 text-white font-bold text-4xl md:text-5xl lg:texxt-6xl text-center lg:text-left"
      >
        My Services
      </motion.div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-20">
        {services.map(({ id, title, src, description }) => (
          <motion.div
            variants={Variants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            key={id}
            className="border-2 border-green-500 backdrop-blur-sm bg-white/30 p-8 rounded-3xl"
          >
            <div className="flex">
              <img
                src={src}
                width={50}
                height={50}
                alt="service"
                className="w-10 h-10 object-contain block"
              />
              <h3 className="text-xl font-semibold text-white ml-5">{title}</h3>
            </div>
            <div className="space-y-2 break-all">
              <p className="leading-8 text-white">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
