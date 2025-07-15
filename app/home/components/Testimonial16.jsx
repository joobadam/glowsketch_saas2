"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BiSolidStar } from "react-icons/bi";
import { FaCirclePlay } from "react-icons/fa6";
import { ChevronLeft, ChevronRight } from "lucide-react";

const useTestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = 2;

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const dotClassName = (index) => {
    return `mx-[3px] inline-block size-2 rounded-full transition-colors duration-200 cursor-pointer ${
      current === index ? "bg-primary" : "bg-neutral-light"
    }`;
  };

  return { current, handleDotClick, nextSlide, prevSlide, dotClassName };
};

export function Testimonial16() {
  const carousel = useTestimonialCarousel();

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

  const testimonials = [
    {
      quote: "GlowSketch has transformed my artistic process, allowing me to collaborate seamlessly with fellow artists across the globe. The real-time interaction is truly inspiring!",
      author: "Alice Johnson",
      role: "Digital Artist, Freelance",
      logo: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      video: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg"
    },
    {
      quote: "The collaborative features in GlowSketch have revolutionized how I work with my team. Creating art together has never been this intuitive and enjoyable!",
      author: "Marcus Chen", 
      role: "Creative Director, Studio",
      logo: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg",
      video: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg"
    }
  ];

  return (
    <section
      id="relume"
      className="overflow-hidden spacing-section px-[5%] bg-[#e5ffe5]"
    >
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="relative"
        >
          <div className="relative pt-20 md:pt-0 md:pb-20">
            <div className="overflow-hidden">
              <motion.div 
                className="flex transition-transform duration-500 ease-out"
                animate={{ x: `-${carousel.current * 100}%` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <motion.div 
                      custom={index}
                      variants={fadeUpVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      className="grid w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-x-20"
                    >
                      <div className="order-last md:order-first">
                        <motion.button 
                          className="relative flex w-full items-center justify-center overflow-hidden rounded-image group"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src={testimonial.video}
                            alt={`Testimonial video ${index + 1}`}
                            className="size-full object-cover"
                          />
                          <span className="absolute inset-0 z-10 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <FaCirclePlay className="absolute z-20 size-16 text-white" />
                          </motion.div>
                        </motion.button>
                      </div>
                      
                      <motion.div custom={index + 2} variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="flex flex-col items-start">
                        <div className="mb-6 flex md:mb-8">
                          {[...Array(5)].map((_, starIndex) => (
                            <BiSolidStar key={starIndex} className="size-6 text-primary" />
                          ))}
                        </div>
                        <blockquote className="text-xl font-bold md:text-2xl font-unbounded text-neutral-darkest">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="mt-6 flex flex-nowrap items-center gap-5 md:mt-8">
                          <div>
                            <p className="font-semibold text-neutral-darkest">{testimonial.author}</p>
                            <p className="text-neutral-darker">{testimonial.role}</p>
                          </div>
                          <div className="mx-4 w-px self-stretch bg-neutral-light sm:mx-0" />
                          <div>
                            <img
                              src={testimonial.logo}
                              alt="Company logo"
                              className="max-h-12"
                            />
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            <div className="absolute top-0 flex w-full items-start justify-between md:top-auto md:bottom-0 md:items-end">
              <div className="mt-2.5 flex w-full items-start justify-start md:mt-0 md:mb-2.5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => carousel.handleDotClick(index)}
                    className={carousel.dotClassName(index)}
                  />
                ))}
              </div>
              <div className="flex items-end justify-end gap-2 md:gap-4">
                <motion.button
                  onClick={carousel.prevSlide}
                  className="flex size-12 items-center justify-center rounded-full border border-neutral-light bg-neutral-white hover:bg-neutral-lighter transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="size-5 text-neutral-darker" />
                </motion.button>
                <motion.button
                  onClick={carousel.nextSlide}
                  className="flex size-12 items-center justify-center rounded-full border border-neutral-light bg-neutral-white hover:bg-neutral-lighter transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="size-5 text-neutral-darker" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}