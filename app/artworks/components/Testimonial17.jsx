"use client";

import React from "react";
import { motion } from "framer-motion";
import { BiSolidStar } from "react-icons/bi";

export function Testimonial17() {
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
    <section id="artist-testimonials" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#e5ffe5]">
      <div className="container mx-auto">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20"
        >
          <h2 className="mb-5 font-bold md:mb-6 text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            Artist Testimonials
          </h2>
          <p className="md:text-md">
            Collaborating on GlowSketch transformed my creative process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[{
            quote: "GlowSketch allowed me to connect with artists worldwide!",
            name: "Emma Carter",
            role: "Digital Artist, Freelance"
          }, {
            quote: "The platform is a game-changer for collaborative art!",
            name: "Liam Johnson",
            role: "Visual Artist, Studio"
          }, {
            quote: "Creating with others has never been this easy!",
            name: "Sophia Lee",
            role: "Art Director, Agency"
          }].map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex w-full flex-col items-start justify-between rounded-2xl border border-gray-200 shadow-md p-6 md:p-8"
            >
              <div className="mb-5 md:mb-6">
                <div className="mb-5 flex md:mb-6">
                  {Array(5).fill(0).map((_, i) => (
                    <BiSolidStar key={i} className="mr-1 size-6" />
                  ))}
                </div>
                <blockquote className="md:text-md">"{item.quote}"</blockquote>
              </div>
              <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar"
                  className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p>{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}