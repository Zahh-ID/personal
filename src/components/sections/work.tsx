import { Section } from "../ui/section";
import { Badge } from "../ui/badge";
import { FadeIn, StaggerContainer, FadeInItem } from "../ui/fade-in";
import { ArrowUpRight } from "lucide-react";

export const Work = () => {
    const projects = [
        {
            title: "Decentralized Launchpad",
            description: "A permissionless token launch platform with automated liquidity locking and vesting schedules.",
            tags: ["Solidity", "React", "Graph Protocol"],
            link: "#"
        },
        {
            title: "Fiat-to-Crypto Ramp",
            description: "Architected a secure non-custodial wallet infrastructure integrating multiple payment providers.",
            tags: ["Node.js", "Redis", "Security"],
            link: "#"
        },
        {
            title: "MEV Protection System",
            description: "Real-time transaction monitoring service to detect and mitigate sandwich attacks.",
            tags: ["Rust", "Geth", "Data Analysis"],
            link: "#"
        },
        {
            title: "Enterprise Logistics Analytics",
            description: "High-volume data processing pipeline delivering actionable operational insights.",
            tags: ["Python", "Airflow", "SQL"],
            link: "#"
        }
    ];

    return (
        <Section id="work">
            <FadeIn>
                <h2 className="text-3xl font-bold tracking-tight text-white mb-16">Selected Work</h2>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <FadeInItem key={idx}>
                        <a href={project.link} className="group block h-full p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                    {project.title}
                                </h3>
                                <ArrowUpRight className="text-zinc-500 group-hover:text-emerald-400 transition-colors" size={20} />
                            </div>
                            <p className="text-zinc-400 mb-8 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <Badge key={tag}>{tag}</Badge>
                                ))}
                            </div>
                        </a>
                    </FadeInItem>
                ))}
            </StaggerContainer>
        </Section>
    );
};
