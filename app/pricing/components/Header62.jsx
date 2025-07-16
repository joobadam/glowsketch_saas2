"use client";

import React from "react";
import { motion } from "framer-motion";
import { Particles } from "@/components/ui/particles";

export function Header62() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.2 + i * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section id="choose-plan" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#00ff00]">
           <div className="pointer-events-none absolute inset-0 z-0">
        <Particles
          className="w-full h-full"
          quantity={100}
          ease={800}
          color="#000"
          refresh
        />
      </div>
      <div className="container max-w-lg text-center mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <p className="mb-3 font-semibold md:mb-4">Collaborate</p>
          <h1 className="mb-5 font-bold md:mb-6 text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            Choose Your Plan
          </h1>
          <p className="md:text-md">
            Explore our flexible pricing options designed to elevate your creative
            journey and collaboration.
          </p>
        </motion.div>

        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 255, 0, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-8 py-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-semibold rounded-medium overflow-hidden transition-all duration-300 hover:shadow-2xl font-sans"
          >
            <span className="relative z-10">Start</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-8 py-4 bg-transparent text-neutral-darkest font-semibold rounded-medium border-2 border-neutral-darkest overflow-hidden transition-all duration-300 hover:bg-neutral-darkest hover:text-white font-sans"
          >
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-neutral-darkest transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}