"use client";

import { fetchCarByManufacturer } from "@app/api/cars";
import CarCard from "@app/auction/CarCard";
import Loading from "@components/loading";
import { Button } from "@components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Suspense, useEffect, useState } from "react";

const Manufacture = ({ params }: { params: { slug: number } }) => {
  const { slug } = params;
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCarByManufacturer(slug).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      <div className="grid grid-cols-1 p-4 py-10 md:grid-cols-2">
        <Button variant="outline" size="icon" className="mb-2 h-7 w-7">
          <ChevronLeft
            className="h-4 w-4"
            onClick={() => {
              window.history.back();
            }}
          />
          <span className="sr-only">Назад</span>
        </Button>
        {loading && <Loading />}
        {data &&
          Array.isArray(data) &&
          data.map(
            (car: any) =>
              car.lots &&
              car.lots[0] &&
              car.lots[0].images &&
              car.lots[0].sale_date !== null &&
              car.lots[0].images?.normal && (
                <div key={car.id}>
                  <CarCard car={car} />
                </div>
              ),
          )}
      </div>
    </Suspense>
  );
};

export default Manufacture;
