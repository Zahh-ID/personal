import { Section } from "../ui/section";
import { FadeIn } from "../ui/fade-in";

export const About = () => {
    return (
        <Section id="about" className="bg-zinc-900/30 border-y border-white/5">
            <div className="grid md:grid-cols-2 gap-16 items-start">
                <FadeIn>
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-6">About</h2>
                    <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                        <p>
                            I am a systems engineer with a deep focus on Web3 infrastructure and security. My work sits at the intersection of distributed systems, cryptography, and applied engineering.
                        </p>
                        <p>
                            I don't just write code; I design systems that optimize for reliability and scale. Whether it's auditing smart contracts or architecting high-throughput data pipelines, I bring a rigorous, first-principles approach to every problem.
                        </p>
                    </div>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-white font-medium mb-4">Focus</h3>
                            <ul className="space-y-2 text-zinc-500">
                                <li>Protocol Security</li>
                                <li>Distributed Systems</li>
                                <li>Infrastructure as Code</li>
                                <li>Data Engineering</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-medium mb-4">Stack</h3>
                            <ul className="space-y-2 text-zinc-500">
                                <li>TypeScript / Node</li>
                                <li>Rust / Solidity</li>
                                <li>Docker / K8s</li>
                                <li>PostgreSQL / Redis</li>
                            </ul>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
};
