"use client";
import { SelectParts } from "./select-parts";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import { Label } from "@radix-ui/react-label";
import { status, years } from "./constants";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const manufacturers = useQuery(api.manufacturer.getManufacturers);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/models/${manufacturer}`, {
          next: { revalidate: 3600 },
        });
        const result = await response.json();
        const data = result.data;
        setModel(data);
        if (!response.ok) {
          throw new Error(result.error);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [manufacturer]);

  return (
    <div className="flex w-full items-center justify-center">
      <div className="grid grid-cols-1 gap-2 text-black sm:grid-cols-2 md:grid-cols-4">
        <div className="">
          <Label className="flex w-full items-center justify-center bg-black text-white">
            Марка
          </Label>
          <SelectParts
            disabled={false}
            title="Марка"
            data={manufacturers}
            type="Марка"
            onChange={(value) => setManufacturer(value)}
          />
        </div>
        <div>
          <Label className="flex w-full items-center justify-center bg-black text-white">
            Модел
          </Label>
          <SelectParts
            disabled={manufacturer ? false : true}
            title="Модел"
            data={model}
            type="Модел"
          />
        </div>
        <div>
          <Label className="flex w-full items-center justify-center bg-black text-white">
            Година
          </Label>
          <SelectParts
            disabled={false}
            title="Година"
            data={years}
            type="Година"
          />
        </div>
        <div>
          <Label className="flex w-full items-center justify-center bg-black text-white">
            Състояние
          </Label>
          <SelectParts
            disabled={false}
            title="Състояние"
            data={status}
            type="Състояние"
          />
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
