"use client";

import { fetchCarDetails } from "@app/api/cars";
import CarDetails from "./CarDetails";
import Loading from "@components/loading";
import { Suspense, useEffect, useState } from "react";

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
      <div className="p-4 py-10">
        {loading && <Loading />}
        {data && <CarDetails car={data} />}
      </div>
    </Suspense>
  );
};

export default Manufacture;
