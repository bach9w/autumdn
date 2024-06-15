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
    year: "2022",
    sale_date_in_days: "7",
  };
  return (
    <div className="">
      <Cars filters={filters} />
    </div>
  );
}
