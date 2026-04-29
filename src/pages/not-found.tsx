import { Link } from "react-router-dom";
import { Section } from "../components/ui/section";
import { ArrowLeft } from "lucide-react";

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center">
      <Section>
        <img src="/404.svg" alt="404" className="h-24 sm:h-32 md:h-44 mb-8" />
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-ink tracking-tighter mb-6">
          Page not found
        </h1>
        <p className="text-base sm:text-xl text-muted-ink mb-12 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-pink text-black font-bold uppercase tracking-widest text-sm rounded-[var(--radius-pill)] hover:bg-pink-bright transition-colors"
        >
          <ArrowLeft size={16} />
          Back Home
        </Link>
      </Section>
    </div>
  );
};
