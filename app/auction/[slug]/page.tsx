"use client";

import { fetchCarDetails } from "@app/api/cars";

import Loading from "@components/loading";
import { Suspense, useEffect, useState } from "react";
import { CarInfo } from "./CarInfo";

const Manufacture = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const [data, setData] = useState<{ id: string } | undefined>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      
      try {
        const response = await fetch(`/api/carByVin/${slug}`);
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.error);
        }
        setData(result.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  console.log(data);

  return (
    <Suspense fallback={<Loading />}>
      <div className="p-1 py-10">
        {loading && <Loading />}
        {data && <CarInfo data={data} />}
      </div>
    </Suspense>
  );
};

export default Manufacture;
