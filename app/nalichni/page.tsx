"use client";
import CarCard from "./components/card";
import { Card } from "@components/ui/card";
import { api } from "@convex/_generated/api";
import { useQuery } from "convex/react";

const Page = () => {
  const cars = useQuery(api.cars.getAvailableCars);
  return (
    <section className="min-h-screen">
      <div className="text-center text-2xl font-bold uppercase text-white drop-shadow-lg">
        Налични автомобили
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {cars &&
          cars.map((car: any) => (
            <div key={car._id}>
              <CarCard car={car} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Page;
