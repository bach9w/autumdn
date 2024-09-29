"use client";
import { GradientGrid } from "./GradientGrid";
import { Beams } from "../utils/Beams";
import { Content } from "./Content";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden shadow-lg shadow-background drop-shadow-md">
      <Content />
      <Beams />
      <GradientGrid />
    </section>
  );
};
