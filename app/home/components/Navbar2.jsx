"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { RxChevronDown } from "react-icons/rx";

const useNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };

  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";

  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar2() {
  const useActive = useNavbar();
  
  return (
    <section
      id="relume"
      className="z-[999] flex w-full items-center border-b border-neutral-light/20  backdrop-blur-md lg:min-h-18 lg:px-[5%] sticky top-0"
    >
      <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <motion.a 
            href="#"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="group"
          >
            <div className="text-2xl font-unbounded font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent group-hover:from-green-500 group-hover:to-green-700 transition-all duration-300">
              GlowSketch
            </div>
          </motion.a>
          
          <div className="flex items-center gap-4 lg:hidden">
            <div>
              <motion.button 
                className="relative group px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white font-medium rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 text-sm"
                whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0, 255, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Join</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </motion.button>
            </div>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden bg-white/50 backdrop-blur-sm rounded-lg border border-neutral-light/30 hover:bg-white/80 transition-all duration-300"
              onClick={useActive.toggleMobileMenu}
            >
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-neutral-darkest"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: 8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-neutral-darkest"
                animate={useActive.animateMobileMenu}
                variants={{
                  open: { width: 0, transition: { duration: 0.1 } },
                  closed: {
                    width: "1.5rem",
                    transition: { delay: 0.3, duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-neutral-darkest"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: -8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
            </button>
          </div>
        </div>
        
        <motion.div
          variants={{
            open: { height: "var(--height-open, 100dvh)" },
            close: { height: "var(--height-closed, 0)" },
          }}
          animate={useActive.animateMobileMenu}
          initial="close"
          exit="close"
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] text-center lg:flex lg:items-center lg:justify-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto] bg-white/90 backdrop-blur-md lg:bg-transparent"
        >
          <motion.a
            href="#"
            className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2 text-neutral-darker hover:text-green-600 transition-colors duration-300 font-medium relative group"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative z-10">Home</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300 lg:block"></div>
          </motion.a>
          <motion.a
            href="#"
            className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2 text-neutral-darker hover:text-green-600 transition-colors duration-300 font-medium relative group"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative z-10">About Us</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300 lg:block"></div>
          </motion.a>
          <motion.a
            href="#"
            className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2 text-neutral-darker hover:text-green-600 transition-colors duration-300 font-medium relative group"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative z-10">Features</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300 lg:block"></div>
          </motion.a>
          
          <div
            onMouseEnter={useActive.openOnDesktopDropdownMenu}
            onMouseLeave={useActive.closeOnDesktopDropdownMenu}
          >
            <motion.button
              className="flex w-full items-center justify-center gap-4 py-3 text-center text-md lg:w-auto lg:flex-none lg:justify-start lg:gap-2 lg:px-4 lg:py-2 lg:text-base text-neutral-darker hover:text-green-600 transition-colors duration-300 font-medium relative group"
              onClick={useActive.openOnMobileDropdownMenu}
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative z-10">More</span>
              <motion.span
                variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
                animate={useActive.animateDropdownMenuIcon}
                transition={{ duration: 0.3 }}
                className="text-green-600"
              >
                <RxChevronDown />
              </motion.span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300 lg:block"></div>
            </motion.button>
            
            <AnimatePresence>
              <motion.nav
                variants={{
                  open: {
                    visibility: "visible",
                    opacity: "var(--opacity-open, 100%)",
                    display: "block",
                    y: 0,
                  },
                  close: {
                    visibility: "hidden",
                    opacity: "var(--opacity-close, 0)",
                    display: "none",
                    y: "var(--y-close, 0%)",
                  },
                }}
                animate={useActive.animateDropdownMenu}
                initial="close"
                exit="close"
                transition={{ duration: 0.2 }}
                className="bg-white/95 backdrop-blur-md lg:absolute lg:z-50 lg:border lg:border-neutral-light/30 lg:p-3 lg:[--y-close:25%] rounded-xl shadow-lg lg:min-w-[200px]"
              >
                <motion.a
                  href="#"
                  className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left text-neutral-darker hover:text-green-600 transition-colors duration-300 font-medium rounded-lg hover:bg-green-50"
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  Contact
                </motion.a>
                <motion.a
                  href="#"
                  className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left text-neutral-darker hover:text-green-600 transition-colors duration-300 font-medium rounded-lg hover:bg-green-50"
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  Support
                </motion.a>
                <motion.a
                  href="#"
                  className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left text-neutral-darker hover:text-green-600 transition-colors duration-300 font-medium rounded-lg hover:bg-green-50"
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  Blog
                </motion.a>
              </motion.nav>
            </AnimatePresence>
          </div>
        </motion.div>
        
        <div className="hidden justify-self-end lg:block">
          <motion.button 
            className="relative group px-6 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white font-medium rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 text-sm"
            whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0, 255, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Join</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}