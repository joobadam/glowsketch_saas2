"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Particles } from "@/components/ui/particles";
import { motion } from "framer-motion";

export function Header49() {
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
    <section id="relume" className="mx-auto px-[5%] py-16 md:py-24 lg:py-28 bg-[#00ff00] min-h-[80vh] xl:min-h-[30vh] relative overflow-hidden">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={800}
        color="#000"
        refresh
      />
      <div className="container relative z-10 mx-auto">
        <div className="grid grid-cols-1 items-start gap-x-40 gap-y-5 md:grid-cols-2 lg:gap-x-20 lg:gap-y-16">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className={cn(
                "font-bold text-black",
                "text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl",
                "leading-tight tracking-tight "
              )}
            >
              Collaboration Made Easy
            </motion.h1>
          </motion.div>
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className={cn(
                "text-muted-foreground",
                "text-base md:text-lg",
                "leading-relaxed"
              )}
            >
              At GlowSketch, artists unite in a vibrant digital space to create
              stunning murals together. Our intuitive platform allows for
              real-time collaboration, making every brushstroke a shared
              experience.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}