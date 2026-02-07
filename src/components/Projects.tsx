import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FadeIn, StaggerContainer, FadeInItem } from "./ui/fade-in";

export function Projects() {
    return (
        <section id="projects" className="py-20 w-full bg-black dark:bg-black">
            <FadeIn>
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-center mb-12">
                    Selected Work
                </h2>
            </FadeIn>
            <div className="max-w-6xl mx-auto px-4">
                <HoverEffect items={projects} />
            </div>
        </section>
    );
}

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: string;
        link?: string;
        tags: string[];
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <StaggerContainer
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <FadeInItem
                    key={item?.title}
                    className="relative group  block p-2 h-full w-full"
                >
                    <div
                        className="h-full w-full"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                                    layoutId="hoverBackground"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { duration: 0.15 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.15, delay: 0.2 },
                                    }}
                                />
                            )}
                        </AnimatePresence>
                        <Card>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {item.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/[0.1] text-neutral-600 dark:text-neutral-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </div>
                </FadeInItem>
            ))}
        </StaggerContainer>
    );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white dark:bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-neutral-800 dark:text-neutral-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-neutral-600 dark:text-neutral-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

const projects = [
  {
    title: "Decentralized Launchpad & Aggregator",
    description:
      "Designed a modular launchpad and aggregation system for decentralized ecosystems, focusing on minimal trust assumptions, transparent fund flows, and scalable architecture. Explored bonding mechanics, funding constraints, and user experience at the protocol level.",
    tags: ["DeFi", "Architecture", "Protocol Design"],
  },
  {
    title: "Wallet Infrastructure with Fiat On-Ramp",
    description:
      "Researched and designed wallet architecture supporting fiat-to-crypto access, including third-party ramp integration, regulatory considerations, and security implications for non-custodial users.",
    tags: ["Wallet", "Security", "Fiat/Crypto"],
  },
  {
    title: "Security Challenges & CTF Work",
    description:
      "Solved multi-stage security challenges involving reverse engineering, steganography, cryptographic puzzles, and network reconnaissance. Emphasis on methodology, not just exploitation.",
    tags: ["CTF", "Reverse Engineering", "Cryptography"],
  },
  {
    title: "Data Analysis Projects (E-commerce & Operations)",
    description:
      "Analyzed large-scale datasets to study logistics performance, customer behavior, profitability, and operational risk. Focused on practical metrics and actionable insights using Python-based data workflows.",
    tags: ["Data Analysis", "Python", "Operations"],
  },
];
