"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";

import CustomButton from "@components/CustomButton";
import { useEffect, useRef } from "react";
import Button from "@components/CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("auctions");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="hero relative" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="padding-x z-50 m-4 flex-1 pt-36"
      >
        <h1 className="hero__title rounded-xl bg-black bg-opacity-40 text-center uppercase">
          Нови аукциони
        </h1>
      </motion.div>
      <div className="hero__image-container relative bottom-[400px] mb-[-350px] md:bottom-0 md:mb-[0px] xl:absolute xl:bottom-0">
        <div className="hero__image">
          <motion.div
            className="absolute bottom-[250px] sm:bottom-[200px]"
            whileInView={{
              opacity: 100,
              y: 50,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 2,
                duration: 2,
              },
            }}
            exit={{ opacity: 0, y: 0, scale: 0.6 }}
          >
            <Image
              className="z-20"
              src="/hero.png"
              height="4000"
              width="4000"
              alt="thumbnail"
            />
          </motion.div>
        </div>

        <div className="hero__image-overlay" />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 500 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 500 }}
        exit={{ opacity: 0, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hero__subtitle padding-x xl:mt-22 mt-12 w-full items-center justify-center text-center text-white xl:absolute xl:bottom-[-50px] xl:left-0 xl:z-50 xl:mx-auto xl:w-1/2"
      >
        Качваме всеки ден нови обяви на най-добри <b>цени</b>
      </motion.div>
    </div>
  );
};

export default Hero;
