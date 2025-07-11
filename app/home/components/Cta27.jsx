"use client";

import React from "react";
import { motion } from "framer-motion";

export function Cta27() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.3 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section id="relume" className="relative spacing-section px-[5%]">
      <motion.div
        custom={0}
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 container-custom max-w-lg text-center"
      >
        <motion.h2
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-5 text-2xl font-bold text-neutral-white md:mb-6 md:text-4xl lg:text-5xl font-unbounded"
        >
          Unleash Your Creative Potential
        </motion.h2>
        <motion.p
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-neutral-white md:text-md"
        >
          Join GlowSketch today and start collaborating on breathtaking digital
          murals with fellow artists.
        </motion.p>
        <motion.div
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8"
        >
          {/* Primary Button with Glow Effect */}
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 255, 0, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-8 py-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
          >
            <span className="relative z-10">Start Creating</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>

          {/* Secondary Button with Border Animation */}
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-8 py-4 bg-transparent text-neutral-white font-semibold rounded-xl border-2 border-neutral-white overflow-hidden transition-all duration-300 hover:bg-neutral-white hover:text-neutral-darkest"
          >
            <span className="relative z-10">Sign Up</span>
            <div className="absolute inset-0 bg-neutral-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.button>
        </motion.div>
      </motion.div>
      
      <div className="absolute inset-0 z-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1689607810126-68dc3eed28f8?q=80&w=1270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="size-full object-cover"
          alt="Digital art background"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
    </section>
  );
}