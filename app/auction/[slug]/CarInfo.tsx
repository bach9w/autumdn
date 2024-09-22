"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  MessageCircleQuestionIcon,
  PhoneCall,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";

import ReactWhatsapp from "react-whatsapp";
import Video360 from "./Video360";
import DamageCheck from "../components/DamageCheck";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@lib/utils";
import { useEffect, useRef, useState } from "react";
import Testove from "@components/full-screen/Full-ScreenM";

function splitDateAndTime(date: string) {
  if (!date) {
    return "Няма информация";
  }
  const [datePart, timePart] = date.split("T");
  const [year, month, day] = datePart.split("-");
  return `${day}.${month}.${year}`;
}

function priceBGN(price: number): any {
  if (price === 0)
    return (
      <div className="flex w-full items-center justify-between">
        <p>ЗАПОЧНИ НАДДАВАНЕТО</p>0 ЛВ.
      </div>
    );
  const changed = price * 1.792846;
  return (
    <div className="flex w-full items-center justify-between uppercase">
      <p>Купи сега</p>
      {Number(changed.toFixed(0)).toLocaleString("bg-BG")} ЛВ.
    </div>
  );
}

export function CarInfo({ data }: { data: any }) {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [startIndex, setStartIndex] = useState<number>(0);

  const thumbnailsPerPage = 4;
  const imageRef = useRef<HTMLImageElement>(null);

  const images = data?.lots?.[data.lots.length - 1]?.images?.big || [];
  const totalImages = images.length;

  const mainImage = activeImage || images[0];

  const nextThumbnails = () => {
    if (startIndex + thumbnailsPerPage < totalImages) {
      setStartIndex(startIndex + thumbnailsPerPage);
    }
  };

  const prevThumbnails = () => {
    if (startIndex - thumbnailsPerPage >= 0) {
      setStartIndex(startIndex - thumbnailsPerPage);
    }
  };

  // Функция за включване на пълен екран

  return (
    <main className="items-start gap-4 p-0 sm:px-3 sm:py-0 md:gap-8">
      {open && <Testove testove={open} setTestove={setOpen} id={url} />}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mx-2 grid flex-1 auto-rows-max gap-4"
        >
          <div className="flex items-center justify-between gap-4">
            <Button variant="outline" size="icon" className="h-7 w-7">
              <ChevronLeft
                className="h-4 w-4"
                onClick={() => {
                  window.history.back();
                }}
              />
              <span className="sr-only">Назад</span>
            </Button>

            <h1 className="text-nowrap h-full flex-1 shrink-0 text-xl font-semibold tracking-tight text-white sm:grow-0 sm:whitespace-nowrap">
              {data.title}
            </h1>
            <Badge className="h-8 bg-orange-600 p-4 font-bold">
              ПАЛИ И ТРЪГВА
            </Badge>
          </div>

          <div className="hidden w-full items-center justify-evenly gap-2 md:ml-auto md:flex">
            <Button
              className="inline-flex h-[40px] w-full animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#220103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              variant="outline"
              size="sm"
            >
              <a
                className="flex animate-pulse items-center justify-center gap-1"
                href="tel:+359876995555"
              >
                Получи информация <PhoneCall className="h-4 w-4" />
              </a>
            </Button>

            <Button
              className="inline-flex h-[40px] w-full animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#220103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              size="sm"
            >
              <ReactWhatsapp
                className="flex animate-pulse items-center justify-center gap-1"
                element="webview"
                number="+359876995555"
                message={`Здравейте, интересувам се от автомил с VIN: ${data.vin}, https://myride.bg/auction/${data.vin}`}
              >
                Изпрати запитване{" "}
                <MessageCircleQuestionIcon className="h-4 w-4" />
              </ReactWhatsapp>
            </Button>
          </div>

          <div className="grid grid-cols-1 items-center justify-center gap-2 md:hidden">
            <Button
              className="inline-flex h-[40px] animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#220103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              variant="outline"
              size="sm"
            >
              <a
                className="flex animate-pulse items-center justify-center gap-1"
                href="tel:+359876995555"
              >
                Получи информация <PhoneCall className="h-4 w-4" />
              </a>
            </Button>

            <Button
              className="inline-flex h-[40px] animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#220103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              size="sm"
            >
              <ReactWhatsapp
                className="flex animate-pulse items-center justify-center gap-1"
                element="webview"
                number="+359876995555"
                message={`Здравейте, интересувам се от автомил с VIN: ${data.vin}, https://myride.bg/auction/${data.vin}`}
              >
                Изпрати запитване{" "}
                <MessageCircleQuestionIcon className="h-4 w-4" />
              </ReactWhatsapp>
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:gap-8 xl:grid-cols-1">
              <Card
                className="col-span-4 max-w-full sm:col-span-4"
                x-chunk="dashboard-07-chunk-4"
              >
                <CardHeader>
                  <CardTitle>Изображения</CardTitle>
                  <CardDescription>Изображения на автомобила</CardDescription>
                </CardHeader>
                <CardContent>
                  <Carousel>
                    {/* Главна снимка с функционалност за fullscreen */}
                    <CarouselContent>
                      {mainImage && (
                        <CarouselItem>
                          <img
                            ref={imageRef}
                            src={mainImage}
                            alt="Main car image"
                            height={500}
                            className="aspect-square w-full cursor-pointer rounded-md object-fill"
                            width="500"
                            onClick={() => {
                              setUrl(mainImage);
                              setOpen(true);
                            }}
                          />
                        </CarouselItem>
                      )}
                    </CarouselContent>

                    {/* Секция за thumbnails */}
                    <div className="thumbnails-container mt-4 flex items-center justify-center gap-2">
                      {startIndex > 0 && (
                        <button
                          onClick={prevThumbnails}
                          className="rounded-md bg-red-500 p-2 text-white"
                        >
                          {"<"}
                        </button>
                      )}

                      {images
                        .slice(startIndex, startIndex + thumbnailsPerPage)
                        .map((thumbnailUrl: string, index: number) => (
                          <div key={index} className="thumbnail">
                            <img
                              src={thumbnailUrl}
                              alt={`Thumbnail ${startIndex + index + 1}`}
                              className={`aspect-square h-24 w-24 cursor-pointer rounded-md object-cover ${
                                thumbnailUrl === mainImage
                                  ? "border-4 border-red-500"
                                  : ""
                              }`}
                              onClick={() => setActiveImage(thumbnailUrl)}
                            />
                          </div>
                        ))}

                      {startIndex + thumbnailsPerPage < totalImages && (
                        <button
                          onClick={nextThumbnails}
                          className="rounded-md bg-red-500 p-2 text-white"
                        >
                          {">"}
                        </button>
                      )}
                    </div>
                  </Carousel>
                </CardContent>
              </Card>
              <Card
                className="col-span-4 max-w-full lg:col-span-4"
                x-chunk="dashboard-07-chunk-5"
              >
                <CardHeader>
                  <CardTitle>Данни за обявата</CardTitle>
                  <CardDescription>
                    Необходими при запитване и покупка
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col">
                  <Button
                    className="rounded-none bg-red-500 hover:bg-red-500 hover:text-white"
                    size="sm"
                    variant="secondary"
                  >
                    {priceBGN(data.lots[data.lots.length - 1].buy_now)}{" "}
                  </Button>
                  <Button
                    className="rounded-none hover:bg-red-500 hover:text-white"
                    size="sm"
                    variant="secondary"
                  >
                    VIN - {data.vin}
                  </Button>
                  <Button
                    size="sm"
                    className="rounded-none hover:bg-red-500 hover:text-white"
                    variant="secondary"
                  >
                    ID - {data.id}
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              <Card x-chunk="dashboard-07-chunk-0">
                <CardHeader>
                  <CardTitle>Информация за автомобила</CardTitle>
                  <CardDescription>Общи характеристики</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="name">Марка</Label>
                      <Badge className="flex w-full justify-center uppercase">
                        {data && data.manufacturer
                          ? data.manufacturer.name
                          : "Няма информация"}
                      </Badge>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="name">Тип</Label>
                      <Badge className="flex w-full justify-center uppercase">
                        {data.body_type !== null
                          ? data.body_type.name
                          : "Няма тип"}
                      </Badge>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="name">Година</Label>
                      <Badge className="flex w-full justify-center uppercase">
                        {data ? data.year : "Няма информация"}
                      </Badge>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="name">Цвят</Label>
                      <Badge className="flex w-full justify-center uppercase">
                        {data.color ? data.color.name : "Няма цвят"}
                      </Badge>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="name">Airbags</Label>
                      <Badge className="flex w-full justify-center uppercase">
                        {data.lots[data.lots.length - 1].airbags !== null
                          ? "Нарушени"
                          : "Ненарушени"}
                      </Badge>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="name">Ключове</Label>
                      <Badge className="flex w-full justify-center uppercase">
                        {data.lots[data.lots.length - 1].keys_available
                          ? "Налични"
                          : "Неналични"}
                      </Badge>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="name">Километраж</Label>
                      <Badge className="flex w-full justify-center uppercase">
                        {data.lots[data.lots.length - 1].odometer
                          ? data.lots[data.lots.length - 1].odometer.km
                          : "Няма информация"}{" "}
                        км
                      </Badge>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="name">Щети</Label>
                      <Badge className="flex w-full flex-col justify-between uppercase">
                        <p>
                          {data.lots[data.lots.length - 1].damage.main !==
                          null ? (
                            <div>
                              {" "}
                              <DamageCheck
                                damage={
                                  data.lots[data.lots.length - 1].damage.main
                                    .name
                                }
                              />
                            </div>
                          ) : (
                            "Няма"
                          )}
                        </p>
                        <p>
                          {data.lots[data.lots.length - 1].damage.second !==
                          null ? (
                            <div className="flex gap-1">
                              Вторична
                              <DamageCheck
                                damage={
                                  data.lots[data.lots.length - 1].damage.second
                                    .name
                                }
                              />
                            </div>
                          ) : (
                            "Няма"
                          )}
                        </p>
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-07-chunk-1">
                <CardHeader>
                  <CardTitle>Характеристики на двигател</CardTitle>
                  <CardDescription>
                    Допълнителна информация за двигателя
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="name">Мощност</Label>
                      <Badge className="flex w-full justify-center uppercase">
                        {data.engine ? data.engine.name : "Няма информация"}
                      </Badge>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="name">Година</Label>
                      <Badge className="flex w-full justify-center uppercase">
                        {data ? data.year : "Няма информация"}
                      </Badge>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="name">Цилиндри</Label>
                      <Badge className="flex w-full justify-center uppercase">
                        {data ? data.cylinders : "Няма информация"}
                      </Badge>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="name">Гориво</Label>
                      <Badge className="flex w-full justify-center uppercase">
                        {data.fuel ? data.fuel.name : "Няма информация"}
                      </Badge>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="name">Трансмисия</Label>
                      <Badge className="flex w-full justify-center uppercase">
                        {data.transmission
                          ? data.transmission.name
                          : "Няма информация"}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          {data.lots[data.lots.length - 1].images &&
            data.lots[data.lots.length - 1].images.external_panorama_url !==
              null && (
              <Video360
                video={
                  data.lots[data.lots.length - 1].images.external_panorama_url
                }
              />
            )}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
