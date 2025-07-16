"use client";

import React from "react";
import { motion } from "framer-motion";
import { RxChevronRight } from "react-icons/rx";

export function Layout250() {
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
    <section id="relume" className="spacing-section px-[5%] bg-[#e5ffe5]">
      <div className="container-custom">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="mb-12 md:mb-18 lg:mb-20"
        >
          <motion.div className="max-w-lg">
            <h2 className="font-bold text-neutral-darkest text-4xl leading-[1.2] md:text-5xl lg:text-4xl">
            Discover the seamless process of creating art together on GlowSketch. 
            </h2>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <motion.div 
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col"
          >
            <div className="mb-6 md:mb-8">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop&crop=center"
                alt="Artists collaborating together in creative workspace"
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
          
          <motion.div 
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col"
          >
            <div className="mb-6 md:mb-8">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=500&h=300&fit=crop&crop=center"
                alt="Team collaboration and invitation workspace"
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
          
          <motion.div 
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col"
          >
            <div className="mb-6 md:mb-8">
              <img
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&h=300&fit=crop&crop=center"
                alt="Creative digital art creation with vibrant colors and tools"
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
        </div>
      </div>
    </section>
  );
}