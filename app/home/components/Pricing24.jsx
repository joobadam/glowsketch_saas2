"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiCheck } from "react-icons/bi";

export function Pricing24() {
  const [activeTab, setActiveTab] = useState("monthly");

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.2 + i * 0.1,
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

  const monthlyPlans = [
    {
      name: "Basic Plan",
      price: "$19",
      period: "/mo",
      icon: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
      features: [
        "Real-time collaboration tools",
        "Access to community features",
        "Basic support options"
      ]
    },
    {
      name: "Business Plan",
      price: "$29",
      period: "/mo",
      icon: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
      features: [
        "All Basic Plan features",
        "Advanced collaboration tools",
        "Priority support access",
        "Customizable workspace options"
      ]
    },
    {
      name: "Enterprise Plan",
      price: "$49",
      period: "/mo",
      icon: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
      features: [
        "Enhanced security features",
        "All Basic Plan features",
        "Real-time collaboration tools",
        "Access to community features",
        "All Business Plan features"
      ]
    }
  ];

  const yearlyPlans = [
    {
      name: "Basic Plan",
      price: "$190",
      period: "/year",
      icon: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
      features: [
        "Real-time collaboration tools",
        "Access to community features",
        "Basic support options",
        "2 months free"
      ]
    },
    {
      name: "Business Plan",
      price: "$290",
      period: "/year",
      icon: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
      features: [
        "All Basic Plan features",
        "Advanced collaboration tools",
        "Priority support access",
        "Customizable workspace options",
        "2 months free"
      ]
    },
    {
      name: "Enterprise Plan",
      price: "$490",
      period: "/year",
      icon: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
      features: [
        "Enhanced security features",
        "All Basic Plan features",
        "Real-time collaboration tools",
        "Access to community features",
        "All Business Plan features",
        "2 months free"
      ]
    }
  ];

  const plans = activeTab === "monthly" ? monthlyPlans : yearlyPlans;

  return (
    <section id="relume" className="spacing-section px-[5%]">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12"
        >
          <p className="mb-3 font-semibold md:mb-4 text-primary">Affordable</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl font-unbounded text-neutral-darkest">
            Pricing Plans
          </h1>
          <p className="md:text-md text-neutral-darker">
            Choose a plan that fits your creative needs.
          </p>
        </motion.div>

        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto mb-8 max-w-xs md:mb-10 lg:mb-12"
        >
          <div className="flex items-center justify-center rounded-full bg-neutral-light p-1">
            <button
              onClick={() => setActiveTab("monthly")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeTab === "monthly"
                  ? "bg-neutral-darkest text-white shadow-lg"
                  : "text-neutral-darker hover:text-neutral-darkest"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setActiveTab("yearly")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeTab === "yearly"
                  ? "bg-neutral-darkest text-white shadow-lg"
                  : "text-neutral-darker hover:text-neutral-darkest"
              }`}
            >
              Yearly
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              custom={index + 1}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative rounded-2xl border border-neutral-light bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-neutral-darkest">
                  {plan.name}
                </h3>
                <div className="mb-4 flex items-baseline">
                  <span className="text-4xl font-bold text-neutral-darkest">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-neutral-darker">
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <BiCheck className="mr-3 text-green-500" />
                      <span className="text-neutral-darker">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0, 255, 0, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full rounded-xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg"
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}