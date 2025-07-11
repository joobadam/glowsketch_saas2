"use client";

import React from "react";
import { motion } from "framer-motion";

export function Gallery10() {
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

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const images = [
    "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=500&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=400&h=500&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=500&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=500&fit=crop&crop=center"
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
        
        <div className="gap-8 space-y-8 md:columns-3">
          {images.map((src, index) => (
            <motion.a 
              key={index}
              href="#" 
              className="block w-full group"
              custom={index}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={src}
                alt={`Art showcase image ${index + 1}`}
                className="size-full rounded-image object-cover transition-all duration-300 group-hover:shadow-lg"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}