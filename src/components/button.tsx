import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "rounded px-5  font-medium flex items-center justify-center gap-2 text-zinc-200",

  variants: {
    variant: {
      primary: "bg-teal-600 hover:bg-teal-500",
      secondary: "bg-zinc-800 hover:bg-zinc-700",
    },

    size: {
      default: "py-2",
      full: "w-full h-11",
    },
  },

  defaultVariants: { variant: "primary", size: "default" },
});

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    children: ReactNode;
  };

export function Button({ children, variant, size, ...rest }: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, size })} {...rest}>
      {children}
    </button>
  );
}
