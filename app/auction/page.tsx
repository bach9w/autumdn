import React from "react";
import Cars from "./CarList";
import { fetchAuctionFilter } from "@app/api/cars";
import { HomeProps } from "@types";

export default async function Home({ searchParams }: HomeProps) {
  const filters = {
    minutes: "10",
    per_page: "30",
    status: "3",
    condition: "0",
    fuel_type: "1",
    year: "2020",
  };
  return (
    <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-2">
      <Cars filters={filters} />
    </div>
  );
}
