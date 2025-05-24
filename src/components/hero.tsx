import classNames from "classnames";
import { ReactNode } from "react";

type HeroTitlesProps = {
  children: ReactNode;
  className?: string;
};

const HeroTitle = ({ children, className }: HeroTitlesProps) => {
  return (
    <h1
      className={classNames(
        "text-gradient text-6xl md:text-8xl my-6",
        className
      )}
    >
      {children}
    </h1>
  );
};
const HeroSubtitle = ({ children, className }: HeroTitlesProps) => {
  return (
    <p
      className={classNames(
        "text-primary-text text-lg md:text-xl mb-12",
        className
      )}
    >
      {children}
    </p>
  );
};

const Hero = ({ children }: { children: ReactNode }) => {
  return <div className='text-center'>{children}</div>;
};

Hero.Title = HeroTitle;
Hero.Subtitle = HeroSubtitle;

export { Hero };
