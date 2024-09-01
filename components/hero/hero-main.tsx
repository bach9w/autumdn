"use client";

import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import NalichniPage from "@app/nalichni/page";
import { Card } from "@components/ui/card";
import { cn } from "@lib/utils";
import useSWR, { Fetcher } from "swr";
import { useFormatDate } from "@hooks/useFormatData";
import { VelocityHero } from "./velocity";

import { USFlag, CanadaFlag } from "./usa-flag";

const SmoothScrollHero = () => {
  const currentDate = new Date();
  const formattedDate = useFormatDate(currentDate);

  return (
    <div className="bg-black/20">
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
      >
        <VelocityHero />
        <Hero />
      </ReactLenis>
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
      <SiSpacex className="text-3xl mix-blend-difference" />
      <button
        onClick={() => {
          document.getElementById("launch-schedule")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1 text-xs text-zinc-400"
      >
        LAUNCH SCHEDULE <FiArrowRight />
      </button>
    </nav>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full rounded-lg"
    >
      <CenterImage />

      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const CenterImage = () => {
  const { scrollY } = useScroll();
  const { data, isLoading, error } = useSWR(
    "/api/searchNumber?sortDirection=desc",
    fetcher,
  );

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"],
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0],
  );

  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    if (data && data.data && data.data.length > 0) {
      setRandomNumber(Math.floor(Math.random() * data.data.length));
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <>
      {data && data.data[randomNumber] && (
        <>
          <motion.div
            className="absolute flex w-full items-center justify-center text-xl font-bold text-white lg:text-5xl"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5 },
            }}
          >
            <div className="col grid grid-cols-2 gap-x-4">
              <div className="col-span-2 text-center"> ВНОС НА АВТОМОБИЛИ</div>
              <div className="col-span-2 text-center"> ОТ</div>

              <CanadaFlag />
              <USFlag />
            </div>
          </motion.div>

          <motion.div
            className="sticky top-0 h-screen w-full"
            style={{
              clipPath,
              backgroundSize,
              opacity,
              backgroundImage: `url(${data.data[randomNumber].lots[0].images.big[0]})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </>
      )}
    </>
  );
};

const ParallaxImages = () => {
  const nalichni = useQuery(api.cars.getAddAvailableCars);
  console.log(nalichni);

  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://vis.iaai.com/deepzoom?imageKey=39982276~SID~B440~S0~I1~RW2576~H1932~TH0&level=12&x=0&y=0&overlap=0&tilesize=5000"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="https://wandering-bison-612.convex.cloud/api/storage/763c74e6-9f2a-44f7-b7e0-797191f7914e"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3 drop-shadow-lg"
      />
      <ParallaxImg
        src="https://vis.iaai.com/deepzoom?imageKey=39999819~SID~B440~S0~I1~RW2576~H1932~TH0&level=12&x=0&y=0&overlap=0&tilesize=5000"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />

      <ParallaxImg
        src="https://wandering-bison-612.convex.cloud/api/storage/76f26ea0-54f6-472a-8203-6bc2f65d613e"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({
  className,
  alt,
  src,
  start,
  end,
}: {
  className?: string;
  alt: string;
  src: string;
  start: number;
  end: number;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // @ts-ignore
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={cn("relative h-full w-full", className)}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

export default SmoothScrollHero;
