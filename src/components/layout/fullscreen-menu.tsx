"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDownRight } from "lucide-react";
import { Logo } from "../ui/logo";

const links = [
  { title: "About", href: "/about" },
  { title: "Work", href: "/work" },
  { title: "Contact", href: "#contact" },
];

export const FullscreenMenu = () => {
  const [open, setOpen] = useState(false);
  const [inverted, setInverted] = useState(false);

  useEffect(() => {
    const checkInversion = () => {
      const elements = document.querySelectorAll("[data-invert-nav]");
      let shouldInvert = false;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < 60 && rect.bottom > 0) {
          shouldInvert = true;
        }
      });

      setInverted(shouldInvert);
    };

    window.addEventListener("scroll", checkInversion, { passive: true });
    checkInversion();

    return () => window.removeEventListener("scroll", checkInversion);
  }, []);

  const menuVars = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
    },
    exit: {
      scaleY: 0,
      transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const containerVars = {
    initial: {
      transition: { staggerChildren: 0.09, staggerDirection: -1 },
    },
    open: {
      transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 },
    },
  };

  const linkVars = {
    initial: {
      y: "30vh",
      transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
    },
    open: {
      y: 0,
      transition: { ease: [0, 0.55, 0.45, 1], duration: 0.7 },
    },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 flex justify-between items-center bg-transparent pointer-events-none">
      <div className={`pointer-events-auto relative z-[101] transition-colors duration-300 ${open ? "text-ink" : inverted ? "text-white" : "text-ink"}`}>
        <Logo className="h-8" iconColor={open ? undefined : inverted ? "white" : undefined} />
      </div>

      <div className="pointer-events-auto relative z-[101]">
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 items-center gap-2 whitespace-nowrap rounded-[var(--radius-pill)] px-5 text-sm font-semibold uppercase tracking-widest transition-all duration-300 bg-white text-black hover:bg-black hover:text-white"
        >
          {open ? "Close" : "Menu"}
          <motion.span
            animate={{ rotate: open ? -180 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center"
          >
            <ArrowDownRight size={16} strokeWidth={2.5} />
          </motion.span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars as any}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen bg-card origin-top flex flex-col justify-center px-6 md:px-24 pointer-events-auto"
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
                      {link.href.startsWith("/") ? (
                        <Link
                          to={link.href}
                          onClick={() => setOpen(false)}
                          className="text-5xl md:text-8xl font-bold text-ink uppercase tracking-tighter hover:text-pink transition-colors"
                        >
                          {link.title}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="text-5xl md:text-8xl font-bold text-ink uppercase tracking-tighter hover:text-pink transition-colors"
                        >
                          {link.title}
                        </a>
                      )}
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="absolute bottom-10 left-6 md:left-24 flex gap-6 text-muted-ink uppercase text-sm tracking-widest">
              <a href="https://github.com/Zahh-id" target="_blank" rel="noopener noreferrer" className="hover:text-pink transition-colors">Github</a>
              <a href="https://t.me/ZahhOnly" target="_blank" rel="noopener noreferrer" className="hover:text-pink transition-colors">Telegram</a>
              <a href="https://discordapp.com/users/756448650179117096" target="_blank" rel="noopener noreferrer" className="hover:text-pink transition-colors">Discord</a>
              <a href="mailto:zahhkai@gmail.com" className="hover:text-pink transition-colors">Email</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
