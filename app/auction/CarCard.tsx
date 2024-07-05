import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
import { PhoneCall, Rotate3D, Upload } from "lucide-react";
import { Separator } from "@components/ui/separator";
import { useRouter } from "next/navigation";

import { Badge } from "@components/ui/badge";
import { cn } from "@lib/utils";
import { Button } from "@components/ui/button";
import DamageCheck from "./components/DamageCheck";

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

function PriceBox({ price }: { price: any }) {
  return (
    <div className="flex h-[85px] items-center bg-red-500 p-0 text-xl font-bold text-white">
      <div className="flex flex-col items-center justify-between">
        {price} $
        <Badge className="relative top-5 h-full w-full rounded-none">
          {" "}
          Купи сега!{" "}
        </Badge>
      </div>
    </div>
  );
}

const CarCard = ({ car }: { car: any }) => {
  return (
    <Drawer>
      <DrawerTrigger>
        <>
          <div className="container">
            <Card className="w-full overflow-hidden rounded-lg border-none bg-card text-card-foreground shadow-lg">
              <div className="">
                <div className="bottom-0 left-0 right-0 flex w-full items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-0">
                  <div className="p-4 text-white">
                    <h3 className="text-2xl font-bold">
                      {car.manufacturer && car.manufacturer.name}/
                      {car.model && car.model.name}
                    </h3>
                    <p className="flex w-full text-sm">
                      {car.year} |{" "}
                      {car.lots[0] &&
                        car.lots[0].odometer &&
                        car.lots[0].odometer.km}{" "}
                      км
                    </p>
                  </div>
                  {car.lots[car.lots.length - 1].buy_now !== 0 && (
                    <PriceBox price={car.lots[car.lots.length - 1].buy_now} />
                  )}
                </div>
              </div>
              {car.lots &&
                car.lots.map((lot: any) => (
                  <Carousel key={lot.id}>
                    <CarouselContent>
                      {lot.images && lot.images?.normal !== null ? (
                        lot.images.normal.map((img: any, index: any) => (
                          <CarouselItem key={index}>
                            <img
                              src={img}
                              alt={`Car image ${index + 1}`}
                              height={300}
                              className="aspect-square w-full rounded-md object-cover"
                              width="300"
                            />
                          </CarouselItem>
                        ))
                      ) : (
                        <CarouselItem>
                          <div className="aspect-square h-[300px] w-[300px] rounded-md object-cover">
                            No Image
                          </div>
                        </CarouselItem>
                      )}
                    </CarouselContent>
                  </Carousel>
                ))}
              <CardContent>
                <div className="mt-4 grid gap-2">
                  <CardFooter className="">
                    <Breadcrumb>
                      <BreadcrumbList className="mt-4 flex w-full">
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
                  </CardFooter>

                  <div className="grid grid-cols-3 gap-2 uppercase">
                    <div className="col-span-2 w-full flex-col items-center justify-center rounded-md">
                      <div className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-red-500 font-bold text-white shadow-md shadow-black">
                        <button className="inline-flex h-full w-full animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#220103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                          Купи сега
                        </button>
                      </div>
                    </div>

                    <button className="shadows-md flex aspect-square min-h-full w-full animate-shimmer flex-col items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#FF7900,5%,#1e2631,55%,#000103)] bg-[length:100%_100%] px-6 font-medium text-white transition-colors hover:bg-red-800 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                      Направи запитване
                      <PhoneCall color="white" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      </DrawerTrigger>
      <DrawerContent className="border-none bg-orange-600">
        <DrawerHeader>
          <DrawerTitle className="text-white">Допълнителни детайли</DrawerTitle>
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
      </DrawerContent>
    </Drawer>
  );
};

export default CarCard;
