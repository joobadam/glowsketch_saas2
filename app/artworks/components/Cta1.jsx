"use client";

import React from "react";
import { motion } from "framer-motion";

export function Cta1() {
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
    <section id="creative-cta" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#cdffcb]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headerVariants}
          >
            <h2 className="mb-5 font-bold md:mb-6 text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
              Unleash Your Creative Potential
            </h2>
            <p className="md:text-md">
              Join a vibrant community of artists and start your mural today—creativity awaits!
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0, 255, 0, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative group px-8 py-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-semibold rounded-medium overflow-hidden transition-all duration-300 hover:shadow-2xl font-sans"
              >
                <span className="relative z-10">Start Creating</span>
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
                <span className="relative z-10">Explore</span>
                <div className="absolute inset-0 bg-neutral-darkest transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1702598265713-ede443f5d389?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full rounded-2xl object-cover"
              alt="Creative artwork preview"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}