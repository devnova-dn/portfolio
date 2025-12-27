import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes } from "react";

// Define a base type for our typography components
type TypographyProps = HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLQuoteElement>;

// Large heading for pages
export const H1 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
      {...props}
    />
  )
);
H1.displayName = "H1";

// Section headings
export const H2 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  )
);
H2.displayName = "H2";

// Subsection headings
export const H3 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}
      {...props}
    />
  )
);
H3.displayName = "H3";

// A large paragraph for introductions
export const Lead = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-xl text-muted-foreground", className)}
      {...props}
    />
  )
);
Lead.displayName = "Lead";

// Standard paragraph text
export const P = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("leading-7 not-first:mt-6", className)}
      {...props}
    />
  )
);
P.displayName = "P";

// Large text for emphasis
export const Large = forwardRef<HTMLDivElement, TypographyProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  )
);
Large.displayName = "Large";

// Muted text for secondary information
export const Muted = forwardRef<HTMLSpanElement, TypographyProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
);
Muted.displayName = "Muted";

// Small text for fine print
export const Small = forwardRef<HTMLSpanElement, TypographyProps>(
  ({ className, ...props }, ref) => (
    <small
      ref={ref}
      className={cn("text-sm font-medium leading-none", className)}
      {...props}
    />
  )
);
Small.displayName = "Small";

// Blockquote for citations
export const Blockquote = forwardRef<HTMLQuoteElement, TypographyProps>(
  ({ className, ...props }, ref) => (
    <blockquote
      ref={ref}
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    />
  )
);
Blockquote.displayName = "Blockquote";