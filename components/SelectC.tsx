"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo({
  title,
  type,
  data,
  onChange,
}: {
  title: string;
  type: string;
  data: any;
  onChange?: (value: any) => void;
}) {
  const [typeOf, setTypeOf] = React.useState(type);

  return (
    <>
      <Select onValueChange={onChange}>
        <SelectTrigger className="w-full text-[18px] text-black">
          <SelectValue placeholder={`Изберете ${title}`} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{typeOf}</SelectLabel>
            {data &&
              data.map((cars: any) => (
                <SelectItem
                  key={cars.id}
                  value={JSON.stringify({ id: cars.id, name: cars.name })}
                >
                  {cars.name}
                </SelectItem>
              ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}
