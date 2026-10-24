import { cva, type VariantProps } from "class-variance-authority";

// Styles for links that look like buttons. Anchors stay real links so they work without JavaScript.
export const buttonVariants = cva(
  "inline-flex h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-colors md:h-10",
  {
    variants: {
      variant: {
        primary: "bg-foreground text-background hover:bg-foreground/85",
        outline:
          "border border-foreground/30 text-foreground hover:bg-foreground/10",
        ghost:
          "text-foreground underline underline-offset-4 hover:text-foreground/70",
      },
    },
    defaultVariants: { variant: "primary" },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
