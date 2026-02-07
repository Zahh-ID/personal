import React from "react";
import { FadeIn, StaggerContainer, FadeInItem } from "./ui/fade-in";

export function Skills() {
    return (
        <section id="skills" className="py-20 w-full bg-black dark:bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <FadeIn>
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-center mb-12">
                        Technical Skills & Principles
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Skills Column */}
                    <div className="space-y-8">
                        <FadeIn delay={0.1}>
                            <h3 className="text-2xl font-semibold text-neutral-200 border-b border-neutral-800 pb-2">
                                Technology Stack
                            </h3>
                        </FadeIn>
                        <StaggerContainer className="space-y-6" delay={0.2}>
                            <div>
                                <h4 className="text-lg font-medium text-neutral-300 mb-2">Languages & Tools</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.languages.map((skill, i) => (
                                        <FadeInItem key={i}><SkillTag>{skill}</SkillTag></FadeInItem>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-neutral-300 mb-2">Blockchain & Web3</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.web3.map((skill, i) => (
                                        <FadeInItem key={i}><SkillTag>{skill}</SkillTag></FadeInItem>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-neutral-300 mb-2">Security</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.security.map((skill, i) => (
                                        <FadeInItem key={i}><SkillTag>{skill}</SkillTag></FadeInItem>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-neutral-300 mb-2">Data & AI</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.data.map((skill, i) => (
                                        <FadeInItem key={i}><SkillTag>{skill}</SkillTag></FadeInItem>
                                    ))}
                                </div>
                            </div>
                        </StaggerContainer>
                    </div>

                    {/* Principles Column */}
                    <div className="space-y-8">
                        <FadeIn delay={0.3}>
                            <h3 className="text-2xl font-semibold text-neutral-200 border-b border-neutral-800 pb-2">
                                Working Principles
                            </h3>
                        </FadeIn>
                        <StaggerContainer className="space-y-4" delay={0.4}>
                            {principles.map((principle, i) => (
                                <FadeInItem key={i} className="flex items-start space-x-3 text-neutral-300">
                                    <span className="text-cyan-500 mt-1">▹</span>
                                    <span className="text-lg">{principle}</span>
                                </FadeInItem>
                            ))}
                        </StaggerContainer>

                        <FadeIn delay={0.5}>
                            <h3 className="text-2xl font-semibold text-neutral-200 border-b border-neutral-800 pb-2 pt-8">
                                Current Interests
                            </h3>
                        </FadeIn>
                        <StaggerContainer className="space-y-4" delay={0.6}>
                            {interests.map((interest, i) => (
                                <FadeInItem key={i} className="flex items-start space-x-3 text-neutral-300">
                                    <span className="text-emerald-500 mt-1">▹</span>
                                    <span className="text-lg">{interest}</span>
                                </FadeInItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </div>
        </section>
    );
}

const SkillTag = ({ children }: { children: React.ReactNode }) => (
    <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-sm text-neutral-400 hover:text-neutral-200 hover:border-neutral-600 transition-colors">
        {children}
    </span>
);

const skills = {
    languages: ["Python", "Bash", "SQL", "Linux (Arch)", "Git", "Docker"],
    web3: ["Smart Contracts", "Protocol Mechanics", "Wallet Architecture", "On/Off-chain Design"],
    security: ["Network Scanning", "Threat Modeling", "CTF Methodologies", "Forensics"],
    data: ["Preprocessing", "Exploratory Analysis", "ML Fundamentals", "Expert Systems"]
};

const principles = [
    "Understand the system before optimizing it",
    "Security is architectural, not an afterthought",
    "Constraints drive better design",
    "Clarity scales better than complexity"
];

const interests = [
    "Web3 infrastructure security",
    "Hybrid AI systems (rules + learning)",
    "Decentralized identity and trust models",
    "Scalable, minimal system design"
];
