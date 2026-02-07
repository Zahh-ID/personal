"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BackgroundBeams } from "../ui/background-beams";

export const HeroScrollyTelling = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Story Opacity & Y sequences
    const opacityTitle = useTransform(scrollYProgress, [0, 0.05, 0.1], [1, 1, 0]);
    const yTitle = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

    const opacitySlogan1 = useTransform(scrollYProgress, [0.15, 0.25, 0.35], [0, 1, 0]);
    const xSlogan1 = useTransform(scrollYProgress, [0.15, 0.35], [-50, 0]);

    const opacitySlogan2 = useTransform(scrollYProgress, [0.4, 0.45, 0.5], [0, 1, 0]);
    const xSlogan2 = useTransform(scrollYProgress, [0.4, 0.5], [50, 0]);

    const opacityCTA = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);
    const scaleCTA = useTransform(scrollYProgress, [0.55, 0.65], [0.8, 1]);

    return (
        <div ref={containerRef} className="relative h-[500vh] bg-black">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
                <BackgroundBeams className="opacity-20" />
                
                {/* 0% - Title */}
                <motion.div 
                    style={{ opacity: opacityTitle, y: yTitle }}
                    className="absolute text-center px-4"
                >
                    <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter mb-4">
                        zahh.dev
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 tracking-wide uppercase">
                        Web3 & Systems Engineer
                    </p>
                </motion.div>

                {/* 30% - Slogan 1 (Left) */}
                <motion.div 
                    style={{ opacity: opacitySlogan1, x: xSlogan1 }}
                    className="absolute left-10 md:left-24 max-w-2xl"
                >
                    <p className="text-4xl md:text-7xl font-bold text-white leading-tight">
                        Designing and building <br/>
                        <span className="text-emerald-500">protocol-driven</span> infrastructure for decentralized systems.
                    </p>
                </motion.div>

                {/* 60% - Slogan 2 (Right) */}
                <motion.div 
                    style={{ opacity: opacitySlogan2, x: xSlogan2 }}
                    className="absolute right-10 md:right-24 max-w-2xl text-right"
                >
                    <p className="text-4xl md:text-7xl font-bold text-white leading-tight">
                        Focused on <span className="text-emerald-500">security</span>, <br/>
                        scalability, and trust-minimized architecture.
                    </p>
                </motion.div>

                {/* 90% - CTA */}
                <motion.div 
                    style={{ opacity: opacityCTA, scale: scaleCTA }}
                    className="absolute text-center px-4"
                >
                    <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
                        Discuss a Project
                    </h2>
                    <MagneticButton>
                         Get in Touch
                    </MagneticButton>
                </motion.div>
            </div>
        </div>
    );
};

const MagneticButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <button className="relative px-8 py-4 rounded-full bg-emerald-500 text-black font-bold text-lg uppercase tracking-wider hover:bg-white transition-colors duration-300">
            {children}
        </button>
    );
};
