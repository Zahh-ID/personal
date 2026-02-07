"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { title: "About", href: "#about" },
  { title: "Work", href: "#work" },
  { title: "Process", href: "#services" },
  { title: "Contact", href: "#contact" },
];

export const FullscreenMenu = () => {
  const [open, setOpen] = useState(false);

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const linkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 flex justify-between items-center bg-transparent pointer-events-none">
      <div className="pointer-events-auto">
        <span className="text-xl font-bold tracking-tight text-white mix-blend-difference">zahh.dev</span>
      </div>
      
      <div className="pointer-events-auto">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-white mix-blend-difference text-sm font-medium uppercase tracking-widest hover:opacity-70 transition-opacity"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars as any}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen bg-black origin-top flex flex-col justify-center px-6 md:px-24 pointer-events-auto"
          >
            <div className="flex flex-col h-full justify-center">
              <motion.div
                variants={containerVars as any}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col gap-4"
              >
                {links.map((link, index) => (
                  <div key={index} className="overflow-hidden">
                    <motion.div variants={linkVars as any}>
                        <a
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="text-5xl md:text-8xl font-bold text-white uppercase tracking-tighter hover:text-emerald-500 transition-colors"
                        >
                        {link.title}
                        </a>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            <div className="absolute bottom-10 left-6 md:left-24 flex gap-6 text-zinc-500 uppercase text-sm tracking-widest">
                 <a href="https://github.com/Zahh-id" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Github</a>
                 <a href="https://t.me/ZahhOnly" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telegram</a>
                 <a href="https://discordapp.com/users/756448650179117096" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Discord</a>
                 <a href="mailto:zahhkai@gmail.com" className="hover:text-white transition-colors">Email</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

