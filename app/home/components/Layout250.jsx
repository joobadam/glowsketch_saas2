"use client";

import React from "react";
import { motion } from "framer-motion";
import { RxChevronRight } from "react-icons/rx";

export function Layout250() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  return (
    <section id="relume" className="spacing-section px-[5%] bg-[#CCFFCC]">
      <div className="container-custom">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-12 md:mb-18 lg:mb-20"
        >
          <motion.div variants={itemVariants} className="max-w-lg">
            <h2 className="font-unbounded font-bold text-neutral-darkest text-4xl leading-[1.2] md:text-5xl lg:text-6xl">
              Discover the seamless process of creating art together on
              GlowSketch.
            </h2>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12"
        >
          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image hover-lift"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl font-unbounded text-neutral-darkest">
              Join artists worldwide and bring your mural ideas to life.
            </h3>
            <p className="text-neutral-darker">With GlowSketch, collaboration is just a click away.</p>
            <div className="mt-6 flex gap-4 md:mt-8">
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-200 font-medium"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Start
                <RxChevronRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image hover-lift"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl font-unbounded text-neutral-darkest">
              Invite collaborators and unleash your creativity in real-time.
            </h3>
            <p className="text-neutral-darker">
              Easily send invites to friends or fellow artists to join your
              mural.
            </p>
            <div className="mt-6 flex gap-4 md:mt-8">
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-200 font-medium"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Invite
                <RxChevronRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image hover-lift"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl font-unbounded text-neutral-darkest">
              Create stunning murals together with intuitive tools and vibrant
              colors.
            </h3>
            <p className="text-neutral-darker">
              Experience the joy of collaborative art creation with
              user-friendly features.
            </p>
            <div className="mt-6 flex gap-4 md:mt-8">
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-200 font-medium"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Create
                <RxChevronRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}