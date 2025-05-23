import { Container } from "../components/container";
import { Hero } from "../components/hero";

export default function Home() {
  return (
    <Container className='pt-[6.4rem]'>
      <Hero>
        <Hero.Title>
          Linear is a better way <br /> to build products
        </Hero.Title>
        <Hero.Subtitle>
          Meet the new standard for modern software development.{" "}
          <br className='hidden md:block' />
          Streamline issues, sprints, and product roadmaps.
        </Hero.Subtitle>
        <img src='/img/hero.webp' alt='' />
      </Hero>
    </Container>
  );
}
