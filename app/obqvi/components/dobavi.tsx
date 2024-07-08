"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  body_type,
  colors,
  airbags,
  fuel_type,
  drive_wheel,
} from "@constants/import";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectDemo } from "@components/SelectC";
import { useAction, useMutation } from "convex/react";
import { api } from "@convex/_generated/api";
import { UploadFileResponse } from "../parts/hooks/uploadFiles";
import { UploadDropzone } from "../parts/dobavi/UploadDropzone";
import "@xixixao/uploadstuff/react/styles.css";
import { useRouter } from "next/navigation";

export function AddForm() {
  const [manufacturers, setManufacturers] = useState<any[]>([]);
  const [models, setModels] = useState<any[]>([]);
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>("");
  const [selectedManufacturerId, setSelectedManufacturerId] = useState<any>();
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [selectedBodyType, setSelectedBodyType] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedDriveWheel, setSelectedDriveWheel] = useState<string>("");
  const [selectedEngine, setSelectedEngine] = useState<string>("");
  const [selectedFuel, setSelectedFuel] = useState<string>("");
  const [selectedAirbags, setSelectedAirbags] = useState<boolean>();
  const [selectedKeys, setSelectedKeys] = useState<boolean>();
  const [selectedTransmission, setSelectedTransmission] = useState<string>("");
  const [vin, setVin] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [km, setKm] = useState<string>("");

  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  const update = useMutation(api.cars.newAvailableCar);
  const router = useRouter();

  const onSubmit = async (uploaded: UploadFileResponse[]) => {
    try {
      await update({
        vin: vin,
        manufacturerId: selectedManufacturer,
        modelId: selectedModel,
        body_type: selectedBodyType,
        color: selectedColor,
        drive_wheel: selectedDriveWheel,
        engine: selectedEngine,
        fuel: selectedFuel,
        airbags: selectedAirbags || false,
        keys: selectedKeys || false,
        transmission: selectedTransmission,
        year: year,
        km: km,
        images: uploaded.map(({ response }) => ({
          url: (response as any).storageId,
        })),
      });

      router.push("/obqvi");
    } catch (e) {
      console.log(e);
    }
  };

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
        const response = await fetch(`/api/models/${selectedManufacturerId}`, {
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
    if (selectedManufacturer) {
      fetchData();
    }
  }, [selectedManufacturer]);

  return (
    <Card className="mx-auto w-full">
      <CardHeader>
        <CardTitle className="text-xl">Добави обява</CardTitle>
        <CardDescription>Добави информация за новата обява</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid w-full grid-cols-2 items-center justify-center gap-3 md:grid-cols-4">
            <Label htmlFor="title">Цена</Label>
            <Input
              id="title"
              name="title"
              type="text"
              onChange={(e) => {
                setVin(e.target.value);
              }}
              placeholder="Цена"
              className="text-[18px]"
            />
            <Label htmlFor="title">Марка</Label>
            <SelectDemo
              title="марка"
              type="Производител"
              data={manufacturers}
              onChange={(value) => {
                setSelectedManufacturer(JSON.parse(value).name);
                setSelectedManufacturerId(JSON.parse(value).id);
              }}
            />
            <Label htmlFor="title">Модел</Label>
            <SelectDemo
              title="модел"
              type="Модел"
              data={models}
              onChange={(value) => {
                setSelectedModel(JSON.parse(value).name);
              }}
            />

            <Label htmlFor="title">Тип</Label>
            <SelectDemo
              title="тип"
              type="Тип"
              data={body_type}
              onChange={(value) => {
                setSelectedBodyType(JSON.parse(value).name);
              }}
            />

            <Label htmlFor="title">Цвят</Label>
            <SelectDemo
              title="цвят"
              type="Цвят"
              data={colors}
              onChange={(value) => {
                setSelectedColor(JSON.parse(value).name);
              }}
            />
            <Label htmlFor="title">Задвижване</Label>
            <SelectDemo
              title="задвижване"
              type="Задвижване"
              data={drive_wheel}
              onChange={(value) => {
                setSelectedDriveWheel(JSON.parse(value).name);
              }}
            />

            <Label htmlFor="title">Airbags</Label>
            <SelectDemo
              title="airbags"
              type="Airbags"
              onChange={(value) => {
                JSON.parse(value).id === 1
                  ? setSelectedAirbags(true)
                  : setSelectedAirbags(false);
              }}
              data={airbags}
            />

            <Label htmlFor="title">Ключове</Label>
            <SelectDemo
              title="ключове"
              type="Ключове"
              data={airbags}
              onChange={(value) => {
                JSON.parse(value).id === 1
                  ? setSelectedKeys(true)
                  : setSelectedKeys(false);
              }}
            />
            <Label htmlFor="title">Гориво</Label>
            <SelectDemo
              title="гориво"
              type="Гориво"
              data={fuel_type}
              onChange={(value) => {
                setSelectedFuel(JSON.parse(value).name);
              }}
            />
            <Label htmlFor="title">Двигател</Label>
            <Input
              id="title"
              name="title"
              type="text"
              placeholder="Двигател"
              className="text-[17px]"
              onChange={(e) => {
                setSelectedEngine(e.target.value);
              }}
            />
            <Label htmlFor="title">Трансмисия</Label>
            <Input
              id="title"
              name="title"
              type="text"
              placeholder="Трансмисия"
              className="text-[17px]"
              onChange={(e) => {
                setSelectedTransmission(e.target.value);
              }}
            />
            <Label htmlFor="title">Километри</Label>
            <Input
              id="title"
              name="title"
              type="text"
              placeholder="Километри"
              className="text-[17px]"
              onChange={(e) => {
                setKm(e.target.value);
              }}
            />
            <Label htmlFor="title">Година</Label>
            <Input
              id="title"
              name="title"
              className="text-[17px]"
              type="text"
              placeholder="Година"
              onChange={(e) => {
                setYear(e.target.value);
              }}
            />
          </div>
          <UploadDropzone
            uploadUrl={generateUploadUrl}
            fileTypes={{
              "image/*": [".png", ".gif", ".jpeg", ".jpg"],
            }}
            multiple
            onUploadComplete={onSubmit}
            onUploadError={(error: unknown) => {
              // Do something with the error.
              alert(`ERROR! ${error}`);
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
