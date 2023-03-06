import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { HTMLAttributes, ReactNode } from "react";

const labelVariants = cva(
  "font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      size: {
        default: "text-lg",
        sm: "text-sm",
        lg: "text-2xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface TextProps
  extends HTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  children: ReactNode;
}

export function Label({ className, size, children, ...props }: TextProps) {
  return (
    <label className={labelVariants({ size, className })} {...props}>
      {children}
    </label>
  );
}
