"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiCheck } from "react-icons/bi";

export function Pricing24() {
  const [activeTab, setActiveTab] = useState("monthly");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
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
      price: "$180",
      period: "/yr",
      savings: "Save 20%",
      icon: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
      features: [
        "Advanced collaboration tools",
        "Priority support access",
        "Customizable workspace options"
      ]
    },
    {
      name: "Business Plan",
      price: "$280",
      period: "/yr",
      savings: "Save 20%",
      icon: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
      features: [
        "Enhanced security features",
        "All Business Plan features",
        "Dedicated account manager",
        "Custom integrations available"
      ]
    },
    {
      name: "Enterprise Plan",
      price: "$480",
      period: "/yr",
      savings: "Save 20%",
      icon: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
      features: [
        "All features included",
        "Dedicated support team",
        "Custom integrations available",
        "Enhanced security features",
        "Priority access to updates"
      ]
    }
  ];

  const currentPlans = activeTab === "monthly" ? monthlyPlans : yearlyPlans;

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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Custom Tabs */}
          <div className="mx-auto mb-12 w-fit">
            <div className="inline-flex items-center rounded-medium bg-neutral-lighter p-1">
              <button
                onClick={() => setActiveTab("monthly")}
                className={`px-6 py-2 rounded-small text-sm font-medium transition-all duration-200 ${
                  activeTab === "monthly"
                    ? "bg-neutral-white text-neutral-darkest shadow-sm"
                    : "text-neutral-dark hover:text-neutral-darkest"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setActiveTab("yearly")}
                className={`px-6 py-2 rounded-small text-sm font-medium transition-all duration-200 ${
                  activeTab === "yearly"
                    ? "bg-neutral-white text-neutral-darkest shadow-sm"
                    : "text-neutral-dark hover:text-neutral-darkest"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-3"
          >
            {currentPlans.map((plan, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                variants={itemVariants}
                className="card hover-lift flex h-full flex-col justify-between"
              >
                <div>
                  <div className="mb-4 flex flex-col items-end justify-end">
                    <img
                      src={plan.icon}
                      alt="Plan icon"
                      className="size-12"
                    />
                  </div>
                  <h2 className="mb-2 text-md leading-[1.4] font-bold md:text-xl font-unbounded text-neutral-darkest">
                    {plan.name}
                  </h2>
                  <div className="flex items-baseline">
                    <h3 className="text-2xl font-bold md:text-4xl lg:text-5xl font-unbounded text-neutral-darkest">
                      {plan.price}
                    </h3>
                    <span className="text-xl text-neutral-dark">{plan.period}</span>
                  </div>
                  {plan.savings && (
                    <p className="mt-2 font-medium text-primary">{plan.savings}</p>
                  )}
                  <div className="separator" />
                  <p className="text-neutral-darker">Includes:</p>
                  <div className="mt-4 mb-8 grid grid-cols-1 gap-y-4 py-2">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex self-start">
                        <div className="mr-4 flex-none self-start">
                          <BiCheck className="size-6 text-primary" />
                        </div>
                        <p className="text-neutral-darker">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <motion.button
                    className="relative group w-full px-8 py-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(0, 255, 0, 0.5)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}