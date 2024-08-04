"use client";

import { fetchCarDetails } from "@app/api/cars";

import Loading from "@components/loading";
import { Suspense, useEffect, useState } from "react";
import { CarInfo } from "./CarInfo";
import Video360 from "./Video360";
import useSWR from "swr";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const Manufacture = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const [loading, setLoading] = useState(false);

  const { data, error, isLoading } = useSWR(`/api/carByVin/${slug}`, fetcher);

  if (error) return "An error has occurred.";
  if (isLoading) return <Loading />;

  return (
    <Suspense fallback={<Loading />}>
      <div className="min-h-screen overflow-y-hidden p-1 py-10">
        {data && <CarInfo data={data.data} />}
      </div>
    </Suspense>
  );
};

export default Manufacture;
