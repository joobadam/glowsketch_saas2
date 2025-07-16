"use client";

import React from "react";
import { motion } from "framer-motion";
import { BiCheck } from "react-icons/bi";

export function Pricing22() {
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
    <section id="pricing-comparison" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20"
        >
          <p className="mb-3 font-semibold md:mb-4">Plans</p>
          <h1 className="mb-5 font-bold md:mb-6 text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            Pricing Options
          </h1>
          <p className="md:text-md">
            Choose the perfect plan for your creative journey.
          </p>
        </motion.div>

        <div className="w-full">
          <div className="grid grid-cols-3 gap-x-4 bg-white md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-x-8">
            <div className="hidden md:block" />
            {[
              { title: "Basic", price: "$19/mo", desc: "Ideal for individual artists." },
              { title: "Business", price: "$29/mo", desc: "Perfect for small teams." },
              { title: "Enterprise", price: "$49/mo", desc: "For large organizations and collaborations." }
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex h-full flex-col justify-between text-center"
              >
                <div>
                  <h2 className="text-sm leading-[1.4] font-bold md:text-xl ">
                    {plan.title}
                  </h2>
                  <p className="my-3 text-2xl leading-[1.2] font-bold sm:text-xl md:my-4 md:text-4xl lg:text-6xl">
                    {plan.price}
                  </p>
                  <p>{plan.desc}</p>
                </div>
                <div className="mt-6 md:mt-8">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(0, 255, 0, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group w-full px-8 py-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-semibold rounded-medium overflow-hidden transition-all duration-300 hover:shadow-2xl font-sans"
                  >
                    <span className="relative z-10">Get started</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <h3 className="mt-8 py-5 text-md leading-[1.4] font-bold md:text-xl">
            User Accounts
          </h3>
          {[
            ["Number of user accounts", ["10", "25", "Unlimited"]],
            ["Storage Space", [<BiCheck key="0" />, <BiCheck key="1" />, <BiCheck key="2" />]],
            ["5 GB of storage", [<BiCheck key="0" />, <BiCheck key="1" />, <BiCheck key="2" />]],
            ["20 GB of storage", ["", <BiCheck key="1" />, <BiCheck key="2" />]],
            ["Unlimited storage space", ["", "", <BiCheck key="2" />]],
          ].map(([label, values], idx) => (
            <div key={idx} className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
              <p className="col-span-3 p-4 md:col-span-1 md:px-6 md:py-4">{label}</p>
              {values.map((val, i) => (
                <p key={i} className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  {val}
                </p>
              ))}
            </div>
          ))}

          <h3 className="mt-8 py-5 text-md leading-[1.4] font-bold md:text-xl">
            Collaboration Tools
          </h3>
          {[
            ["Basic collaboration features", ["Limited", "Advanced", "Full access"]],
            ["Customer Support", [<BiCheck key="0" />, <BiCheck key="1" />, <BiCheck key="2" />]],
            ["Email support only", [<BiCheck key="0" />, <BiCheck key="1" />, <BiCheck key="2" />]],
            ["Priority email support", ["", <BiCheck key="1" />, <BiCheck key="2" />]],
            ["24/7 dedicated support", ["", "", <BiCheck key="2" />]],
          ].map(([label, values], idx) => (
            <div key={idx} className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
              <p className="col-span-3 p-4 md:col-span-1 md:px-6 md:py-4">{label}</p>
              {values.map((val, i) => (
                <p key={i} className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  {val}
                </p>
              ))}
            </div>
          ))}

          <h3 className="mt-8 py-5 text-md leading-[1.4] font-bold md:text-xl">
            Additional Features
          </h3>
          {[
            ["Basic analytics tools", ["Limited", "Advanced", "Comprehensive"]],
            ["Custom branding options", [<BiCheck key="0" />, <BiCheck key="1" />, <BiCheck key="2" />]],
            ["Access to premium features", [<BiCheck key="0" />, <BiCheck key="1" />, <BiCheck key="2" />]],
            ["Exclusive community access", ["", <BiCheck key="1" />, <BiCheck key="2" />]],
            ["Monthly webinars and workshops", ["", "", <BiCheck key="2" />]],
          ].map(([label, values], idx) => (
            <div key={idx} className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
              <p className="col-span-3 p-4 md:col-span-1 md:px-6 md:py-4">{label}</p>
              {values.map((val, i) => (
                <p key={i} className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  {val}
                </p>
              ))}
            </div>
          ))}

          <div className="mt-8 grid grid-cols-3 gap-x-4 bg-white md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-x-8">
            <div className="hidden md:block" />
            {[0, 1, 2].map((i) => (
              <motion.button
                key={i}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0, 255, 0, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative group w-full px-8 py-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-semibold rounded-medium overflow-hidden transition-all duration-300 hover:shadow-2xl font-sans"
              >
                <span className="relative z-10">Get started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}