"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardMain } from "@components/card";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";

import { api } from "@convex/_generated/api";
import { useQuery } from "convex/react";
import { PhoneForwarded } from "lucide-react";
import Image from "next/image";

const NalichniPage = () => {
  const images = useQuery(api.listAuctions.getLive);
  const url = "https://wandering-bison-612.convex.site/getImage?storageId=";

  return (
    <section className="min-h-screen">
      <div className="py-10 text-center text-2xl font-bold uppercase text-white drop-shadow-lg">
        Налични автомобили
      </div>

      {images && images.length && (
        <div className="grid h-full grid-cols-1 gap-2 p-2 md:grid-cols-2">
          {images.map((image) => (
            <>
              <div
                key={image._id}
                className="h-full w-full bg-white/10 p-2 hover:bg-white/30"
              >
                <div className="bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-end justify-between">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold">
                        {image.manufacturerId}/{image.modelId}
                      </h3>
                      <p className="text-sm">
                        {image.year} | {image.km} km
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex w-full justify-between bg-white">
                  <Badge className="rounded-none">
                    {" "}
                    {image.modelId}/{image.manufacturerId}{" "}
                  </Badge>
                  <Badge className="rounded-none bg-red-500">
                    {image.vin} ЛВ.
                  </Badge>
                </div>
                <div className="flex w-full flex-col items-center justify-end">
                  <Carousel className="w-full max-w-md">
                    <CarouselContent>
                      {image.images?.map((img, index) => (
                        <>
                          <CarouselItem key={index}>
                            <div className="p-1">
                              <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                  <span className="text-4xl font-semibold">
                                    <Image
                                      className="object-scale-down"
                                      src={url + `${img.url}`}
                                      alt={`Image ${img.url}`}
                                      width={300}
                                      height={300}
                                    />
                                  </span>
                                </CardContent>
                              </Card>
                            </div>
                          </CarouselItem>
                        </>
                      ))}
                      {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <Card>
                              <CardContent className="flex aspect-square items-center justify-center p-6">
                                <span className="text-4xl font-semibold">
                                  {index + 1}
                                </span>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>

                <div className="mt-2 flex w-full justify-between bg-white">
                  <Badge className="flex items-center justify-center rounded-none p-2">
                    Позвъни сега <PhoneForwarded size={15} />
                  </Badge>
                  <Badge className="rounded-none bg-red-500">
                    Направи запитване
                  </Badge>
                </div>
              </div>
            </>
          ))}
        </div>
      )}
      {images && images.length === 0 && (
        <div className="flex min-h-screen w-full flex-col items-center justify-center text-2xl font-bold uppercase text-white">
          <p>Няма налични автомобили</p>
          <p>Проверете отново</p>
        </div>
      )}
    </section>
  );
};

export default NalichniPage;
