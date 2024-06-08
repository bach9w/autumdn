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

export default async function Home({ searchParams }: HomeProps) {
  const filters = {
    year: searchParams.year || "",
    fuel: searchParams.fuel || "",
  };

  return (
    <main className="overflow-hidden">
      <div className="h-full">
        <HeroParallaxDemo />
        <div className="padding-x padding-y max-width mt-12" id="discover">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold text-white">
              Каталог аукциони
            </h1>
            <p className="text-white">Наскоро добавени аукциони</p>
          </div>

          <section id="auctions" className="home__filters">
            <SearchBar />

            <div className="home__filter-container mt-2">
              <CustomFilter title="fuel" options={fuels} />
              <CustomFilter title="year" options={yearsOfProduction} />
            </div>
          </section>
        </div>
      </div>

      <Suspense fallback={<Loading />}>
        <div className="grid h-full grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
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
