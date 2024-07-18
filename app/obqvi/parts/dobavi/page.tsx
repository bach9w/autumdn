"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@components/ui/card";
import { z } from "zod";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { useMutation, useQuery } from "convex/react";

export * from "../hooks/useUploadFiles";
export * from "../hooks/useUploadFiles";

import "@xixixao/uploadstuff/react/styles.css";

import { api } from "@convex/_generated/api";

import { useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@components/ui/carousel";
import { UploadFileResponse } from "../hooks/uploadFiles";
import UploadButton from "./UploadButton";

import { Badge } from "@components/ui/badge";
import { PictureInPicture } from "lucide-react";

import { SelectDemo } from "@components/SelectC";
import { Label } from "@components/ui/label";
import { Textarea } from "@components/ui/textarea";

function Display({ name }: { name: string }) {
  const array = useQuery(api.files.getUrl, { name });
  if (array == null) {
    return null;
  }

  const storageLink = "https://wandering-bison-612.convex.site";

  function Image({ storageId }: { storageId: string }) {
    // e.g. https://happy-animal-123.convex.site/getImage?storageId=456
    const getImageUrl = new URL(`${storageLink}/getImage`);
    getImageUrl.searchParams.set("storageId", storageId);

    return <img src={getImageUrl.href} height="300px" width="300px" />;
  }
  function Manufacturer({ id }: { id: any }) {
    const manufacturers = useQuery(api.manufacturer.getManufacturerById, {
      id: id,
    });

    if (!manufacturers) {
      return null;
    }

    return manufacturers.map((manufacturer) => (
      <Badge key={manufacturer._id}>{manufacturer.name}</Badge>
    ));
  }
  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {array.map((item) => (
          <Card
            key={item._id}
            className="flex h-full flex-col items-center justify-between"
          >
            <CardHeader>{item.name && item.name.toUpperCase()}</CardHeader>
            <CardDescription>
              <Carousel>
                <CarouselContent>
                  {item.uploaded.map((file) => (
                    <CarouselItem>
                      <Image storageId={file.storageId} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </CardDescription>
            <CardFooter>
              <Manufacturer id={item.manufacturer} />

              <Badge className="flex w-full items-center justify-center gap-2">
                {item.uploaded.length} <PictureInPicture />
              </Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}

const Dobavi = () => {
  const manufacturers = useQuery(api.manufacturer.getManufacturers);
  const [models, setModels] = useState<any[]>([]);
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<any>();
  const [information, setInformation] = useState<string>("");

  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  const saveStorageId = useMutation(api.files.saveStorageId);
  const saveAfterUpload = async (uploaded: UploadFileResponse[]) => {
    await saveStorageId({
      name: name,
      manufacturer: selectedManufacturer,
      model: selectedModel,
      price: price,
      information: information,
      is_in_stock: true,

      uploaded: uploaded.map(({ response }) => ({
        storageId: (response as any).storageId,
        type: (response as any).type || "image",
      })),
    });
  };

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

  return (
    <div className="mt-4 flex h-full min-h-screen w-full flex-col items-center justify-start">
      <Card className="m-2 flex min-h-full w-2/3 flex-col items-center justify-center text-[17px]">
        <CardHeader>Добави нова част</CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <Label htmlFor="title">Добави име</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
            <Label htmlFor="title">Цена</Label>
            <Input value={price} onChange={(e) => setPrice(e.target.value)} />
            <label className="">Информация</label>
            <Textarea
              value={information}
              onChange={(e) => setInformation(e.target.value)}
            />

            <Label htmlFor="title">Марка</Label>
            <SelectDemo
              title="марка"
              type="Производител"
              data={manufacturers}
              onChange={(value) =>
                setSelectedManufacturer(JSON.parse(value).id)
              }
            />

            <Label htmlFor="title">Модел</Label>
            <SelectDemo
              title="модел"
              type="Модел"
              data={models}
              onChange={(value) => setSelectedModel(value)}
            />
            <Button disabled={name ? false : true}>
              <UploadButton
                isNameSet={true}
                uploadUrl={generateUploadUrl}
                fileTypes={["image/*"]}
                multiple
                onUploadComplete={saveAfterUpload}
                onUploadError={(error: unknown) => {
                  alert(`ERROR! ${error}`);
                }}
              />
            </Button>
          </div>
        </CardContent>
      </Card>
      <div>
        <Display name={name} />
      </div>
    </div>
  );
};

export default Dobavi;
