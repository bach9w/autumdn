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

export default async function Home({ searchParams }: HomeProps) {
  const filters = {
    year: searchParams.year || "2021",
    fuel: searchParams.fuel_type || "",
    manufacturer: searchParams.manufacturer || "",
    model: searchParams.model || "",
    page: searchParams.page || "",
  };

  return (
    <main className="overflow-hidden">
      <div className="h-full">
        <div className="min-h-screen">
          <HeroParallaxDemo />
          <div className="p-2 xl:mt-32">
            <SearchComponentFirst />
          </div>
        </div>
        <div className="padding-x padding-y max-width mt-12" id="discover">
          <div className="home__text-container p-2">
            <h1 className="text-4xl font-extrabold text-white">
              Каталог аукциони
            </h1>
            <p className="text-white">Наскоро добавени аукциони</p>
          </div>
        </div>
      </div>

      <Suspense fallback={<Loading />}>
        <div className="">
          <Cars filters={filters} />
        </div>
      </Suspense>
      <div className="mt-6 flex w-full items-start justify-center">
        <Link href="/auction">
          <Button>Разгледай всички аукциони</Button>
        </Link>
      </div>
    </main>
  );
}
