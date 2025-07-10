"use client";

import React from "react";
import { motion } from "framer-motion";

export function Gallery10() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
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

  const images = [
    "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
  ];

  return (
    <section id="relume" className="spacing-section px-[5%]">
      <div className="container-custom">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="mb-12 text-center md:mb-18 lg:mb-20"
        >
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl font-unbounded text-neutral-darkest">
            Art Showcase
          </h2>
          <p className="md:text-md text-neutral-darker">
            Explore stunning creations from our talented artists.
          </p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="gap-8 space-y-8 md:columns-3"
        >
          {images.map((src, index) => (
            <motion.a 
              key={index}
              href="#" 
              className="block w-full group"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={src}
                alt={`Relume placeholder image ${index + 1}`}
                className="size-full rounded-image object-cover transition-all duration-300 group-hover:shadow-lg"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}