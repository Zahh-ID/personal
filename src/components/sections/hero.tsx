import { Section } from "../ui/section";
import { MoveRight } from "lucide-react";
import { FadeIn } from "../ui/fade-in";

export const Hero = () => {
    return (
        <Section className="min-h-[90vh] flex flex-col justify-center pt-32">
            <FadeIn>
                <div className="space-y-8 max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-400">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Available for new projects
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                        Building resilient systems for the <span className="text-emerald-500">decentralized web</span>.
                    </h1>

                    <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                        I architect scalable infrastructure, analyze protocol security, and design mission-critical software. Focused on correctness, performance, and simplicity.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a 
                            href="#work"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-colors"
                        >
                            View Work <MoveRight size={16} />
                        </a>
                        <a 
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors border border-zinc-800"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
};
