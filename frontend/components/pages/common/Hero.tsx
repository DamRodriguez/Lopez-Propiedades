"use client";
import SpaceX from "@/components/layout/SpaceX";
import MotionFade from "@/components/motion/MotionFade";
import MotionSlide from "@/components/motion/MotionSlide";
import Image from "next/image";

type HeroProps = {
  overline: string;
  title: string;
  backgroundImage: string;
  underTitleComponent?: React.ReactNode
}

const Hero = (props: HeroProps) => {
  return (
    <section className="relative min-h-[100svh] w-full overflow-visible">
      <div
        className="absolute inset-0 [clip-path:inset(0_0_0_0)] pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <div className="fixed inset-0 w-full h-[100lvh] transform-gpu">
          <Image
            src={props.backgroundImage}
            alt={`Imagen de ${props.title}`}
            sizes="100vw"
            fill
            className="object-cover bg-placeholder"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col justify-center min-h-[100svh] py-20">
        <SpaceX className="w-full text-white">
          <div className="max-w-[45rem] flex flex-col gap-[1.5rem] xl:gap-[3rem]">
            <div className="flex flex-col gap-[0.5rem] xl:gap-[1rem]">
              <MotionFade
                order={1}
                className="text-sm xl:text-base text-secondary-dark text-shadow-sm font-extrabold uppercase tracking-widest"
              >
                {props.overline}
              </MotionFade>
              <MotionSlide
                direction="down"
                order={0}
              >
                <h1 className="text-5xl xl:text-7xl text-soft-white font-extrabold text-shadow-sm leading-[3.2rem] xl:leading-[4.5rem]">
                  {props.title}
                </h1>
              </MotionSlide>
            </div>
            <MotionFade
              order={1}
            >
              {props.underTitleComponent}
            </MotionFade>
          </div>
        </SpaceX>
      </div>
    </section>
  );
};

export default Hero;