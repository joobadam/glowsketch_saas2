"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export function Contact2() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

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
    <section id="contact" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="mx-auto mb-8 w-full max-w-lg text-center md:mb-10 lg:mb-12"
        >
          <p className="mb-3 font-semibold md:mb-4">Connect</p>
          <h2 className="mb-5 font-bold md:mb-6 text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            Get in Touch
          </h2>
          <p className="md:text-md">
            We're here to answer your questions about pricing.
          </p>
        </motion.div>

        <motion.form
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 grid-rows-[auto_auto] gap-6"
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="mb-2 font-medium">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="rounded-md border border-gray-300 px-4 py-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="mb-2 font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="rounded-md border border-gray-300 px-4 py-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="rounded-md border border-gray-300 px-4 py-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-2 font-medium">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                className="rounded-md border border-gray-300 px-4 py-2"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="topic" className="mb-2 font-medium">
              Select a Topic
            </label>
            <select
              id="topic"
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="rounded-md border border-gray-300 px-4 py-2"
            >
              <option value="">Choose one...</option>
              <option value="first-choice">First Choice</option>
              <option value="second-choice">Second Choice</option>
              <option value="third-choice">Third Choice</option>
            </select>
          </div>

          <div className="py-3 md:py-4">
            <label className="mb-3 block font-medium md:mb-4">
              What describes you best?
            </label>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3.5">
              {["Artist", "Business Owner", "Art Enthusiast", "Educator", "Other Inquiry", "Other"].map((role, idx) => (
                <label key={idx} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value={role}
                    checked={selectedRole === role}
                    onChange={() => setSelectedRole(role)}
                    className="h-4 w-4"
                  />
                  <span>{role}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message..."
              className="rounded-md border border-gray-300 px-4 py-2 min-h-[11.25rem] overflow-auto"
            ></textarea>
          </div>

          <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
            <input
              type="checkbox"
              id="terms"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
              className="h-4 w-4"
            />
            <label htmlFor="terms" className="cursor-pointer">
              I agree to the Terms
            </label>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 255, 0, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-8 py-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-semibold rounded-medium overflow-hidden transition-all duration-300 hover:shadow-2xl font-sans"
            >
              <span className="relative z-10">Submit</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}