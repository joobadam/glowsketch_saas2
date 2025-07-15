"use client";

import React, { Fragment } from "react";
import { motion } from "framer-motion";

export function Content8() {
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
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#e5ffe5]"
    >
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          custom={0}
          className="mb-16 md:mb-[5.5rem] lg:mb-24"
        >
          <div className="mx-auto max-w-lg">
            <motion.h2
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="mb-5 font-bold text-black md:mb-6 text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight tracking-tight"
            >
              Explore Our Collaborative Art
            </motion.h2>
            <div className="space-y-6">
              <motion.p
                custom={2}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="text-gray-600 text-base md:text-lg leading-relaxed"
              >
                Morbi sed imperdiet in ipsum, adipiscing elit dui lectus.
                Tellus id scelerisque est ultricies ultricies. Duis est sit
                sed leo nisl, blandit elit sagittis. Quisque tristique
                consequat quam sed. Nisl at scelerisque amet nulla purus
                habitasse.
              </motion.p>
              <motion.p
                custom={3}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="text-gray-600 text-base md:text-lg leading-relaxed"
              >
                Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
                condimentum mi massa. In tincidunt pharetra consectetur sed
                duis facilisis metus. Etiam egestas in nec sed et. Quis
                lobortis at sit dictum eget nibh tortor commodo cursus.
              </motion.p>
              <motion.p
                custom={4}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="text-gray-600 text-base md:text-lg leading-relaxed"
              >
                Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
                aliquet. Nam elementum urna nisi aliquet erat dolor enim.
                Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget
                consectetur dictum. Donec posuere pharetra odio consequat
                scelerisque et, nunc tortor. Nulla adipiscing erat a erat.
                Condimentum lorem posuere gravida enim posuere cursus diam.
              </motion.p>
            </div>
          </div>
        </motion.div>
        <motion.div
          custom={5}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1692650759290-0a67c8e0a527?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q29sbGFib3JhdGl2ZSUyMEFydHxlbnwwfHwwfHx8MA%3D%3D"
            className="aspect-video w-full rounded-lg object-cover shadow-sm"
            alt="Relume placeholder image"
          />
        </motion.div>
      </div>
    </section>
  );
}
