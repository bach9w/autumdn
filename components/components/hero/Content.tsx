import { FiArrowRight } from "react-icons/fi";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { motion } from "framer-motion";
import { SplashButton } from "../buttons/SplashButton";
import { GhostButton } from "../buttons/GhostButton";
import { GlowingChip } from "../utils/GlowingChip";
import { useRouter } from "next/navigation";

export const Content = () => {
  return (
    <MaxWidthWrapper className="relative z-20 flex flex-col items-center justify-center pb-12 pt-24 md:pb-36 md:pt-36">
      <motion.div
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <GlowingChip>
          <img
            src="/myride_logo.png"
            className="h-full w-full drop-shadow-[5px_5px_5px_rgba(223,0,0,0.5)] filter hover:drop-shadow-[5px_5px_5px_rgba(223,0,0,2.5)]"
            alt=""
          />
        </GlowingChip>
      </motion.div>

      <motion.p
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          delay: 0.5,
          ease: "easeInOut",
        }}
        className="mb-9 max-w-2xl text-center text-base text-zinc-100 sm:text-lg md:text-xl"
      >
        ГОЛЯМ ИЗБОР ОТ НАЛИЧНИ АУКЦИОНИ 24 ЧАСА В ДЕНОНОЩИЕТО.
      </motion.p>
    </MaxWidthWrapper>
  );
};
