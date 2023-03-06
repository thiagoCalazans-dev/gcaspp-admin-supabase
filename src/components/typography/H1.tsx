import { cn } from "@/utils/lib/twMerge";

export function H1({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-wider lg:text-5xl",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
