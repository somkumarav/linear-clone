import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  href: string;
  children: ReactNode;
}

const buttonClasses = cva("rounded-full inline-flex items-center", {
  variants: {
    variant: {
      primary:
        "bg-primary-gradient hover:text-shadow-primary hover:shadow-primary",
      secondary: "",
    },
    size: {
      small: "text-xs px-3 h-7",
      medium: "text-sm px-4 h-8",
      large: "text-md px-6 h-12",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

const Button = ({ href, children, variant, size }: ButtonProps) => {
  return (
    <Link href={href} className={buttonClasses({ variant, size })}>
      {children}
    </Link>
  );
};

const IconsWrapper = ({ children }: { children: ReactNode }) => {
  return <span className='button-icons-wrapper'>{children}</span>;
};

Button.IconsWrapper = IconsWrapper;

export { Button };
