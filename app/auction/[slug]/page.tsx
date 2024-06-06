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
    setLoading(true);
    fetchCarDetails(slug).then((res) => {
      setData(res.data);
      setLoading(false);
    });
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
