"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { RxPlus } from "react-icons/rx";

export function Faq4() {
  const [open, setOpen] = useState(null);

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

  const faqs = [
    {
      question: "What are the plans?",
      answer:
        "We offer three plans: Basic, Pro, and Premium. Each plan includes unique features tailored to different needs. Choose the one that best fits your artistic journey.",
    },
    {
      question: "Is there a trial?",
      answer:
        "Yes, we provide a 14-day free trial for all new users. This allows you to explore our features without any commitment. Experience the platform and see how it enhances your creativity.",
    },
    {
      question: "How is billing done?",
      answer:
        "Billing is processed monthly or annually based on your selected plan. You can easily manage your payment methods in your account settings. All transactions are secure and encrypted.",
    },
    {
      question: "Can I change plans?",
      answer:
        "Absolutely! You can upgrade or downgrade your plan at any time. Changes will take effect at the next billing cycle. Enjoy flexibility as your needs evolve.",
    },
    {
      question: "What if I need help?",
      answer:
        "Our support team is here to assist you. You can reach out via our contact page for any inquiries. We're committed to ensuring you have a smooth experience.",
    },
  ];

  const toggle = (idx) => {
    setOpen(open === idx ? null : idx);
  };

  return (
    <section id="faq" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#e5ffe5]">
      <div className="container max-w-lg mx-auto">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="mb-12 text-center md:mb-18 lg:mb-20"
        >
          <h2 className="mb-5 font-bold md:mb-6 text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to your questions about pricing, billing, and plan
            features here.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="rounded-2xl border border-gray-200 shadow-md px-5 py-4 md:px-6"
            >
              <button
                onClick={() => toggle(idx)}
                className="flex w-full items-center justify-between text-left md:py-5 md:text-md"
              >
                <span>{faq.question}</span>
                <RxPlus
                  className={`size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8 ${
                    open === idx ? "rotate-45" : ""
                  }`}
                />
              </button>
              {open === idx && (
                <div className="mt-3 md:pb-6">
                  <p>{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          custom={faqs.length}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20"
        >
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">We're here to help you!</p>
          <div className="mt-6 md:mt-8">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-8 py-4 bg-transparent text-neutral-darkest font-semibold rounded-medium border-2 border-neutral-darkest overflow-hidden transition-all duration-300 hover:bg-neutral-darkest hover:text-white font-sans"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-neutral-darkest transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}