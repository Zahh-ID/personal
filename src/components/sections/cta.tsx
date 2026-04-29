"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const CTA = () => {
  return (
    <section id="contact" data-invert-nav className="min-h-screen flex items-center justify-center bg-pink relative overflow-hidden py-24 w-full px-6 md:px-12 lg:px-24">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/50 via-transparent to-transparent animate-pulse" />
      </div>

      <div className="relative z-10 text-center max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-black mb-8 sm:mb-12 tracking-tighter leading-[0.9]"
        >
          LET'S CREATE <br /> THE EXTRAORDINARY.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a
            href="mailto:zahhkai@gmail.com"
            className="inline-flex items-center gap-3 sm:gap-4 px-8 py-4 sm:px-12 sm:py-6 rounded-[var(--radius-pill)] bg-black text-white text-lg sm:text-xl md:text-2xl font-bold tracking-wide hover:scale-105 transition-transform duration-300 group"
          >
            Start a Project
            <span className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
              <ArrowUpRight size={24} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
