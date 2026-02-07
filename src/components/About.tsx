import { FadeIn } from "./ui/fade-in";

export function About() {
    return (
        <section id="about" className="py-20 w-full bg-black dark:bg-black dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="max-w-4xl mx-auto p-4 relative z-20">
                <FadeIn>
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-center mb-8">
                        About Me
                    </h2>
                    <div className="text-neutral-300 text-lg leading-relaxed space-y-6">
                        <p>
                            I am a systems-oriented engineer with a strong focus on decentralized
                            technologies, security analysis, and data-driven systems. My work is
                            driven by curiosity about how complex systems function at a
                            fundamental level—how trust is established, how failures propagate,
                            and how architecture decisions affect long-term reliability.
                        </p>
                        <p>
                            Rather than approaching problems from a purely theoretical
                            perspective, I prioritize practical experimentation and hands-on
                            development. I have experience working on blockchain infrastructure
                            components such as wallets, launchpads, and protocol-level
                            mechanisms, alongside security challenges including vulnerability
                            analysis, CTF-style problem solving, and threat modeling.
                        </p>
                        <p>
                            I prefer lean development workflows and independent execution, valuing
                            clarity, minimalism, and technical depth over hype or abstraction. My
                            goal is to build systems that are robust, auditable, and capable of
                            operating in adversarial or unpredictable environments.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
