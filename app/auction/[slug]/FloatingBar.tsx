"use client";
import { BubbleButton } from "@components/components/buttons/BubbleButton";
import { GhostButton } from "@components/components/buttons/GhostButton";
import Button from "@components/CustomButton";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { AnimatePresence, motion } from "framer-motion";
import { SiAnswer } from "react-icons/si";
import {
  MessageCircleIcon,
  MessageCircleQuestionIcon,
  PhoneCall,
} from "lucide-react";
import ReactWhatsapp from "react-whatsapp";

interface DripProps {
  left: string;
  height: number;
  delay: number;
}

const Drip = ({ left, height, delay }: DripProps) => {
  return (
    <motion.div
      className="absolute top-[99%] origin-top"
      style={{
        left,
      }}
      initial={{ scaleY: 0.75 }}
      animate={{ scaleY: [0.75, 1, 0.75] }}
      transition={{
        duration: 2,
        times: [0, 0.25, 1],
        delay,
        ease: "easeIn",
        repeat: Infinity,
        repeatDelay: 2,
      }}
    >
      <div
        style={{ height }}
        className="w-2 rounded-b-full bg-black transition-colors group-hover:bg-black"
      />
      <svg
        width="6"
        height="6"
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-full top-0"
      >
        <g clipPath="url(#clip0_1077_28)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
            className="fill-black transition-colors group-hover:fill-black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
            className="fill-black transition-colors group-hover:fill-black"
          />
        </g>
        <defs>
          <clipPath id="clip0_1077_28">
            <rect width="6" height="6" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <svg
        width="6"
        height="6"
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-full top-0 rotate-90"
      >
        <g clipPath="url(#clip0_1077_28)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
            className="fill-black transition-colors group-hover:fill-black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
            className="fill-black transition-colors group-hover:fill-black"
          />
        </g>
        <defs>
          <clipPath id="clip0_1077_28">
            <rect width="6" height="6" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <motion.div
        initial={{ y: -8, opacity: 1 }}
        animate={{ y: [-8, 50], opacity: [1, 0] }}
        transition={{
          duration: 2,
          times: [0, 1],
          delay,
          ease: "easeIn",
          repeat: Infinity,
          repeatDelay: 2,
        }}
        className="absolute top-full h-2 w-2 rounded-full bg-black transition-colors group-hover:bg-black"
      />
    </motion.div>
  );
};

const FloatingAuction = ({ vin }: { vin: string }) => {
  const router = useRouter();
  const user = useUser();
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 20) {
        // Скрива се при скрол надолу, ако е над 500
        if (window.scrollY > lastScrollY) {
          setShowNav(false);
        } else {
          setShowNav(true);
        }
      } else {
        // Винаги се показва, ако е под 500
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);
  return (
    <>
      <AnimatePresence>
        {showNav ? (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            exit={{
              opacity: 0,
              y: -20,
              transition: { duration: 0 },
            }}
            className="fixed bottom-[0%] z-50 flex h-20 w-full justify-center"
          >
            <button className="group relative flex w-full items-center justify-center gap-2 bg-black p-2 font-semibold text-white transition-colors hover:bg-blue-600 md:rounded-r-full">
              <a
                className="flex animate-pulse items-center justify-center gap-1"
                href="tel:+359876995555"
              >
                Получи информация <PhoneCall className="h-4 w-4" />
              </a>
            </button>{" "}
            <button className="group relative flex w-full items-center justify-center bg-black p-2 font-semibold text-white transition-colors hover:bg-blue-600 md:rounded-r-full">
              <ReactWhatsapp
                className="flex animate-pulse items-center justify-center gap-1"
                element="webview"
                number="+359876995555"
                message={`Здравейте, интересувам се от автомил с VIN: ${vin} , https://myride.bg/auction/${vin}`}
              >
                Изпрати запитване{" "}
                <MessageCircleQuestionIcon className="h-4 w-4" />
              </ReactWhatsapp>
            </button>{" "}
          </motion.div>
        ) : (
          <div className=""></div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingAuction;
