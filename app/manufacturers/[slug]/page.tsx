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
    async function fetchData() {
      try {
        const response = await fetch(`/api/cars?manufacturer=${slug}`, {
          cache: "no-store",
        });
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
  return (
    <Suspense fallback={<Loading />}>
      {loading && <Loading />}
      <Button variant="outline" size="icon" className="mb-2 ml-5 mt-5 h-7 w-7">
        <ChevronLeft
          className="h-4 w-4"
          onClick={() => {
            window.history.back();
          }}
        />
        <span className="sr-only">Назад</span>
      </Button>
      <div className="grid grid-cols-1 overflow-x-hidden p-4 py-10 md:grid-cols-2 xl:grid-cols-3">
        {data &&
          Array.isArray(data) &&
          data.map(
            (car: any) =>
              car.lots &&
              car.lots[0] &&
              car.lots[0].images &&
              car.lots[0].sale_date !== null &&
              car.lots[0].damage &&
              car.lots[0].damage.main &&
              car.lots[0].images?.normal && (
                <div
                  key={car.id}
                  className="-ml-10 -mr-10 mb-[25px] md:-ml-0 md:-mr-0"
                >
                  <CarCard car={car} />
                </div>
              ),
          )}
      </div>
    </Suspense>
  );
};

export default Manufacture;
