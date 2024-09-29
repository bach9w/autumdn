"use client";
import { Hero } from "@components/components/hero/Hero";
import ReactLenis from "lenis/dist/lenis-react";

const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
      >
        {children}
      </ReactLenis>
    </div>
  );
};

export default LenisProvider;
