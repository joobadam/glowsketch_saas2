"use client";

import React from "react";
import { motion } from "framer-motion";
import { WavyBackground } from "../../../components/ui/wavy-background";

export function Header76() {
  return (
    <section
      id="relume"
      className="bg-[#00ff00] grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0 relative overflow-hidden min-h-screen"
    >
      <div className="absolute inset-0 z-0">
        <WavyBackground
          colors={["#FFFFFF", "#98FB98", "#7FFF00"]}
          waveWidth={150}
          waveOpacity={0.2}
          speed="fast"
          containerClassName="h-full w-full"
          backgroundFill="transparent"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-[5%] max-w-[40rem] justify-self-start lg:mr-20 lg:ml-[5vw] lg:justify-self-end relative z-10"
      >
        <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl font-unbounded text-neutral-darkest">
          GlowSketch
        </h1>
        <p className="md:text-md text-neutral-darker">
          Unleash your imagination and collaborate with artists worldwide.
          Create stunning digital murals in real-time and bring your visions to
          life.
        </p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="mt-6 flex flex-wrap gap-4 md:mt-8"
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
            className="relative group px-8 py-4 bg-transparent text-neutral-darkest font-semibold rounded-xl border-2 border-neutral-darkest overflow-hidden transition-all duration-300 hover:bg-neutral-darkest hover:text-white"
          >
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-neutral-darkest transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.button>
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="h-[30rem] overflow-hidden pr-[5vw] pl-[5vw] md:h-[40rem] lg:h-screen lg:pl-0 relative z-10"
      >
        <div className="grid w-full grid-cols-2 gap-x-4">
          <div className="-mt-[120%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center">
            {Array.from({ length: 6 }, (_, index) => (
              <div key={`left-${index}`} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full pt-[120%]">
                  <img
                    className="absolute inset-0 size-full rounded-image object-cover"
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt={`Relume placeholder image ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid size-full animate-loop-vertically grid-cols-1 gap-4">
            {Array.from({ length: 6 }, (_, index) => (
              <div key={`right-${index}`} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full pt-[120%]">
                  <img
                    className="absolute inset-0 size-full rounded-image object-cover"
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt={`Relume placeholder image ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}