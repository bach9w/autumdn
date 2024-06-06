"use client";
import React, { useEffect, useState, Suspense, lazy } from "react";

import { fetchManufacturers } from "@app/api/cars";
import { Card, CardDescription, CardHeader } from "@components/ui/card";
import { cn } from "@lib/utils";
import Loading from "@components/loading";

const Manufacturers = () => {
  const [manufacturers, setManufacturers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchManufacturers().then((res) => {
      setManufacturers(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <div className="min-h-screen w-full">
        {loading && <Loading />}
        <div className="fixed flex w-full justify-center rounded-b-xl bg-[#D07B20] bg-opacity-100 text-2xl font-bold uppercase text-black">
          Марки автомобили
        </div>
        <Suspense fallback={<Loading />}>
          <div className="grid grid-cols-2 p-4 py-10 md:grid-cols-3">
            {manufacturers.map((manufacturer: any) => (
              <div
                key={manufacturer.id}
                className={cn(manufacturer.image ? "flex p-1" : "hidden")}
                onClick={() => {
                  window.location.href = `/manufacturers/${manufacturer.id}`;
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
