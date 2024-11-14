"use client";
import { motion } from "framer-motion";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Link from "next/link";
import { GiTakeMyMoney } from "react-icons/gi";
import { Separator } from "@components/ui/separator";

import { Badge } from "@components/ui/badge";
import { cn } from "@lib/utils";
import { Button } from "@components/ui/button";
import DamageCheck from "./components/DamageCheck";
import { useEffect, useState } from "react";
import { Skeleton } from "@components/ui/skeleton";
import CarbonBackgroundComponent from "@components/layout/carbon";

function splitDateAndTime(date: string) {
  // Създаване на дата обект от предоставената дата
  const targetDate = new Date(date);

  // Получаване на днешната дата
  const today = new Date();

  // Изчистване на времевата част за днешната дата
  today.setHours(0, 0, 0, 0);

  // Изчисляване на разликата в милисекунди между двете дати
  const diffInMs = targetDate.getTime() - today.getTime();

  // Преобразуване на разликата в дни
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

  return diffInDays;
}

function priceBGN(price: number): string {
  const changed = price * 1.792846;
  return Number(changed.toFixed(0)).toLocaleString("bg-BG");
}

const CarCard = ({ car }: { car: any }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);
  return (
    <Drawer>
      <DrawerTrigger>
        <>
          <div className="container">
            <motion.div
              className=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {loading ? (
                <div className="flex items-center space-x-4 p-4">
                  <Skeleton className="h-96 w-[85vw] rounded-full sm:w-[340px]" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              ) : (
                <div className="relative">
                  {car.lots?.length &&
                    car.lots[car.lots.length - 1]?.images && (
                      <Carousel className="h-96 w-full" key={car.id}>
                        <CarouselContent>
                          {car.lots[car.lots.length - 1].images?.normal !==
                          null ? (
                            car.lots[car.lots.length - 1].images.normal.map(
                              (img: any, index: any) => (
                                <CarouselItem key={index}>
                                  <motion.img
                                    src={img}
                                    alt={`Car image ${index + 1}`}
                                    width={600}
                                    height={400}
                                    className="h-96 w-full object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                  />
                                </CarouselItem>
                              ),
                            )
                          ) : (
                            <CarouselItem>
                              <div className="aspect-square h-[300px] w-[300px] rounded-md object-cover">
                                No Image
                              </div>
                            </CarouselItem>
                          )}
                        </CarouselContent>
                      </Carousel>
                    )}
                  <motion.div
                    className={cn(
                      car.lots?.[car.lots.length - 1]?.buy_now
                        ? `absolute right-2 top-2 rounded-md bg-red-600/90 px-2 py-1 uppercase text-white shadow-lg backdrop-blur-sm`
                        : `hidden`,
                    )}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <div className="text-2xl font-bold">
                      {priceBGN(car.lots?.[car.lots.length - 1]?.buy_now)} ЛВ.
                    </div>
                  </motion.div>
                  <motion.div
                    className="absolute left-2 top-2 rounded-md bg-orange-700/75 px-2 py-1 uppercase text-white shadow-lg backdrop-blur-sm"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <div className="text-xl font-bold">
                      {splitDateAndTime(
                        car?.lots[car.lots.length - 1]?.sale_date,
                      )}{" "}
                      дни до търга
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute bottom-0 w-full bg-white"
                  >
                    <Breadcrumb>
                      <BreadcrumbList className="mb-2 mt-2 flex w-full items-center justify-evenly">
                        {car.model && car.manufacturer && (
                          <>
                            <BreadcrumbItem>
                              <BreadcrumbLink
                                href={`/auction?manufacturer=${car.manufacturer.id}&model=${car.model.id}`}
                                className="text-black"
                              >
                                <Badge>{car.model && car.model.name}</Badge>
                              </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator color="black" />
                          </>
                        )}
                        {car.manufacturer && car.manufacturer.id && (
                          <>
                            <BreadcrumbItem>
                              <BreadcrumbLink
                                className="text-black"
                                href={`/manufacturers/${car.manufacturer.id}`}
                              >
                                {car.manufacturer && (
                                  <Badge>{car.manufacturer.name}</Badge>
                                )}
                              </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator />
                          </>
                        )}
                        <BreadcrumbItem>
                          <BreadcrumbPage className="text-black">
                            <Badge>{car.year && car.year}</Badge>
                          </BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                  </motion.div>
                </div>
              )}
              <div className="bg-card p-4 text-white shadow-lg">
                <motion.div
                  className="mb-2 flex items-start justify-between"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <div className="flex w-full flex-col">
                    <h3 className="text-xl font-bold">
                      {car.year && car.year}{" "}
                      {car.manufacturer && car.manufacturer.name}{" "}
                      {car.model && car.model.name}
                    </h3>
                    <p className="text-sm">Sedan, Gasoline</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex w-full justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5, duration: 0.5 }}
                >
                  <button className="inline-flex h-[40px] w-full animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#220103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    Купи сега <GiTakeMyMoney size={30} />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      </DrawerTrigger>
      <DrawerContent className="border-none bg-orange-600/60">
        <CarbonBackgroundComponent>
          <DrawerHeader className="mt-4">
            <DrawerTitle className="text-white">
              Допълнителни детайли
            </DrawerTitle>
          </DrawerHeader>

          <DrawerFooter>
            <DrawerDescription className="w-full text-xl text-white">
              <Badge className="flex w-full justify-center rounded-b-none text-center text-xl">
                Детайли
              </Badge>
              <Separator orientation="horizontal" />
              <h2 className="bg-black text-center">
                Пробег -{" "}
                {car.lots[0] && car.lots[0].odometer && car.lots[0].odometer.km}{" "}
                км
              </h2>
              <Separator orientation="horizontal" />

              <h2 className={cn("bg-black text-center text-[20px]")}>
                Двигател - {car.engine && car.engine.name}
              </h2>

              <Separator orientation="horizontal" />

              <h2 className="bg-black text-center">
                {car.lots[0] &&
                car.lots[0].damage &&
                car.lots[0].damage.main.name !== null ? (
                  <DamageCheck damage={car.lots[0].damage.main.name} />
                ) : (
                  "Няма"
                )}
              </h2>
              <Separator orientation="horizontal" />

              <Badge className="flex w-full items-center justify-center rounded-t-none">
                ТЪРГ -{" "}
                {car.lots[car.lots.length - 1] &&
                car.lots[car.lots.length - 1].sale_date
                  ? `СЛЕД ${splitDateAndTime(car.lots[car.lots.length - 1].sale_date)} ДНИ`
                  : `  сега `}
              </Badge>
            </DrawerDescription>
            <Link
              className="flex w-full items-center justify-center"
              href={`/auction/${car.vin}`}
            >
              <Button className="w-full">Отвори аукциона</Button>
            </Link>
            <DrawerClose>
              <Button className="w-full" variant="outline">
                Разгледай другите
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </CarbonBackgroundComponent>
      </DrawerContent>
    </Drawer>
  );
};

export default CarCard;
