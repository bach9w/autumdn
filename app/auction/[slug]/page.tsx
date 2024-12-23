"use client";

import { fetchCarDetails } from "@app/api/cars";

import Loading from "@components/loading";
import { Suspense, useEffect, useState } from "react";
import { CarInfo } from "./CarInfo";
import Video360 from "./Video360";
import useSWR from "swr";
import FloatingAuction from "./FloatingBar";
import Similiar from "./Similiar";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const Manufacture = ({ params }: { params: { slug: string } }) => {
  useEffect(() => {
    document.body.style.overflow = "scroll";
  }, []);
  const { slug } = params;

  const [loading, setLoading] = useState(false);

  const { data, error, isLoading } = useSWR(`/api/carByVin/${slug}`, fetcher);

  if (error) return "An error has occurred.";
  if (isLoading) return <Loading />;

  return (
    <Suspense fallback={<Loading />}>
      <FloatingAuction vin={params.slug} />
      <div
        id="myDIV"
        className="myDIV h-full min-h-screen w-full bg-black/40 py-5"
      >
        {data && <CarInfo data={data.data} />}
      </div>
    </Suspense>
  );
};

export default Manufacture;
