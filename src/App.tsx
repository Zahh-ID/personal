import { SmoothScroll } from "./components/layout/smooth-scroll";
import { Preloader } from "./components/layout/preloader";
import { FullscreenMenu } from "./components/layout/fullscreen-menu";
import { HeroScrollyTelling } from "./components/sections/hero-scrolly";
import { BentoStats } from "./components/sections/bento-stats";
import { ProjectShowcase } from "./components/sections/project-showcase";
import { CTA } from "./components/sections/cta";
import { Footer } from "./components/layout/footer";
import { TextReveal } from "./components/ui/text-reveal";
import { Section } from "./components/ui/section";

function App() {
  return (
    <SmoothScroll>
      <Preloader />
      <FullscreenMenu />
      
      <HeroScrollyTelling />
      
      <div className="relative z-10 bg-black -mt-[100vh] rounded-t-3xl border-t border-white/10 overflow-hidden">
        <Section id="about" className="py-24 md:py-48 flex justify-center">
            <TextReveal 
                className="max-w-4xl text-center"
                value="I design and build Web3 systems where architecture, performance, and security matter. Every decision is intentional. Every system is built to hold under real-world constraints." 
            />
        </Section>
        
        <BentoStats />
        <ProjectShowcase />
        <CTA />
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
