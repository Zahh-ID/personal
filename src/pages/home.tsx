import { HeroScrollyTelling } from "../components/sections/hero-scrolly";
import { GitHubActivity } from "../components/sections/github-activity";
import { TextReveal } from "../components/ui/text-reveal";
import { Section } from "../components/ui/section";

export const HomePage = () => {
  return (
    <>
      <HeroScrollyTelling />

      <Section id="about" className="py-24 md:py-48 flex justify-center">
        <TextReveal
          className="max-w-4xl text-center"
          value="I design and build Web3 systems where architecture, performance, and security matter. Every decision is intentional. Every system is built to hold under real-world constraints."
        />
      </Section>

      <GitHubActivity />
    </>
  );
};
