
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BackgroundBeams } from "./ui/background-beams";

export function Hero() {
  return (
    <div className="pb-20 pt-36 h-screen w-full bg-black dark:bg-black dark:bg-grid-white/[0.03] bg-grid-white/[0.03] relative flex items-center justify-center overflow-hidden">
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0 opacity-40 max-h-screen" />
      
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-10"></div>

      <div className="flex justify-center relative my-20 z-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-emerald-100 max-w-80">
            Systems Engineering & Web3 Security
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Building Robust Decentralized Systems"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-4 text-neutral-300">
             I architect scalable infrastructure, analyze protocol security, and design resilient systems for the decentralized web.
          </p>

          <a href="#projects">
             <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              See My Work
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
