import React from "react";
import Cars from "./CarList";
import { fetchAuctionFilter } from "@app/api/cars";
import { HomeProps } from "@types";

export default async function Home({ searchParams }: HomeProps) {
  const filters = {
    per_page: "30",
    status: searchParams.status || "3",

    fuel: searchParams.fuel_type || "",
    year: searchParams.year || "",
    manufacturer: searchParams.manufacturer || "",
    model: searchParams.model || "",
    page: searchParams.page || "",
    sale_date_in_days: "7",
  };
  return (
    <div className="">
      <Cars filters={filters} />
    </div>
  );
}
