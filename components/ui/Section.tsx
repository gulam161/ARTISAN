import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean;
  padding?: string;
  background?: string;
}

export default function Section({
  children,
  className,
  container = true,
  padding = "py-24",
  background,
  ...props
}: SectionProps) {
  return (
    <section className={cn("relative overflow-hidden", padding, background, className)} {...props}>
      {container ? (
        <div className="container mx-auto px-6 md:px-12">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
