"use client";
import { motion } from "framer-motion";
import { Section } from "../ui/section";
import { Badge } from "../ui/badge";
import { FadeIn, FadeInItem } from "../ui/fade-in";

export const ProjectShowcase = () => {
  const specs = [
    { label: "Protocol", value: "IBC (Inter-Blockchain Communication)" },
    { label: "Privacy", value: "SNIP-20 / Secret Standards" },
    { label: "Networks", value: "Secret, Terra Classic, Cosmos Hub" },
    { label: "Stack", value: "React, CosmES, SecretJS" },
  ];

  return (
    <Section id="work" className="min-h-screen py-24 bg-black overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <Badge className="mb-6 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Featured Project</Badge>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter uppercase">
              IBC Transfer Protocol
            </h2>
            <p className="text-xl text-zinc-400 mb-12 leading-relaxed max-w-xl">
              A high-performance IBC bridge designed for privacy-preserving asset transfers. 
              Architected a secure non-custodial infrastructure enabling seamless interoperability between 
              Secret Network, Terra Classic, and the Cosmos Hub.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {specs.map((spec, i) => (
                <FadeInItem key={i}>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium">{spec.label}</p>
                    <p className="text-lg text-white font-medium">{spec.value}</p>
                  </div>
                </FadeInItem>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <a 
                href="https://dosecret.cookie-verse.io" 
                className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-emerald-500 transition-colors"
              >
                Preview
              </a>
            </motion.div>
          </FadeIn>

          <FadeIn direction="right" className="relative group">
            <div className="absolute -inset-4 bg-emerald-500/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-sm">
                <img 
                    src="/image.png" 
                    alt="BridgeSecret Technical Visualization"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                />
                
                {/* Interactive Technical Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-8 left-8 right-8 p-6 rounded-xl bg-black/40 backdrop-blur-md border border-white/5 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-mono text-emerald-400">ENCRYPTION_ACTIVE</span>
                        <div className="flex gap-1">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};
