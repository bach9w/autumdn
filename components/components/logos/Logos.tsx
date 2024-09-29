"use client";
import { motion } from "framer-motion";
import React from "react";
import { IconType } from "react-icons";
import {
  SiBmw,
  SiAudi,
  SiMercedes,
  SiAstonmartin,
  SiFerrari,
  SiPorsche,
  SiRenault,
  SiFord,
  SiLamborghini,
  SiSubaru,
  SiVolvo,
  SiVolkswagen,
  SiJaguar,
  SiLandrover,
  SiMaserati,
  SiToyota,
  SiHonda,
  SiHyundai,
  SiMazda,
  SiTesla,
} from "react-icons/si";

export const Logos = () => {
  return (
    <div className="relative -mt-2 -rotate-1 scale-[1.01] border-y-2 border-zinc-900 bg-white">
      <div className="relative z-0 flex overflow-hidden border-b-2 border-zinc-900">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="relative z-0 flex overflow-hidden">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-32 bg-gradient-to-r from-white to-white/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-32 bg-gradient-to-l from-white to-white/0" />
    </div>
  );
};

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: JSX.Element;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon, name }: { Icon: IconType; name: string }) => {
  return (
    <span className="flex items-center justify-center gap-4 px-4 py-2 md:py-4">
      <Icon className="text-2xl text-red-600 md:text-3xl" />
      <span className="whitespace-nowrap text-xl font-semibold uppercase md:text-2xl">
        {name}
      </span>
    </span>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem Icon={SiBmw} name="BMW" />
    <LogoItem Icon={SiAudi} name="AUDI" />
    <LogoItem Icon={SiMercedes} name="MERCEDES" />
    <LogoItem Icon={SiAstonmartin} name="ASTON MARTIN" />
    <LogoItem Icon={SiFerrari} name="FERARRI" />
    <LogoItem Icon={SiPorsche} name="PORSCHE" />
    <LogoItem Icon={SiRenault} name="RENAULT" />
    <LogoItem Icon={SiFord} name="FORD" />
    <LogoItem Icon={SiLamborghini} name="LAMBORHINI" />
    <LogoItem Icon={SiSubaru} name="SUBARU" />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem Icon={SiVolvo} name="VOLVO" />
    <LogoItem Icon={SiVolkswagen} name="VOLKSWAGEN" />
    <LogoItem Icon={SiJaguar} name="JAGUAR" />
    <LogoItem Icon={SiLandrover} name="LANDROVER" />
    <LogoItem Icon={SiMaserati} name="MASERATI" />
    <LogoItem Icon={SiToyota} name="TOYOTA" />
    <LogoItem Icon={SiHonda} name="HONDA" />
    <LogoItem Icon={SiHyundai} name="HYUNDAI" />
    <LogoItem Icon={SiMazda} name="MAZDA" />
    <LogoItem Icon={SiTesla} name="TESLA" />
  </>
);
