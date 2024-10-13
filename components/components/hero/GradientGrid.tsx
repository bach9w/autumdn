import React from "react";
import { motion } from "framer-motion";

export const GradientGrid = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
      }}
      className="absolute inset-0 z-0"
    >
      <div className="bg-grid-red-900/50 absolute inset-0 z-0" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950/0 to-zinc-950" />
    </motion.div>
  );
};
