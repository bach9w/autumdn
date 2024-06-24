"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { body_type, colors, airbags, fuel_type } from "@constants/import";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@components/ui/select";
import { SelectDemo } from "@components/SelectC";
import { useAction } from "convex/react";
import { api } from "@convex/_generated/api";

export function AddForm() {
  const [manufacturers, setManufacturers] = useState<any[]>([]);
  const [models, setModels] = useState<any[]>([]);
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [selectedBodyType, setSelectedBodyType] = useState<string>("");

  const getCar = useAction(api.cars.getCar);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/manufacturer`, {
          next: { revalidate: 3600 },
        });
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.error);
        }
        setManufacturers(result.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/models/${selectedManufacturer}`, {
          next: { revalidate: 3600 },
        });
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.error);
        }
        setModels(result.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [selectedManufacturer]);

  let page = 338;

  async function fetchData(page: number) {
    try {
      const response = await fetch(
        `/api/cars?status=3&sale_date_in_days=10&page=${page}&per_page=50`,
      );

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error);
      }

      const result = await response.json();
      for (const data of result.data) {
        getCar({ vin: data.vin });
      }
    } catch (error) {
      console.error(error);
    }
  }

  function startFetching() {
    const interval = setInterval(() => {
      if (page > 400) {
        //2363 - 5726
        clearInterval(interval);
        return;
      }

      fetchData(page);
      page += 1;
    }, 1000);
  }

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-xl">Добави обява</CardTitle>
        <CardDescription>Добави информация за новата обява</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid w-full grid-cols-2 flex-col items-center justify-center gap-3">
            <Label htmlFor="title">VIN</Label>
            <Input id="title" name="title" type="text" placeholder="VIN" />
            <Label htmlFor="title">Марка</Label>
            <SelectDemo
              title="марка"
              type="Производител"
              data={manufacturers}
              onChange={(value) => setSelectedManufacturer(value)}
            />
            <Label htmlFor="title">Модел</Label>
            <SelectDemo title="модел" type="Модел" data={models} />

            <Label htmlFor="title">Тип</Label>
            <SelectDemo title="тип" type="Тип" data={body_type} />

            <Label htmlFor="title">Цвят</Label>
            <SelectDemo title="цвят" type="Цвят" data={colors} />
            <Label htmlFor="title">Airbags</Label>
            <SelectDemo title="airbags" type="Airbags" data={airbags} />
            <Label htmlFor="title">Ключове</Label>
            <SelectDemo title="ключове" type="Ключове" data={airbags} />
            <Label htmlFor="title">Гориво</Label>
            <SelectDemo title="гориво" type="Гориво" data={fuel_type} />
            <Label htmlFor="title">Километри</Label>
            <Input
              id="title"
              name="title"
              type="text"
              placeholder="Километри"
              className="text-[17px]"
            />
            <Label htmlFor="title">Година</Label>
            <Input
              id="title"
              name="title"
              className="text-[17px]"
              type="text"
              placeholder="Година"
            />
          </div>
          <Button type="submit" className="w-full">
            Добави обява
          </Button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-center text-sm">
          {/*<Button onClick={startFetching}>Зареди</Button>*/}
        </div>
      </CardContent>
    </Card>
  );
}
