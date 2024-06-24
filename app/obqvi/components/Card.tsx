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

import Image from "next/image";
import { PhoneCall, Rotate3D, Upload } from "lucide-react";
import { Separator } from "@components/ui/separator";
import { useRouter } from "next/navigation";

import { Badge } from "@components/ui/badge";
import { cn } from "@lib/utils";
import { Button } from "@components/ui/button";

function splitDateAndTime(date: string) {
  const [datePart, timePart] = date.split("T");

  const [year, month, day] = datePart.split("-");

  return `${day}.${month}.${year}`;
}

const CarCard = ({ car }: { car: any }) => {
  const urlArray = car.lots.images.normal.url;
  let numberArray: number[] = new Array(urlArray.length).fill(0);
  numberArray[0] = 1;
  return (
    <div className="container">
      <Card className="box m-0 my-2 h-full overflow-hidden border-none p-0 shadow-md shadow-black">
        <CardHeader>
          <div className="flex w-full justify-between text-white">
            {car.lots &&
            car.lots.condition &&
            car.lots.condition.name === "run_and_drives" ? (
              <Badge className="rounded-none text-white">В движение</Badge>
            ) : (
              <Badge>Неподвижен</Badge>
            )}
            <div className="flex">
              {car.vin && (
                <Badge className="flex items-center justify-center rounded-md">
                  {car.vin}
                </Badge>
              )}
            </div>
          </div>

          <CardTitle>
            <div className="mt-2 flex w-full justify-between">
              <div className="flex flex-col text-black">
                <p>{car.manufacturer && car.manufacturer.name}</p>
                {car.model && car.model.name}
              </div>
              <div className="flex w-full items-center justify-end">
                {car.lots[0] &&
                  car.lots[0].images &&
                  car.lots[0].images.external_panorama_url && (
                    <Badge className="bg-red-500">
                      <Rotate3D /> 360 video
                    </Badge>
                  )}
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {car.lots.images && (
            <Carousel key={car.lots.images.id}>
              <CarouselContent>
                {urlArray.map((url: string, index: number) => (
                  <CarouselItem key={index}>
                    <img src={url} alt={car.title} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          )}
        </CardContent>
        <CardDescription className="mb-2 flex w-full items-center justify-center">
          <Button>Добави в налични</Button>
        </CardDescription>
      </Card>
    </div>
  );
};

export default CarCard;
