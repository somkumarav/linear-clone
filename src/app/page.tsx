import classNames from "classnames";
import { Button } from "../components/button";
import { Clients } from "../components/clients";
import { Container } from "../components/container";
import { Hero } from "../components/hero";
import { HeroImage } from "../components/hero-image";
import { ChevronIcon } from "../components/icons/chevron";
import { StarsIllustration } from "../components/icons/stars";

export default function Home() {
  return (
    <>
      <div className='overflow-hidden pb-[16.4rem] md:pb-[25.6rem]'>
        <Container className='pt-[6.4rem]'>
          <Hero>
            <Button
              className='animate-fade-in opacity-0 translate-y-[-10px]'
              href='#'
              variant='secondary'
              size='small'
            >
              Linear 2022 Release - Build for scale
              <Button.IconsWrapper>→</Button.IconsWrapper>
            </Button>
            <Hero.Title className='animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-10px]'>
              Linear is a better way <br /> to build products
            </Hero.Title>
            <Hero.Subtitle className='animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-10px]'>
              Meet the new standard for modern software development.
              <br className='hidden md:block' />
              Streamline issues, sprints, and product roadmaps.
            </Hero.Subtitle>
            <Button
              href='#'
              size='large'
              className='animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-10px]'
            >
              Get Started
              <Button.IconsWrapper>
                <ChevronIcon />
              </Button.IconsWrapper>
            </Button>
            <HeroImage />
          </Hero>
        </Container>
      </div>
      <Container>
        <Clients />
      </Container>
      <div
        className={classNames(
          "relative mask-radial-faded h-[60rem] my-[-12.8rem] overflow-hidden",
          "before:absolute before:opacity-[0.4] before:bg-radial-faded [--color:#7877C6] before:inset-0",
          "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,119,198,0.4)] after:bg-background"
        )}
      >
        <StarsIllustration />
      </div>
    </>
  );
}
