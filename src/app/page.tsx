import { Button } from "../components/button";
import { Container } from "../components/container";
import { Hero } from "../components/hero";
import { HeroImage } from "../components/hero-image";
import { ChevronIcon } from "../components/icons/chevron";

export default function Home() {
  return (
    <Container className='pt-[6.4rem] py-[6.4rem]'>
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
  );
}
