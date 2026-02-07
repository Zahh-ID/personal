"use client";

import { cn } from "../../lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute h-full w-full inset-0 bg-neutral-950/80 pointer-events-none",
        className
      )}
    >
        <div className="absolute left-0 top-0 h-full w-full [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]">
             <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-neutral-500 to-transparent h-[2px] w-3/4 blur-sm opacity-50" />
            <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-neutral-500 to-transparent h-px w-3/4 opacity-50" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-[5px] w-1/4 blur-sm opacity-50" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px w-1/4 opacity-50" />
        </div>
    </div>
  );
};
