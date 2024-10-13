import React from "react";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiTiktok, SiTwitter, SiYoutube } from "react-icons/si";
import Image from "next/image";
import { Button } from "@components/ui/button";
import ReactWhatsapp from "react-whatsapp";
import { MessageCircleQuestionIcon, PhoneCall } from "lucide-react";

export const RevealBento = () => {
  return (
    <div className="min-h-screen px-4 py-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <Block className="col-span-12 items-center justify-center md:col-span-9">
          <div className="grid items-center justify-center md:grid-cols-2">
            <Button
              className="inline-flex h-[40px] animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#220103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              variant="outline"
              size="sm"
            >
              <a
                className="flex animate-pulse items-center justify-center gap-1"
                href="tel:+359876995555"
              >
                Получи информация <PhoneCall className="h-4 w-4" />
              </a>
            </Button>

            <Button
              className="inline-flex h-[40px] animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#220103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              size="sm"
            >
              <ReactWhatsapp
                className="flex animate-pulse items-center justify-center gap-1"
                element="webview"
                number="+359876995555"
                message={`Здравейте, интересувам се от закупуването на автомобил от Myride.bg`}
              >
                Изпрати запитване{" "}
                <MessageCircleQuestionIcon className="h-4 w-4" />
              </ReactWhatsapp>
            </Button>
          </div>
        </Block>
      </motion.div>
    </div>
  );
};

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className,
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="/myride_logo.png"
      alt="avatar"
      className="size-14 mb-4 rounded-full"
    />
    <h1 className="mb-12 flex flex-col text-4xl font-medium leading-tight">
      MYRIDE.bg
      <span className="text-zinc-400">Услуги от нас за вас</span>
    </h1>
    <a
      href="#"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Свържете се с нас <FiArrowRight />
      <br />
    </a>
    Ул. Лазар Михайлов 65, гр. София
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-12 border-0 bg-zinc-800 text-center uppercase md:col-span-6"
    >
      <a
        href="#"
        className="grid h-full place-content-center gap-4 text-3xl text-white"
      >
        Поръчка и доставка на автомобил от Америка или Канада
        <b className="bg-orange-600 text-sm">УСЛУГИ С ПЪТНА ПОМОЩ</b>
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-12 border-0 bg-zinc-800 text-center uppercase md:col-span-6"
    >
      <a
        href="#"
        className="grid h-full place-content-center gap-4 text-3xl text-white"
      >
        ОТРЕМОНТИРАНЕ НА АВТОМОБИЛ В НАШИТЕ СЕРВИЗИ
        <ul className="rounded bg-orange-600 text-sm">
          <li>сменяване на стопове от американски към европейски</li>
          <li>технотест</li>
          <li>екстериорен тунинг</li>
          <li>интериорен тунинг</li>
          <li>изчистване на историята на автомобила</li>
        </ul>
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 flex flex-col text-3xl leading-snug">
    <p>Освен нашите услуги</p>
    <span className="text-zinc-400">
      Ние предлагаме складиране и препродажба на закупеният от вас автомобил.
    </span>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">
      {" "}
      Ул. Лазар Михайлов 65
      <br /> гр. София
    </p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg">Join my mailing list</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <FiMail /> Join the list
      </button>
    </form>
  </Block>
);

const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
        Made with ❤️ by{" "}
        <a href="#" className="text-red-300 hover:underline">
          @tomisloading
        </a>
      </p>
    </footer>
  );
};
