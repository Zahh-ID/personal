import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Section } from "../components/ui/section";
import { Badge } from "../components/ui/badge";
import { FadeIn, FadeInItem } from "../components/ui/fade-in";
import { ArrowLeft } from "lucide-react";

const projects = [
  {
    title: "IBC Transfer Protocol",
    description:
      "A high-performance IBC bridge designed for privacy-preserving asset transfers. Architected a secure non-custodial infrastructure enabling seamless interoperability between Secret Network, Terra Classic, and the Cosmos Hub.",
    specs: [
      { label: "Protocol", value: "IBC (Inter-Blockchain Communication)" },
      { label: "Privacy", value: "SNIP-20 / Secret Standards" },
      { label: "Networks", value: "Secret, Terra Classic, Cosmos Hub" },
      { label: "Stack", value: "React, CosmES, SecretJS" },
    ],
    image: "/image.png",
    link: "https://dosecret.cookie-verse.io",
  },
];

export const WorkPage = () => {
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

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-ink tracking-tighter mb-4">
          Work
        </h1>
        <p className="text-base sm:text-xl text-muted-ink max-w-2xl">
          Selected projects in protocol infrastructure, decentralized systems, and Web3 engineering.
        </p>
      </Section>

      {projects.map((project, idx) => (
        <Section key={idx} className="border-t border-border py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <Badge className="mb-6">Project {String(idx + 1).padStart(2, "0")}</Badge>
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-ink mb-8 tracking-tighter uppercase">
                {project.title}
              </h2>
              <p className="text-base sm:text-xl text-muted-ink mb-12 leading-relaxed max-w-xl">
                {project.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                {project.specs.map((spec, i) => (
                  <FadeInItem key={i}>
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-widest text-muted-ink font-medium">
                        {spec.label}
                      </p>
                      <p className="text-lg text-ink font-medium">{spec.value}</p>
                    </div>
                  </FadeInItem>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-pink text-black font-bold uppercase tracking-widest text-sm rounded-[var(--radius-pill)] hover:bg-pink-bright transition-colors"
                >
                  Preview
                </a>
              </motion.div>
            </FadeIn>

            <FadeIn direction="right" className="relative group">
              <div className="absolute -inset-4 bg-pink/20 rounded-[var(--radius-card)] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-square rounded-[var(--radius-card)] overflow-hidden border border-border bg-card shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              </div>
            </FadeIn>
          </div>
        </Section>
      ))}
    </div>
  );
};
