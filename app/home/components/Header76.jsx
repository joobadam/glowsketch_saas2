"use client";

import React from "react";
import { motion } from "framer-motion";
import { Particles } from "../../../components/ui/particles";

export function Header76() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=500&fit=crop&crop=center", // Friends partying together
    "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=500&fit=crop&crop=center", // Group of friends celebrating
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=500&fit=crop&crop=center", // Social gathering at restaurant
    "https://images.unsplash.com/photo-1543269664-7eef42226a21?w=400&h=500&fit=crop&crop=center", // Young people socializing
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=500&fit=crop&crop=center", // Friends having dinner party
    "https://images.unsplash.com/photo-1556035511-3168381ea4d4?w=400&h=500&fit=crop&crop=center", // People enjoying social event
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=500&fit=crop&crop=center", // Friends laughing together
    "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400&h=500&fit=crop&crop=center", // Group of friends hanging out
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=500&fit=crop&crop=center", // Social party atmosphere
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&crop=center", // Friends celebrating together
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=500&fit=crop&crop=center", // People in social setting
    "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=400&h=500&fit=crop&crop=center", // Community gathering
  ];

  const galleryAltTexts = [
    "Friends partying and celebrating together",
    "Group of friends enjoying social celebration",
    "Social gathering at restaurant with friends",
    "Young people socializing and having fun",
    "Friends having dinner party together",
    "People enjoying social event and community",
    "Friends laughing and bonding together",
    "Group of friends hanging out socially",
    "Social party atmosphere with people",
    "Friends celebrating special moments together",
    "People connecting in social setting",
    "Community gathering and friendship",
  ];

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
    <section
      id="relume"
      className="grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0 relative overflow-hidden min-h-screen bg-[#00ff00]"
    >
      {/* Particles wrapper - pointer-events-none a hover probléma megoldásához */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Particles
          className="w-full h-full"
          quantity={100}
          ease={800}
          color="#000"
          refresh
        />
      </div>

      <motion.div
        custom={0}
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        className="mx-[5%] max-w-[40rem] justify-self-start lg:mr-20 lg:ml-[5vw] lg:justify-self-end relative z-10"
      >
        <motion.h1
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="font-main mb-5 text-4xl font-bold md:mb-6 md:text-7xl lg:text-6xl capitalize font-heading text-neutral-darkest"
        >
          GlowSketch
        </motion.h1>
        <motion.p
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="md:text-md font-sans text-neutral-darker"
        >
          Unleash your imagination and collaborate with artists worldwide.
          Create stunning digital murals in real-time and bring your visions to
          life.
        </motion.p>
        <motion.div
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mt-6 flex flex-wrap gap-4 md:mt-8"
        >
          {/* Primary Button with Glow Effect */}
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
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-neutral-darkest transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        custom={4}
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        className="h-[30rem] overflow-hidden pr-[5vw] pl-[5vw] md:h-[40rem] lg:h-screen lg:pl-0 relative z-10"
      >
        <div className="grid w-full grid-cols-2 gap-x-4">
          <div className="-mt-[120%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center">
            {Array.from({ length: 6 }, (_, index) => (
              <div
                key={`left-${index}`}
                className="grid size-full grid-cols-1 gap-4"
              >
                <div className="relative w-full pt-[120%]">
                  <img
                    className="absolute inset-0 size-full rounded-image object-cover"
                    src={galleryImages[index]}
                    alt={galleryAltTexts[index]}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid size-full animate-loop-vertically grid-cols-1 gap-4">
            {Array.from({ length: 6 }, (_, index) => (
              <div
                key={`right-${index}`}
                className="grid size-full grid-cols-1 gap-4"
              >
                <div className="relative w-full pt-[120%]">
                  <img
                    className="absolute inset-0 size-full rounded-image object-cover"
                    src={galleryImages[index + 6]}
                    alt={galleryAltTexts[index + 6]}
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