"use client";

import { fetchCarByManufacturer } from "@app/api/cars";
import CarCard from "@app/auction/CarCard";
import Loading from "@components/loading";
import { Button } from "@components/ui/button";
import { Card } from "@components/ui/card";
import { cn } from "@lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const Manufacture = ({ params }: { params: { slug: any } }) => {
  const { slug } = params;

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      if (slug.length === 1) {
        try {
          const response = await fetch(`/api/models/${slug[0]}`, {
            next: { revalidate: 600 },
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
      } else if (slug.length === 2) {
        try {
          const response = await fetch(
            `/api/cars?per_page=50&manufacturer=${slug[0]}&model=${slug[1]}&page=1`,
            {
              next: { revalidate: 3600 },
            },
          );

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
    }

    fetchData();
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      {loading && <Loading />}
      <div className="min-h-screen">
        <Button
          variant="outline"
          size="icon"
          className="mb-2 ml-5 mt-5 h-7 w-7"
        >
          <ChevronLeft
            className="h-4 w-4"
            onClick={() => {
              window.history.back();
            }}
          />
          <span className="sr-only">Назад</span>
        </Button>
        {slug[0] && (
          <div
            className={cn(
              "grid grid-cols-2 items-center justify-center gap-2 overflow-x-hidden p-4 py-10 text-center md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5",
              slug[1] && "hidden",
            )}
          >
            {data &&
              data.map((models: any) => {
                return (
                  <div key={models.id}>
                    <div
                      onClick={() => {
                        router.push(`/manufacturers/${slug}/${models.id}`);
                      }}
                    >
                      <Card
                        className="flex min-h-[100px] cursor-pointer items-center justify-center rounded-lg bg-gray-100 text-2xl shadow-lg"
                        key={models.id}
                      >
                        {models.name}
                      </Card>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
        {slug[0] && slug[1] && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {data &&
              Array.isArray(data) &&
              data
                .filter((car: any) => car.lots)
                .map((car: any) => (
                  <div className="-ml-5 -mr-5 overflow-x-hidden" key={car.id}>
                    <CarCard car={car} />
                  </div>
                ))}
          </div>
        )}
      </div>
    </Suspense>
  );
};

export default Manufacture;

/*
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
      */