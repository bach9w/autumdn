"use client";
import React, { useEffect, useState, useMemo } from "react";

import CarCard from "./CarCard";

import Loading from "@components/loading";

import { useFormatDate } from "@hooks/useFormatData";
import useSWR from "swr";
import NewCard from "./components/NewCard";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

function Cars({ filters }: { filters: any }) {
  const currentDate = new Date();
  const formattedDate = useFormatDate(currentDate);

  const query = new URLSearchParams(filters);
  if (filters.page) {
    query.set("page", filters.page);
  }

  const { data, error, isLoading } = useSWR(
    `/api/cars?${query.toString()}&status=3&buy_now=1&sale_date_from=${formattedDate}&sale_date_in_days=10`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 60000,
      refreshInterval: 300000,
    },
  );

  if (error) return "Изникна грешка, моля презаредете страницата.";
  if (isLoading) return <Loading />;

  return (
    <>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {data?.data.map((car: any) => (
          <div className="overflow-x-hidden p-2" key={car.id}>
            <NewCard card={car} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Cars;
