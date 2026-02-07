"use client";
import React from "react";

import { Github, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Work", href: "#work" },
        { name: "Stack", href: "#stack" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#" className="font-bold text-xl tracking-tight hover:text-white transition-colors">
                    zahh<span className="text-emerald-500">.dev</span>
                </a>
                
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a 
                        href="#contact"
                        className="px-4 py-2 text-sm font-medium bg-white text-black rounded-md hover:bg-zinc-200 transition-colors"
                    >
                        Contact
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-zinc-400 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-white/5 bg-zinc-950 px-6 overflow-hidden"
                    >
                        <div className="flex flex-col py-4 gap-4">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a 
                                href="#contact"
                                className="inline-block text-sm font-medium text-emerald-500 hover:text-emerald-400 transition-colors pt-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact Me →
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const Footer = () => {
    return (
        <footer id="contact" className="border-t border-white/5 bg-zinc-950 py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="font-bold text-lg">zahh.dev</span>
                    <p className="text-zinc-500 text-sm">Use the tools, don't let them use you.</p>
                </div>
                
                <div className="flex items-center gap-6">
                    <a href="https://github.com/zahh-id" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="mailto:zahhkai@gmail.com" className="text-zinc-500 hover:text-white transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};
