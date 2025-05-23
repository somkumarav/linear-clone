import { ReactNode } from "react";

const HeroTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className='text-gradient text-6xl md:text-8xl my-6'>{children}</h1>
  );
};
const HeroSubtitle = ({ children }: { children: ReactNode }) => {
  return (
    <p className='text-primary-text text-lg md:text-xl mb-12'>{children}</p>
  );
};

const Hero = ({ children }: { children: ReactNode }) => {
  return <div className='text-center'>{children}</div>;
};

Hero.Title = HeroTitle;
Hero.Subtitle = HeroSubtitle;

export { Hero };
