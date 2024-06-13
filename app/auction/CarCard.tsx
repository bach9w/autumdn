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
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import { PhoneCall, Upload } from "lucide-react";
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
  const router = useRouter();
  return (
    <Drawer>
      <DrawerTrigger>
        <>
          <Card className="m-2 h-full overflow-hidden border-none p-2 shadow-md shadow-black">
            <CardHeader>
              <div className="flex w-full justify-start">
                {car.lots[0] &&
                car.lots[0].condition &&
                car.lots[0].condition.name === "run_and_drives" ? (
                  <Badge className="rounded-none">В движение</Badge>
                ) : (
                  <Badge>Неподвижен</Badge>
                )}
              </div>

              <CardTitle>
                <div className="mt-2 flex w-full justify-between">
                  {car.manufacturer && car.manufacturer.name}/
                  {car.model && car.model.name}
                  {car.vin && <Badge>{car.vin}</Badge>}
                </div>
              </CardTitle>

              <CardDescription>{car.year}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
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
                <div className="grid grid-cols-3 gap-2 uppercase">
                  <div className="col-span-3 w-full flex-col items-center justify-center rounded-md"></div>
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
              Повреда -{" "}
              {car.lots[0] &&
              car.lots[0].damage &&
              car.lots[0].damage.main.name !== null
                ? `${car.lots[0].damage.main.name}`
                : "Няма"}
            </h2>
            <Separator orientation="horizontal" />

            <Badge className="flex w-full items-center justify-center rounded-t-none">
              Търг -{" "}
              {car.lots[0] && car.lots[0].sale_date
                ? splitDateAndTime(car.lots[0].sale_date)
                : "Очаква се дата"}
            </Badge>
          </DrawerDescription>
          <Button
            onClick={() => {
              router.push(`/auction/${car.vin}`);
            }}
          >
            Премини към офертата
          </Button>
          <DrawerClose>
            <Button variant="outline">Разгледай другите</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CarCard;
