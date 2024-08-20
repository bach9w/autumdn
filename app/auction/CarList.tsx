"use client";
import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

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
    `/api/searchNumber?${query.toString()}&status=3buy_now=1&sale_date_from=${formattedDate}`,
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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {data?.data.map((car: any) => (
          <div className="overflow-x-hidden p-2" key={car.id}>
            <NewCard card={car} />
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default Cars;
