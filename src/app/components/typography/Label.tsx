import { cn } from "@/lib/twMerge";

export function Label({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <h1
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
