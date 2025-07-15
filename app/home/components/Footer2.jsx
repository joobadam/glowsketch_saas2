"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { Particles } from "@/components/ui/particles";

const useNewsletterForm = () => {
  const [email, setEmail] = useState("");
  
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
    // Reset form after submission
    setEmail("");
  };
  
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer2() {
  const formState = useNewsletterForm();

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialIcons = [
    { icon: BiLogoFacebookCircle, href: "#", label: "Facebook" },
    { icon: BiLogoInstagram, href: "#", label: "Instagram" },
    { icon: FaXTwitter, href: "#", label: "Twitter", className: "p-0.5" },
    { icon: BiLogoLinkedinSquare, href: "#", label: "LinkedIn" },
    { icon: BiLogoYoutube, href: "#", label: "YouTube" }
  ];

  return (
    <footer id="relume" className="relative bg-[#00ff00] px-[5%] py-12 md:py-18 lg:py-20 overflow-hidden">
      {/* Make sure the footer is relative and the Particles are absolutely positioned and behind content */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Particles
          className="w-full h-full"
          quantity={100}
          ease={800}
          color="#000"
          refresh
        />
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 items-start gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20"
        >
          <div className="grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 md:gap-x-8 lg:grid-cols-4 ">
            <motion.a
              variants={itemVariants}
              href="#"
              className="sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-2 lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:row-end-auto group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl w-fit md:text-xl md:-translate-x-20 font-unbounded font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent group-hover:from-green-400 group-hover:to-green-600 transition-all duration-300 drop-shadow-sm group-hover:drop-shadow-lg">
                GlowSketch
              </div>
            </motion.a>
            
            <motion.div variants={itemVariants} className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4 font-unbounded text-neutral-darkest">Quick Links</h2>
              <ul>
                {[
                  "About Us",
                  "Contact Us",
                  "Support Center",
                  "Blog Posts",
                  "FAQs",
                ].map((link, index) => (
                  <li key={index} className="py-2 text-sm">
                    <motion.a
                      href="#"
                      className="flex items-center gap-3 text-neutral-darker transition-all duration-200 font-medium rounded-md px-2 py-1 hover:text-green-700 hover:bg-green-100 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-green-500"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4 font-unbounded text-neutral-darkest">Follow Us</h2>
              <ul>
                {[
                  "Instagram",
                  "Twitter",
                  "Facebook",
                  "LinkedIn",
                  "YouTube",
                ].map((social, index) => (
                  <li key={index} className="py-2 text-sm">
                    <motion.a
                      href="#"
                      className="flex items-center gap-3 text-neutral-darker transition-all duration-200 font-medium rounded-md px-2 py-1 hover:text-green-700 hover:bg-green-100 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-green-500"
                      whileHover={{ x: 5 }}
                    >
                      {social}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4 font-unbounded text-neutral-darkest">Stay Updated</h2>
              <ul>
                {[
                  "Newsletter",
                  "Updates",
                  "Promotions",
                  "Events",
                  "Webinars",
                ].map((item, index) => (
                  <li key={index} className="py-2 text-sm">
                    <motion.a
                      href="#"
                      className="flex items-center gap-3 text-neutral-darker transition-all duration-200 font-medium rounded-md px-2 py-1 hover:text-green-700 hover:bg-green-100 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-green-500"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div variants={itemVariants} className="flex flex-col">
            <h1 className="mb-3 font-semibold md:mb-4 font-unbounded text-neutral-darkest">Join Our Community</h1>
            <p className="mb-6 text-sm md:mb-6 text-neutral-darker leading-relaxed">
              Stay ahead with exclusive updates, creative insights, and early access to new features.
            </p>
            <div className="w-full max-w-md">
              <form
                className="mb-4 grid grid-cols-1 gap-3"
                onSubmit={formState.handleSubmit}
              >
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formState.email}
                    onChange={formState.handleSetEmail}
                    className="text-xs w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-neutral-light/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 text-neutral-darker placeholder:text-neutral transition-all duration-300 shadow-sm hover:shadow-md "
                    required
                  />
                  <motion.button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white font-medium rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 translate-x-2"
                    whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0, 255, 0, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </form>
              <div className="flex items-start gap-2 text-xs text-neutral-dark leading-relaxed">
                <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <p>
                  By subscribing, you agree to our{" "}
                  <a href="#" className="text-primary hover:underline font-medium">Privacy Policy</a>{" "}
                  and consent to receive updates about new features and creative tools.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <div className="separator" />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col-reverse items-start pt-6 pb-4 text-sm md:justify-start md:pt-8 md:pb-0 lg:flex-row lg:items-center lg:justify-between border-t border-green-200/30"
        >
          <motion.div variants={itemVariants} className="flex flex-col-reverse items-start md:flex-row md:gap-6 lg:items-center">
            <div className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:justify-center md:gap-x-6 md:gap-y-0 lg:text-left">
              <p className="mt-8 md:mt-0 text-neutral-darker font-medium">
                © {new Date().getFullYear()} GlowSketch. All rights reserved.
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mb-8 flex items-center justify-center gap-4 lg:mb-0">
            {socialIcons.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`text-neutral-darker hover:text-green-600 transition-all duration-300 p-2 rounded-lg hover:bg-green-50 ${social.className || ""}`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconComponent className="size-6" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}