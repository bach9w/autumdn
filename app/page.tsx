import { fetchAuctionFilter } from "@/app/api/cars";
import { HomeProps } from "@types";
import { fuels, yearsOfProduction } from "@constants";
import Hero from "@components/Hero";
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
import { Suspense } from "react";
import Cookie from "@components/bottom/cookie/Cookie";
import SearchComponentFirst from "@components/search/first-search";
import NalichniPage from "./nalichni/page";
import SmoothScrollHero from "@components/hero/hero-main";
import LenisProvider from "@providers/lenis-client";

export default async function Home({ searchParams }: HomeProps) {
  const filters = {
    year: searchParams.year || "",
    fuel: searchParams.fuel_type || "",
    manufacturer: searchParams.manufacturer || "",
    model: searchParams.model || "",
    page: searchParams.page || "",
    status: "3",
    buy_now: "1",
    generation: searchParams.genaration || "",
    from_year: searchParams.from_year || "2022",
    to_year: searchParams.to_year || "2024",
  };

  return (
    <main className="">
      <LenisProvider>
        <div>
          <SmoothScrollHero />
        </div>
        <div className="h-full">
          <div className="p-2 xl:mt-2">
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
      </LenisProvider>
    </main>
  );
}
