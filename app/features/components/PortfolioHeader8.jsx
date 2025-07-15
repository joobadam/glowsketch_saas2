"use client";

import React from "react";
import { Link } from "next-view-transitions";
import { motion } from "framer-motion";

export function PortfolioHeader8() {
  // Fade-up animation variants (copied from Gallery10)
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.3 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section id="relume" className="relative px-[5%]">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2l0eXNjYXBlfGVufDB8fDB8fHww"
          alt="Relume placeholder image 1"
          className="size-full object-cover"
        />
        <span className="absolute inset-0 z-10 bg-black/50" />
      </div>
      <div className="relative z-10 flex min-h-svh items-end justify-center">
        <div className="container">
          <div className="grid grid-cols-1 items-start gap-12 py-16 md:grid-cols-[1.5fr_1fr] md:items-end md:py-24 lg:gap-x-20 lg:py-28">
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h1
                custom={1}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="mb-5 font-bold text-white md:mb-6 text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl  leading-tight tracking-tight"
              >
                Vibrant Cityscape
              </motion.h1>
              <motion.p
                custom={2}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="text-white/90 text-base md:text-lg leading-relaxed"
              >
                Explore the dynamic fusion of creativity and collaboration in
                our featured digital murals.
              </motion.p>
              <motion.div
                custom={3}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="mt-5 flex flex-wrap gap-2 md:mt-6"
              >
                <a
                  href="#"
                  className="relative group px-8 py-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-semibold rounded-medium overflow-hidden transition-all duration-300 hover:shadow-2xl font-sans"
                >
                  Digital Art
                </a>
                <a
                  href="#"
                  className="relative group px-8 py-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-semibold rounded-medium overflow-hidden transition-all duration-300 hover:shadow-2xl font-sans"
                >
                  Collaboration Hub
                </a>
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group px-8 py-4 bg-transparent text-neutral-white font-semibold rounded-xl border-2 border-neutral-white overflow-hidden transition-all duration-300 hover:bg-neutral-white hover:text-neutral-darkest"
                >
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-neutral-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div
              custom={4}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 gap-8"
            >
              <div>
                <h3 className="mb-2 font-bold text-white text-base md:text-xl leading-[1.4]">
                  Artist
                </h3>
                <p className="text-white/80">Jane Doe</p>
              </div>
              <div>
                <h3 className="mb-2 font-bold text-white text-base md:text-xl leading-[1.4]">
                  2025
                </h3>
                <p className="text-white/80">March 2025</p>
              </div>
              <div>
                <h3 className="mb-2 font-bold text-white text-base md:text-xl leading-[1.4]">
                  Creator
                </h3>
                <p className="text-white/80">Lead Artist</p>
              </div>
              <div>
                <h3 className="mb-2 font-bold text-white text-base md:text-xl leading-[1.4]">
                  Gallery
                </h3>
                <a 
                  href="#" 
                  className="text-white/80 underline underline-offset-4 hover:text-white transition-colors"
                >
                  www.glowsketch.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}