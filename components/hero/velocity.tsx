import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";
import React, { useEffect, useRef } from "react";
import { FiArrowDown } from "react-icons/fi";

export const VelocityHero = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  const skewXRaw = useTransform(scrollVelocity, [-1, 1], ["45deg", "-45deg"]);
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -3000]);
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

  return (
    <section ref={targetRef} className="h-[5vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-between overflow-hidden">
        <ScrollArrow />
      </div>
    </section>
  );
};

const ScrollArrow = () => {
  return (
    <>
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-xs lg:block">
        <span
          style={{
            writingMode: "vertical-lr",
            color: "white",
            fontSize: "1.25rem",
          }}
        >
          СКРОЛ
        </span>
        <FiArrowDown className="mx-auto" color="white" size={20} />
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs lg:block">
        <span
          style={{
            writingMode: "vertical-lr",
            color: "white",
            fontSize: "1.25rem",
          }}
        >
          SCROLL
        </span>
        <FiArrowDown className="mx-auto" size={20} color="white" />
      </div>
    </>
  );
};
