"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { motion } from "framer-motion";

export function Testimonial13() {
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
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#e5ffe5]">
      <div className="container">
        <div className="grid w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-x-20">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="order-last md:order-first"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW58ZW58MHx8MHx8fDA%3D%3D"
              alt="Testimonial image 1"
              className="aspect-square w-full rounded-lg object-cover shadow-sm"
            />
          </motion.div>
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col items-start"
          >
            <div className="mb-6 flex md:mb-8">
              <motion.span custom={2} variants={fadeUpVariants} initial="hidden" animate="visible"><BiSolidStar className="size-6 text-[#01ff00]" /></motion.span>
              <motion.span custom={3} variants={fadeUpVariants} initial="hidden" animate="visible"><BiSolidStar className="size-6 text-[#01ff00]" /></motion.span>
              <motion.span custom={4} variants={fadeUpVariants} initial="hidden" animate="visible"><BiSolidStar className="size-6 text-[#01ff00]" /></motion.span>
              <motion.span custom={5} variants={fadeUpVariants} initial="hidden" animate="visible"><BiSolidStar className="size-6 text-[#01ff00]" /></motion.span>
              <motion.span custom={6} variants={fadeUpVariants} initial="hidden" animate="visible"><BiSolidStar className="size-6 text-[#01ff00]" /></motion.span>
            </div>
            <motion.blockquote
              custom={7}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="text-xl font-bold text-black md:text-2xl leading-relaxed"
            >
              "Collaborating on GlowSketch has transformed my artistic process.
              The energy and creativity shared among artists is truly
              inspiring!"
            </motion.blockquote>
            <motion.div
              custom={8}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="mt-6 flex flex-nowrap items-center gap-5 md:mt-8"
            >
              <div>
                <p className="font-semibold text-black">Alex Johnson</p>
                <p className="text-gray-600">Artist, Freelance</p>
              </div>
              <div className="mx-4 w-px self-stretch bg-gray-300 sm:mx-0" />
              <div>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                  alt="Webflow logo 1"
                  className="max-h-12"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}