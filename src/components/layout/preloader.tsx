"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5s simulated load

    return () => clearTimeout(timer);
  }, []);

  const slideUp = {
    initial: {
      top: 0,
    },
    exit: {
      top: "-100vh",
      height: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 0.75,
      transition: { duration: 1, delay: 0.2 },
    },
  };

  return (
    <motion.div
      variants={slideUp as any}
      initial="initial"
      animate={isLoading ? "initial" : "exit"}
      exit="exit"
      className={`fixed inset-0 z-[99] flex items-center justify-center bg-black ${!isLoading ? "pointer-events-none" : ""}`}
    >
        {isLoading && (
            <motion.p variants={opacity} initial="initial" animate="enter" className="text-white text-4xl md:text-6xl font-sans font-medium tracking-tight">
                zahh.dev
            </motion.p>
        )}
    </motion.div>
  );
};
