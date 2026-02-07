import { cn } from "../../lib/utils";

export const Section = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <section
      id={id}
      className={cn("py-24 w-full px-6 md:px-12 lg:px-24 max-w-7xl mx-auto", className)}
    >
      {children}
    </section>
  );
};
