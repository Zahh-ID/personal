import { Section } from "../ui/section";
import { Badge } from "../ui/badge";
import { FadeIn, StaggerContainer, FadeInItem } from "../ui/fade-in";

export const Stack = () => {
    const stack = {
        "Core": ["TypeScript", "Rust", "Python", "Go"],
        "Web3": ["Solidity", "Ethers.js", "Hardhat", "Foundry"],
        "Infrastructure": ["Docker", "Kubernetes", "AWS", "Terraform"],
        "Data": ["PostgreSQL", "Redis", "Kafka", "Airflow"]
    };

    return (
        <Section id="stack">
            <div className="flex flex-col md:flex-row gap-16">
                <div className="md:w-1/3">
                    <FadeIn>
                        <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Technical Stack</h2>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            I choose tools that prioritize correctness and maintainability. My core stack is built around strongly-typed languages and verifiable infrastructure.
                        </p>
                    </FadeIn>
                </div>
                
                <div className="md:w-2/3">
                    <StaggerContainer className="grid sm:grid-cols-2 gap-12">
                        {Object.entries(stack).map(([category, items], idx) => (
                            <FadeInItem key={idx}>
                                <h3 className="text-white font-medium mb-4 border-b border-zinc-800 pb-2">{category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {items.map(item => (
                                        <Badge key={item} className="bg-zinc-800/50 text-zinc-300 border-zinc-700/50 hover:border-emerald-500/50 transition-colors">
                                            {item}
                                        </Badge>
                                    ))}
                                </div>
                            </FadeInItem>
                        ))}
                    </StaggerContainer>
                </div>
            </div>
        </Section>
    );
};
