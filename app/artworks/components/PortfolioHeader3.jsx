"use client";

import React from "react";
import { motion } from "framer-motion";
import { Particles } from "@/components/ui/particles";

export function PortfolioHeader3() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#00ff00] relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Particles
          className="w-full h-full"
          quantity={100}
          ease={800}
          color="#000"
          refresh
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20"
        >
          <motion.h1
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-5 font-bold text-black md:mb-6 text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight tracking-tight"
          >
            Vibrant Collaborative Art
          </motion.h1>
          <motion.p
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-gray-600 text-base md:text-lg leading-relaxed"
          >
            Explore a diverse collection of stunning digital murals created by
            talented artists from around the world.
          </motion.p>
        </motion.div>

        <motion.div
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mt-6 flex flex-wrap gap-4 md:mt-8 justify-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 255, 0, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-8 py-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-semibold rounded-medium overflow-hidden transition-all duration-300 hover:shadow-2xl font-sans"
          >
            <span className="relative z-10">Digital Mural</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 255, 0, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-8 py-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-semibold rounded-medium overflow-hidden transition-all duration-300 hover:shadow-2xl font-sans"
          >
            <span className="relative z-10">Art Collaboration</span>
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
            <span className="relative z-10">Creative Expression</span>
            <div className="absolute inset-0 bg-neutral-darkest transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.button>
        </motion.div>

        <motion.div
          custom={4}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mt-12"
        >
          <motion.img
            custom={5}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            src="https://images.unsplash.com/photo-1545381550-40a2ebad6135?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Relume placeholder image 1"
            className="w-full rounded-lg shadow-sm object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}