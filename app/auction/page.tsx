import React from "react";
import Cars from "./CarList";
import { fetchAuctionFilter } from "@app/api/cars";
import { HomeProps } from "@types";
import { Button } from "@components/ui/button";
import Pagination1 from "./components/Pagination";
import StickySearchForm from "@components/search/sticky-search";

export default async function Home({ searchParams }: HomeProps) {
  const filters = {
    per_page: "16",
    status: searchParams.status || "3",

    fuel: searchParams.fuel_type || "",
    year: searchParams.year || "",
    manufacturer: searchParams.manufacturer || "",
    model: searchParams.model || "",
    page: searchParams.page || "",
    sale_date_in_days: "7",
    from_year: searchParams.from_year || "",
    to_year: searchParams.to_year || "",
  };
  return (
    <>
      <div className="sticky top-0 z-30 flex h-[50px] w-full items-end justify-start rounded bg-white">
        <StickySearchForm />
      </div>
      <div className="mt-2 overflow-x-hidden">
        <Cars filters={filters} />
        <div className="mt-2">
          <Pagination1 page={filters.page} />
        </div>
      </div>
    </>
  );
}
