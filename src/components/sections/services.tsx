import { Section } from "../ui/section";
import { FadeIn, StaggerContainer, FadeInItem } from "../ui/fade-in";
import { Network, ShieldCheck, Server, BrainCircuit } from "lucide-react";

export const Services = () => {
    const services = [
        {
            title: "Web3 Infrastructure",
            description: "Designing decentralized systems with a focus on protocol mechanics, wallet architecture, and secure integrations.",
            icon: <Network className="text-emerald-500" size={32} />
        },
        {
            title: "Security Engineering",
            description: "Threat modeling, vulnerability research, and security audits for high-stakes distributed applications.",
            icon: <ShieldCheck className="text-emerald-500" size={32} />
        },
        {
            title: "Backend Systems",
            description: "Building high-performance, fault-tolerant APIS and microservices using Rust, Go, and TypeScript.",
            icon: <Server className="text-emerald-500" size={32} />
        },
        {
            title: "Applied AI",
            description: "Leveraging machine learning for operational insights, anomaly detection, and automated decision flows.",
            icon: <BrainCircuit className="text-emerald-500" size={32} />
        }
    ];

    return (
        <Section id="services" className="bg-zinc-900/30">
            <FadeIn>
                 <h2 className="text-3xl font-bold tracking-tight text-white mb-16">What I Do</h2>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 gap-8">
                {services.map((service, idx) => (
                    <FadeInItem key={idx}>
                        <div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800/50 hover:border-zinc-700 transition-colors h-full">
                            <div className="mb-6 bg-zinc-900/50 w-14 h-14 rounded-lg flex items-center justify-center border border-zinc-800">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </FadeInItem>
                ))}
            </StaggerContainer>
        </Section>
    );
};
