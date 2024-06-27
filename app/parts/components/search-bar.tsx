"use client";
import { SelectDemo } from "@components/SelectC";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import { Label } from "@radix-ui/react-label";

const SearchBar = () => {
  const status = [
    { id: 1, name: "Нов" },
    { id: 2, name: "Втора употреба" },
  ];
  const manufacturers = useQuery(api.manufacturer.getManufacturers);

  return (
    <div className="flex w-full items-center justify-center">
      <div className="grid grid-cols-2 gap-2 text-black md:grid-cols-4">
        <div>
          <Label className="flex w-full items-center justify-center bg-black text-white">
            Марка
          </Label>
          <SelectDemo title="Марка" data={manufacturers} type="Модел" />
        </div>
        <div>
          <Label className="flex w-full items-center justify-center bg-black text-white">
            Модел
          </Label>
          <SelectDemo title="Марка" data={manufacturers} type="Модел" />
        </div>
        <div>
          <Label className="flex w-full items-center justify-center bg-black text-white">
            Година
          </Label>
          <SelectDemo title="Марка" data={manufacturers} type="Модел" />
        </div>
        <div>
          <Label className="flex w-full items-center justify-center bg-black text-white">
            Състояние
          </Label>
          <SelectDemo title="Състояние" data={status} type="Модел" />
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
