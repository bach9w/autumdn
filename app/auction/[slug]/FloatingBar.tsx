"use client";
import { BubbleButton } from "@components/components/buttons/BubbleButton";
import { GhostButton } from "@components/components/buttons/GhostButton";
import Button from "@components/CustomButton";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { SiAnswer } from "react-icons/si";
import { MessageCircleIcon, PhoneCall } from "lucide-react";

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

const FloatingAuction = () => {
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
            duration: 0.5,
          }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0 },
          }}
          className="fixed bottom-[45px] z-50 flex h-40 w-full justify-center bg-red-600/95"
        >
          <div className="flex h-full w-full justify-center">
            <GhostButton className="h-full w-full bg-white/20 uppercase text-black">
              <div className="flex items-center justify-center bg-white p-2 text-2xl">
                <button className="group relative h-20 w-full rounded bg-black py-2.5 font-semibold text-white transition-colors hover:bg-red-600/60 md:rounded-r-full">
                  <span className="font-bold"> Позвъни сега</span>
                  <span className="flex w-full items-center justify-center text-xl">
                    {" "}
                    <PhoneCall />
                  </span>
                  <Drip left="10%" height={24} delay={0.5} />
                  <Drip left="30%" height={20} delay={3} />
                  <Drip left="57%" height={10} delay={4.25} />
                  <div className="md:hidden">
                    <Drip left="85%" height={16} delay={1.5} />
                  </div>
                </button>{" "}
              </div>
            </GhostButton>
          </div>
          <div className="flex h-full w-full justify-center">
            <GhostButton className="w-full bg-white/20 uppercase text-black">
              <div className="flex items-center justify-center bg-white p-2 text-2xl">
                <button className="group relative h-20 w-full rounded bg-black py-2.5 font-semibold text-white transition-colors hover:bg-red-600/60 md:rounded-r-full">
                  <span className="font-bold"> Изпрати запитване</span>
                  <span className="flex w-full items-center justify-center text-xl">
                    {" "}
                    <MessageCircleIcon />
                  </span>
                  <Drip left="10%" height={24} delay={0.5} />
                  <Drip left="30%" height={20} delay={3} />
                  <Drip left="57%" height={10} delay={4.25} />
                  <div className="md:hidden">
                    <Drip left="85%" height={16} delay={1.5} />
                  </div>
                </button>{" "}
              </div>
            </GhostButton>
          </div>
        </motion.div>
      ) : (
        <div className="bottom-[45px] z-50 flex h-40 w-full justify-center bg-red-600/95">
          <div className="flex w-full justify-center">
            <GhostButton className="w-full bg-white/20 text-black">
              <div className="bg-white text-2xl">Запитване</div>
            </GhostButton>
          </div>
          <div className="flex w-full justify-center">
            <GhostButton className="w-full bg-white/20 text-black">
              Позвъни сега
            </GhostButton>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingAuction;
