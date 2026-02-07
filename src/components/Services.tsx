import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
    IconCpu,
    IconDatabase,
    IconLock,
    IconNetwork,
} from "@tabler/icons-react";
import { FadeIn, StaggerContainer, FadeInItem } from "./ui/fade-in";

export function Services() {
    return (
        <section id="services" className="py-20 w-full bg-black dark:bg-black">
            <FadeIn>
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-center mb-12">
                    What I Do
                </h2>
            </FadeIn>
            <StaggerContainer className="max-w-4xl mx-auto">
                <BentoGrid>
                    {items.map((item, i) => (
                        <FadeInItem key={i} className={i === 3 || i === 6 ? "md:col-span-2" : ""}>
                            <BentoGridItem
                                title={item.title}
                                description={item.description}
                                header={item.header}
                                icon={item.icon}
                                className="h-full"
                            />
                        </FadeInItem>
                    ))}
                </BentoGrid>
            </StaggerContainer>
        </section>
    );
}

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
    {
        title: "Web3 & Blockchain Infrastructure",
        description:
            "I design and experiment with decentralized systems, focusing on protocol mechanics, wallet architecture, and on-chain/off-chain integration. My interest lies in building infrastructure that is secure by design and operationally feasible at scale.",
        header: <Skeleton />,
        icon: <IconNetwork className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Security Research & Analysis",
        description:
            "I explore system weaknesses through structured security analysis, CTF challenges, and controlled vulnerability research. This includes network scanning, service enumeration, threat modeling, and understanding how misconfigurations lead to real-world exploits.",
        header: <Skeleton />,
        icon: <IconLock className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Systems Engineering",
        description:
            "I approach engineering problems holistically—considering data flow, fault tolerance, performance, and long-term maintainability. I focus on building systems that remain understandable and reliable as complexity grows.",
        header: <Skeleton />,
        icon: <IconCpu className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Data & Applied AI Systems",
        description:
            "I work with large datasets to extract operational insights and experiment with applied machine learning and expert systems. My focus is on practical use cases such as prediction, classification, and decision support rather than purely academic models.",
        header: <Skeleton />,
        icon: <IconDatabase className="h-4 w-4 text-neutral-500" />,
    },
];
