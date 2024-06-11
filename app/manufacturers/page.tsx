"use client";
import React, { useEffect, useState, Suspense, lazy } from "react";

import { fetchManufacturers } from "@app/api/cars";
import { Card, CardDescription, CardHeader } from "@components/ui/card";
import { cn } from "@lib/utils";
import Loading from "@components/loading";
import { useRouter } from "next/navigation";

const Manufacturers = () => {
  const [manufacturers, setManufacturers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/manufacturer`, { cache: "no-store" });
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.error);
        }
        setManufacturers(result.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="min-h-screen w-full">
        {loading && <Loading />}
        <div className="fixed flex w-full justify-center rounded-b-xl bg-[#D07B20] bg-opacity-100 text-2xl font-bold uppercase text-black">
          Марки автомобили
        </div>
        <Suspense fallback={<Loading />}>
          <div className="mt-2 grid grid-cols-2 gap-4 p-4 py-10 md:grid-cols-3">
            {manufacturers.map((manufacturer: any) => (
              <div
                key={manufacturer.id}
                className={cn(manufacturer.image ? "flex p-1" : "hidden")}
                onClick={() => {
                  router.push(`/manufacturers/${manufacturer.id}`);
                }}
              >
                <Card className="flex h-[200px] w-full flex-col items-center justify-center">
                  <CardHeader>
                    <p>{manufacturer.name}</p>
                  </CardHeader>
                  <CardDescription>
                    <img
                      width={100}
                      height={100}
                      src={manufacturer.image}
                      alt={manufacturer.name}
                    />
                  </CardDescription>
                </Card>
              </div>
            ))}
          </div>
        </Suspense>
      </div>
    </>
  );
};

export default Manufacturers;
