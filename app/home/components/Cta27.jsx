"use client";

import React from "react";
import { motion } from "framer-motion";

export function Cta27() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="relume" className="relative spacing-section px-[5%]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative z-10 container-custom max-w-lg text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="mb-5 text-2xl font-bold text-neutral-white md:mb-6 md:text-4xl lg:text-5xl font-unbounded"
        >
          Unleash Your Creative Potential
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-neutral-white md:text-md"
        >
          Join GlowSketch today and start collaborating on breathtaking digital
          murals with fellow artists.
        </motion.p>
        <motion.div
          variants={containerVariants}
          className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8"
        >
          {/* Primary Button with Glow Effect */}
          <motion.button
            variants={buttonVariants}
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
            variants={buttonVariants}
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
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}