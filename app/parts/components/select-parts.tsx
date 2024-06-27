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

export function SelectParts({
  title,
  disabled,
  type,
  data,
  onChange,
}: {
  title: string;
  disabled: boolean;
  type: string;
  data: any;
  onChange?: (value: string) => void;
}) {
  const [typeOf, setTypeOf] = React.useState(type);

  return (
    <>
      <Select onValueChange={onChange}>
        <SelectTrigger
          disabled={disabled}
          className="w-[300px] rounded-t-none text-[18px] text-black sm:w-full"
        >
          <SelectValue placeholder={`Изберете ${title}`} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{typeOf}</SelectLabel>
            {data &&
              data.map((cars: any) => (
                <SelectItem key={cars.id} value={cars.id}>
                  {cars.name}
                </SelectItem>
              ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}
