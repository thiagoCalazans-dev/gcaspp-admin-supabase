import { cn } from "@/lib/twMerge";

export function H2({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <h2
      className={cn(
        "scroll-m-20  text-3xl font-semibold leading-none tracking-wider transition-colors first:mt-0 ",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
