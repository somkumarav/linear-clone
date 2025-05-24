import { cva, VariantProps } from "class-variance-authority";
import classNames from "classnames";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  href: string;
  className?: string;
  children: ReactNode;
}

const buttonClasses = cva("rounded-full inline-flex items-center", {
  variants: {
    variant: {
      primary:
        "bg-primary-gradient hover:text-shadow-primary hover:shadow-primary [&_.button-icons-wrapper]:ml-2 transition-shadow transition-text-shadow",
      secondary: [
        "text-off-white bg-white/10 border border-transparent-white backdrop-filter-[12px] transition-colors ease-in hover:bg-white/20",
        "[&_.button-icons-wrapper]:bg-transparent-white [&_.button-icons-wrapper]:rounded-full [&_.button-icons-wrapper]:px-2 [&_.button-icons-wrapper]:ml-2 [&_.button-icons-wrapper]:-mr-2",
      ],
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

const Button = ({ href, children, className, variant, size }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={classNames(buttonClasses({ variant, size }), className)}
    >
      {children}
    </Link>
  );
};

const IconsWrapper = ({ children }: { children: ReactNode }) => {
  return <span className='button-icons-wrapper'>{children}</span>;
};

Button.IconsWrapper = IconsWrapper;

export { Button };
