"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@components/ui/card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMutation, useQuery } from "convex/react";

export * from "../hooks/useUploadFiles";
export * from "../hooks/useUploadFiles";

import "@xixixao/uploadstuff/react/styles.css";

import { api } from "@convex/_generated/api";

import { useState, Fragment, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@components/ui/carousel";
import { UploadFileResponse } from "../hooks/uploadFiles";
import UploadButton from "./UploadButton";

import { Badge } from "@components/ui/badge";
import { PictureInPicture } from "lucide-react";
import { Select } from "@components/ui/select";
import { SelectDemo } from "@components/SelectC";
import { Label } from "@components/ui/label";

const formSchema = z.object({
  name: z.string().min(4),
});

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
              <Badge>{item.manufacturer}</Badge>
              <Badge>
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
  const [manufacturers, setManufacturers] = useState<any[]>([]);
  const [models, setModels] = useState<any[]>([]);
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [name, setName] = useState<string>("");
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  const saveStorageId = useMutation(api.files.saveStorageId);
  const saveAfterUpload = async (uploaded: UploadFileResponse[]) => {
    await saveStorageId({
      name: name,
      manufacturer: selectedManufacturer,
      model: selectedModel,

      uploaded: uploaded.map(({ response }) => ({
        storageId: (response as any).storageId,
        type: (response as any).type || "image",
      })),
    });
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
    <div className="mt-4 flex h-full min-h-screen w-full flex-col items-center justify-center">
      <Card className="m-2 flex min-h-full w-2/3 flex-col items-center justify-center text-[17px]">
        <CardHeader>Добави нова част</CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div>
              <label className="">Добави име</label>
              <Input value={name} onChange={(e) => setName(e.target.value)} />

              <Label htmlFor="title">Марка</Label>
              <SelectDemo
                title="марка"
                type="Производител"
                data={manufacturers}
                onChange={(value) => setSelectedManufacturer(value)}
              />
            </div>
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
