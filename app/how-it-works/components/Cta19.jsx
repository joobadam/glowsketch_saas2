"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Cta19() {
  // Fade-up animation variants (Gallery10 pattern)
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
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-[#cdffcb] mx-auto">
      <div className="container mx-auto">
        <div className="w-full max-w-lg ">
          <motion.h2
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={cn(
              "mb-5 font-bold text-black",
              "text-3xl md:mb-6 md:text-5xl lg:text-6xl",
              "leading-tight tracking-tight"
            )}
          >
            Unleash Your Creative Potential
          </motion.h2>
          <motion.p
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={cn(
              "text-muted-foreground",
              "text-base md:text-lg",
              "leading-relaxed"
            )}
          >
            Join our vibrant community and bring your artistic visions to life
            in real-time collaboration.
          </motion.p>
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-6 flex flex-wrap gap-4 md:mt-8"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 255, 0, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-8 py-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-semibold rounded-medium overflow-hidden transition-all duration-300 hover:shadow-2xl font-sans"
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="relative z-10">Join</span>
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
              custom={4}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-neutral-darkest transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}