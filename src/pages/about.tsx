import { Link } from "react-router-dom";
import { Section } from "../components/ui/section";
import { FadeIn } from "../components/ui/fade-in";
import { AnimatedIcon } from "../components/ui/animated-icon";
import { ArrowLeft } from "lucide-react";

export const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <Section className="mb-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-ink hover:text-pink transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          <span className="text-sm uppercase tracking-widest font-medium">Back</span>
        </Link>

        <FadeIn>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-ink tracking-tighter mb-8">
            About
          </h1>
        </FadeIn>
      </Section>

      <Section className="border-t border-border py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 md:gap-24">
          <FadeIn direction="left">
            <AnimatedIcon src="/lottie/user.json" className="w-12 h-12 sm:w-16 sm:h-16 mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ink tracking-tight">
              Who I am
            </h2>
          </FadeIn>

          <FadeIn direction="right">
            <div className="space-y-6 text-base sm:text-lg md:text-xl text-ink leading-relaxed">
              <p>
                I'm an independent engineer focused on Web3 protocol infrastructure,
                decentralized systems, and security-first architecture. I work at the
                intersection of blockchain protocols and production-grade software,
                building systems designed to hold under real-world constraints.
              </p>
              <p>
                My approach is simple: understand the problem deeply, design with
                intention, and ship infrastructure that doesn't need babysitting.
                Every system I build prioritizes correctness, performance, and
                long-term maintainability over speed to market.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="border-t border-border py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 md:gap-24">
          <FadeIn direction="left">
            <AnimatedIcon src="/lottie/code.json" className="w-12 h-12 sm:w-16 sm:h-16 mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ink tracking-tight">
              What I do
            </h2>
          </FadeIn>

          <FadeIn direction="right">
            <div className="space-y-6 text-base sm:text-lg md:text-xl text-ink leading-relaxed">
              <p>
                Protocol engineering, cross-chain infrastructure (IBC, bridges),
                smart contract architecture, and full-stack decentralized
                application development. I've worked across Cosmos, Secret Network,
                Terra, and EVM ecosystems.
              </p>
              <p>
                Beyond blockchain, I build high-performance backend systems,
                developer tooling, and infrastructure automation. I care deeply
                about system design, observability, and writing code that other
                engineers can reason about.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="border-t border-border py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 md:gap-24">
          <FadeIn direction="left">
            <AnimatedIcon src="/lottie/lightbulb.json" className="w-12 h-12 sm:w-16 sm:h-16 mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ink tracking-tight">
              Philosophy
            </h2>
          </FadeIn>

          <FadeIn direction="right">
            <div className="space-y-6 text-base sm:text-lg md:text-xl text-ink leading-relaxed">
              <p>
                I believe the best infrastructure is invisible. You only notice it
                when it breaks. My goal is to build systems nobody ever has to
                think about, because they just work.
              </p>
              <p>
                Trust-minimized, resilient, and built for the long term. That's the
                standard.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};
