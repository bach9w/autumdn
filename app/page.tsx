"use client";
import { Hero } from "@components/components/hero/Hero";
import CarCard from "@components/CarCard";
import SearchBar from "@components/Searchbar";
import CustomFilter from "@components/CustomFilter";

import ShowMore from "@components/ShowMore";
import { HeroParallaxDemo } from "@components/Parallax";
import { ThreeDCard } from "@components/Hero-2";
import Cars from "./auction/CarList";
import { Button } from "@components/ui/button";
import Link from "next/link";
import Loading from "@components/loading";
import { Suspense, useEffect, useState } from "react";
import Cookie from "@components/bottom/cookie/Cookie";
import SearchComponentFirst from "@components/search/first-search";
import NalichniPage from "./nalichni/page";
import SmoothScrollHero from "@components/hero/hero-main";
import LenisProvider from "@providers/lenis-client";
import { Logos } from "@components/components/logos/Logos";
import { Stats } from "@components/components/features/stats/Stats";
import BasicFAQ from "@components/faq/faq-basic";

export default function Home() {
  const [searchParams, setSearchParams] = useState<URLSearchParams | null>(
    null,
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearchParams(params);
  }, []);

  const filters = {
    year: searchParams?.get("year") || "",
    fuel: searchParams?.get("fuel_type") || "",
    manufacturer: searchParams?.get("manufacturer") || "",
    model: searchParams?.get("model") || "",
    page: searchParams?.get("page") || "",
    status: "3",
    buy_now: "1",
    generation: searchParams?.get("generation") || "",
    from_year: searchParams?.get("from_year") || "2022",
    to_year: searchParams?.get("to_year") || "2024",
  };
  return (
    <main className="">
      <LenisProvider>
        <div className="overflow-hidden bg-red-500/60">
          <Hero />
          <Logos />
        </div>

        <div className="h-full">
          <div className="gap-y-2 space-y-2 p-2 xl:mt-2">
            <Stats />
            <SearchComponentFirst />
          </div>
        </div>

        <Suspense fallback={<Loading />}>
          <div className="">
            <Cars filters={filters} />
          </div>
        </Suspense>
        <div className="mt-6 flex w-full items-start justify-center">
          <Link href="/auction">
            <Button className="text-md bg-[#2f3ccf]/80 font-bold uppercase hover:bg-[#2f3ccf]">
              Разгледай всички аукциони
            </Button>
          </Link>
        </div>
        <div className="mt-2">
          <BasicFAQ />
        </div>
      </LenisProvider>
    </main>
  );
}
