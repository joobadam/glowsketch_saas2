"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Layout251() {
  // Fade-up animation variants (copied from Header76)
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
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#e5ffe5] mx-auto">
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className={cn(
                "mb-3 font-semibold text-sm md:mb-4",
                "text-muted-foreground uppercase tracking-wide"
              )}
            >
              Create
            </motion.p>
            <motion.h2
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className={cn(
                "font-bold text-black",
                "text-3xl md:text-5xl lg:text-6xl",
                "leading-tight tracking-tight"
              )}
            >
              Discover How to Collaborate on Art
            </motion.h2>
          </motion.div>
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              custom={4}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className={cn(
                "text-muted-foreground",
                "text-base md:text-lg",
                "leading-relaxed"
              )}
            >
              GlowSketch empowers artists to create together in real-time. With
              intuitive tools and a vibrant interface, you can unleash your
              creativity alongside others. Join a community where every stroke
              counts and collaboration knows no bounds.
            </motion.p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              custom={5 + i}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="mb-6 md:mb-8">
                <img
                  src={i === 0 ? "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" : 
                       i === 1 ? "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" :
                       "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"}
                  alt={i === 0 ? "User account creation and registration" : 
                       i === 1 ? "Team collaboration and online meeting" : 
                       "Digital art creation and drawing tools"}
                  className={cn(
                    "w-full h-auto object-cover",
                    "rounded-lg shadow-sm"
                  )}
                />
              </div>
              <h3 className={cn(
                "mb-5 font-bold text-black",
                "text-2xl md:mb-6 md:text-3xl lg:text-4xl",
                "leading-[1.3]"
              )}>
                {i === 0 && "Step 1: Create Your Account"}
                {i === 1 && "Step 2: Join a Collaborative Session"}
                {i === 2 && "Step 3: Start Creating Together"}
              </h3>
              <p className={cn(
                "text-muted-foreground",
                "text-base leading-relaxed"
              )}>
                {i === 0 && "Sign up easily and start your artistic journey."}
                {i === 1 && "Connect with fellow artists and share ideas."}
                {i === 2 && "Use our tools to bring your vision to life."}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          custom={8}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 255, 0, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-8 py-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-semibold rounded-medium overflow-hidden transition-all duration-300 hover:shadow-2xl font-sans"
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
          >
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-neutral-darkest transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}