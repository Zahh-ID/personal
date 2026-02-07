"use client";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";


export const BentoStats = () => {
    return (
        <section id="services" className="py-24 px-6 md:px-12 bg-black">
             <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Left Main Card */}
                  <div className="md:col-span-2 bg-zinc-900 rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[440px] flex flex-col justify-end group border border-white/5">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                      <img 
                         src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop" 
                         alt="System infrastructure"
                         className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="relative z-20 max-w-xl">
                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">System-Centric Engineering</h3>
                          <div className="w-12 h-[1px] bg-emerald-500/50 mb-4" /> {/* Micro-divider */}
                          <p className="text-zinc-300 text-lg font-medium leading-relaxed">
                            Designing resilient digital systems where architecture, performance, and security converge.
                          </p>
                      </div>
                  </div>

                  {/* Right Side Stats & Focus */}
                  <div className="flex flex-col gap-8">
                      <StatCard label="Systems & Technical Experiments" value={25} suffix="+" />
                      <StatCard label="Independent Engineering & Research" value={1} suffix=" Years" />
                      
                      <div className="bg-zinc-900 rounded-3xl p-8 flex flex-col justify-center border border-white/5 h-full">
                          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold mb-4">Focus</span>
                          <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
                            Web3 · Systems · Security
                          </span>
                      </div>
                  </div>
             </div>
        </section>
    );
};

const StatCard = ({ label, value, suffix }: { label: string, value: number, suffix: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div ref={ref} className="bg-zinc-900 rounded-3xl p-8 flex flex-col justify-center border border-white/5 min-h-[160px]">
            <span className="text-5xl md:text-6xl font-bold text-emerald-500 mb-2 tracking-tighter">
                {isInView ? <CountUp end={value} duration={2.5} /> : 0}
                {suffix}
            </span>
            <span className="text-zinc-400 text-sm font-semibold leading-snug">{label}</span>
        </div>
    );
};
