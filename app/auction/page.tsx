import React from "react";
import Cars from "./CarList";
import { fetchAuctionFilter } from "@app/api/cars";
import { HomeProps } from "@types";
import { Button } from "@components/ui/button";
import Pagination from "./components/Pagination";
import StickySearchForm from "@components/search/sticky-search";

export default async function Home({ searchParams }: HomeProps) {
  const filters = {
    per_page: "20",
    status: searchParams.status || "3",

    fuel: searchParams.fuel_type || "",
    year: searchParams.year || "",
    manufacturer: searchParams.manufacturer || "",
    model: searchParams.model || "",
    page: searchParams.page || "",
    sale_date_in_days: "7",
  };
  return (
    <>
      <div className="flex h-full w-full items-center justify-center">
        <section id="auctions" className="w-[100%]">
          <StickySearchForm />
        </section>
      </div>
      <div className="mt-2 overflow-x-hidden">
        <Cars filters={filters} />
        <div className="">
          <Pagination page={filters.page} />
        </div>
      </div>
    </>
  );
}
