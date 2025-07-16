"use client";

import React from "react";
import { motion } from "framer-motion";
import { RxChevronRight } from "react-icons/rx";

export function Portfolio8() {
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
    <section id="portfolio" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#e5ffe5]">
      <div className="container mx-auto">

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20"
        >
          <h2 className="mb-5 font-bold md:mb-6 text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            Explore Our Digital Art
          </h2>
          <p className="md:text-md">
            Discover vibrant murals created by talented artists.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:gap-x-12">
          {[{
            title: "Cityscape Dreams",
            desc: "A stunning representation of urban life through collaborative creativity.",
            tags: ["Urban Art", "Collaboration", "Digital Mural"]
          }, {
            title: "Nature's Palette",
            desc: "A colorful journey through the beauty of nature and art.",
            tags: ["Nature Art", "Creative Flow", "Collaborative Work"]
          }].map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="rounded-2xl border border-gray-200 shadow-md overflow-hidden"
            >
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1570582112884-6f115e259152?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENpdHlzY2FwZSUyMERyZWFtc3xlbnwwfHwwfHx8MA%3D%3D"
                  alt="Placeholder"
                  className="w-full object-cover"
                />
              </a>
              <div className="px-5 py-6 sm:px-6">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">
                  <a href="#">{item.title}</a>
                </h3>
                <p>{item.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                      <a href="#">{tag}</a>
                    </span>
                  ))}
                </div>
                <div className="mt-5 md:mt-6">
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-200 font-medium"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    View project
                    <RxChevronRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}