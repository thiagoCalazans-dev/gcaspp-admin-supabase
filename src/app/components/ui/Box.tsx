"use client";

import { cn } from "@/lib/twMerge";

export function Box({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-md border border-zinc-100 bg-white p-4 shadow-sm shadow-brand-800 outline-none dark:border-zinc-800 dark:bg-zinc-800",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

Box.displayName = "Box";
