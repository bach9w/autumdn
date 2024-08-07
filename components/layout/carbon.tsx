"use client";
import React from "react";
import { motion } from "framer-motion";
import svgToTinyDataUri from "mini-svg-data-uri";

const carbonBackgroundSVG = svgToTinyDataUri(`
  <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
    <rect width="5" height="5" fill="#333"/>
    <rect x="5" y="5" width="5" height="5" fill="#333"/>
    <rect x="5" width="5" height="5" fill="#444"/>
    <rect y="5" width="5" height="5" fill="#444"/>
  </svg>
`);

const CarbonBackgroundComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      className="h-full min-h-screen w-full"
      style={{
        backgroundImage: `url("${carbonBackgroundSVG}")`,
        backgroundRepeat: "repeat",
      }}
    >
      <div className="h-full">{children}</div>
    </motion.div>
  );
};

export default CarbonBackgroundComponent;
