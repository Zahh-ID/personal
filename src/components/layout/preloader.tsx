"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "../ui/logo";

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const slideUp = {
    initial: { top: 0 },
    exit: {
      top: "-100vh",
      height: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  const logoContainer = {
    initial: { opacity: 0, scale: 0.8 },
    enter: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.2, ease: [0, 0.55, 0.45, 1] as const },
    },
  };

  const pathDraw = {
    initial: { pathLength: 0, opacity: 0 },
    enter: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <motion.div
      variants={slideUp as any}
      initial="initial"
      animate={isLoading ? "initial" : "exit"}
      exit="exit"
      className={`fixed inset-0 z-[99] flex flex-col items-center justify-center bg-bg-base ${!isLoading ? "pointer-events-none" : ""}`}
    >
      {isLoading && (
        <>
          <motion.div
            variants={logoContainer}
            initial="initial"
            animate="enter"
            className="text-ink"
          >
            <Logo className="h-8 sm:h-12 md:h-16" />
          </motion.div>

          <motion.svg
            className="w-32 sm:w-40 md:w-48 mt-6 sm:mt-8"
            viewBox="0 0 200 2"
            initial="initial"
            animate="enter"
          >
            <motion.line
              x1="0"
              y1="1"
              x2="200"
              y2="1"
              stroke="#ff66ff"
              strokeWidth="2"
              strokeLinecap="round"
              variants={pathDraw}
            />
          </motion.svg>
        </>
      )}
    </motion.div>
  );
};
