"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Logo } from "../ui/logo";

export const HeroScrollyTelling = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacityTitle = useTransform(scrollYProgress, [0, 0.05, 0.1], [1, 1, 0]);
  const yTitle = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

  const opacitySlogan1 = useTransform(scrollYProgress, [0.15, 0.25, 0.35], [0, 1, 0]);
  const xSlogan1 = useTransform(scrollYProgress, [0.15, 0.35], [-50, 0]);

  const opacitySlogan2 = useTransform(scrollYProgress, [0.4, 0.45, 0.5], [0, 1, 0]);
  const xSlogan2 = useTransform(scrollYProgress, [0.4, 0.5], [50, 0]);

  const opacityCTA = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);
  const scaleCTA = useTransform(scrollYProgress, [0.55, 0.65], [0.8, 1]);

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center px-6">
        <motion.div
          style={{ opacity: opacityTitle, y: yTitle }}
          className="absolute text-center w-full max-w-2xl px-4"
        >
          <Logo className="h-16 sm:h-24 md:h-40 mx-auto mb-4 text-ink" />
          <p className="text-sm sm:text-base md:text-xl text-muted-ink tracking-wide max-w-lg mx-auto">
            I build the infrastructure nobody sees, until it breaks.
            <br />
            Obsessed with systems that don't need babysitting.
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: opacitySlogan1, x: xSlogan1 }}
          className="absolute left-6 sm:left-10 md:left-24 max-w-[85vw] md:max-w-2xl"
        >
          <p className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-ink leading-tight">
            Designing and building <span className="text-pink">protocol-driven</span> infrastructure for <span className="text-pink">decentralized</span> systems.
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: opacitySlogan2, x: xSlogan2 }}
          className="absolute right-6 sm:right-10 md:right-24 max-w-[85vw] md:max-w-2xl text-right"
        >
          <p className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-ink leading-tight">
            Focused on <span className="text-pink">security</span>,
            <span className="text-pink">scalability</span>, and <span className="text-pink">trust</span>-minimized architecture.
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: opacityCTA, scale: scaleCTA }}
          className="absolute text-center w-full px-6"
        >
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-ink mb-8 tracking-tighter">
            See What I've Built
          </h2>
          <MagneticButton href="/work">View All</MagneticButton>
        </motion.div>
      </div>
    </div>
  );
};

const MagneticButton = ({ children, href }: { children: React.ReactNode; href?: string }) => {
  const cls = "relative inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-[var(--radius-pill)] bg-pink text-black font-bold text-base sm:text-lg uppercase tracking-wider hover:bg-pink-bright transition-colors duration-300";

  if (href) {
    return <a href={href} className={cls}>{children}</a>;
  }
  return <button className={cls}>{children}</button>;
};
