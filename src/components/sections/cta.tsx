"use client";
import { motion } from "framer-motion";
import { Section } from "../ui/section";
import { ArrowUpRight } from "lucide-react";

export const CTA = () => {
    return (
        <Section id="contact" className="min-h-screen flex items-center justify-center bg-emerald-500 relative overflow-hidden">
            {/* Animated Background Pattern */}
             <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/50 via-transparent to-transparent animate-pulse" />
             </div>

            <div className="relative z-10 text-center max-w-5xl px-6">
                <motion.h2 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-9xl font-bold text-zinc-950 mb-12 tracking-tighter leading-[0.9]"
                >
                    LET'S CREATE <br/> THE EXTRAORDINARY.
                </motion.h2>

                <motion.div
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.8, delay: 0.2 }}
                >
                     <a href="mailto:zahhkai@gmail.com" className="inline-flex items-center gap-4 px-12 py-6 rounded-full bg-zinc-950 text-white text-xl md:text-2xl font-bold tracking-wide hover:scale-105 transition-transform duration-300 group">
                        Start a Project 
                        <span className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
                            <ArrowUpRight size={24} />
                        </span>
                     </a>
                </motion.div>
            </div>
        </Section>
    );
};
