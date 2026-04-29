import { cn } from "../../lib/utils";

export const Badge = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-[var(--radius-pill)] text-xs font-medium bg-pink/10 text-pink border border-pink/20",
        className
      )}
    >
      {children}
    </span>
  );
};
