"use client";
import classNames from "classnames";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

type Line = {
  id: string;
  direction: "to bottom" | "to right";
  duration: number;
  size: number;
};

const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const HeroImage = () => {
  const [lines, setLines] = useState<Line[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    const renderLine = (timeout: number) => {
      timeoutRef.current = setTimeout(() => {
        setLines((prevLines) => [
          ...prevLines,
          {
            id: `line-${Date.now()}`,
            direction: Math.random() > 0.5 ? "to bottom" : "to right",
            duration: generateRandomNumber(2000, 3500),
            size: generateRandomNumber(10, 30),
          },
        ]);
        renderLine(generateRandomNumber(800, 2500));
      }, timeout);
    };

    renderLine(generateRandomNumber(800, 1300));
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [setLines]);

  const removeLine = (id: string) => {
    setLines((prevLines) => prevLines.filter((line) => line.id !== id));
  };

  return (
    <div ref={ref} className='perspective-[2000px] mt-[12.8rem]'>
      <div
        className={classNames(
          "relative bg-hero-gradient border border-transparent-white bg-white/[0.01] rounded-lg",
          inView ? "animate-image-rotate" : "rotate-x-[25deg]",
          "before:h-full before:w-full before:top-0 before:left-0 before:absolute before:bg-hero-glow before:[filter:blur(120px)] before:opacity-0",
          inView && "before:animate-image-glow"
        )}
      >
        <div className='absolute top-0 left-0 z-20 w-full h-full'>
          {lines.map((line, index) => {
            return (
              <span
                onAnimationEnd={() => removeLine(line.id)}
                key={index}
                style={
                  {
                    "--direction": line.direction,
                    "--size": line.size,
                    "--animation-duration": `${line.duration}ms`,
                  } as CSSProperties
                }
                className={classNames(
                  "bg-glow-lines block absolute top-0 ",
                  line.direction === "to right" &&
                    `w-[calc(var(--size)*1rem)] h-[1px] left-0 animate-glow-line-horizontal`,
                  line.direction === "to bottom" &&
                    `h-[calc(var(--size)*1rem)] w-[1px] right-0 animate-glow-line-vertical`
                )}
              />
            );
          })}
        </div>
        <svg
          className={classNames(
            "absolute left-0 top-0 h-full w-full [&_path]:stroke-white [&_path]:[stroke-opacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]",
            inView && "[&_path]:animate-sketch-lines"
          )}
          width='100%'
          viewBox='0 0 1499 778'
          fill='none'
        >
          <path pathLength='1' d='M1500 72L220 72'></path>
          <path pathLength='1' d='M1500 128L220 128'></path>
          <path pathLength='1' d='M1500 189L220 189'></path>
          <path pathLength='1' d='M220 777L220 1'></path>
          <path pathLength='1' d='M538 777L538 128'></path>
        </svg>
        <img
          className={classNames(
            "relative z-10  transition-opacity delay-[680ms]",
            inView ? "opacity-100" : "opacity-0"
          )}
          src='/img/hero.webp'
          alt='Hero Image'
        />
      </div>
    </div>
  );
};
