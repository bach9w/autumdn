"use client";

import { CardMain } from "./components/card";
import { Card } from "@components/ui/card";
import { api } from "@convex/_generated/api";
import { useQuery } from "convex/react";

const Page = () => {
  const cars = useQuery(api.cars.getAvailableCars);

  return (
    <section className="min-h-screen">
      <div className="py-10 text-center text-2xl font-bold uppercase text-white drop-shadow-lg">
        Налични автомобили
      </div>
      <div className="grid grid-cols-1 gap-2 p-2 sm:grid-cols-2 lg:grid-cols-3">
        {cars &&
          cars.length !== 0 &&
          cars.map((car: any) => (
            <div key={car._id}>
              <CardMain car={car} />
            </div>
          ))}
      </div>
      {cars && cars.length === 0 && (
        <div className="flex min-h-screen w-full flex-col items-center justify-center text-2xl font-bold uppercase text-white">
          <p>Няма налични автомобили</p>
          <p>Проверете отново</p>
        </div>
      )}
    </section>
  );
};

export default Page;
