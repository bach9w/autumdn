import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
import { Badge } from "@components/ui/badge";

function splitDateAndTime(date: string) {
  const [datePart, timePart] = date.split("T");
  const [year, month, day] = datePart.split("-");
  return `${day}.${month}.${year}`;
}

const CarCard = ({ car }: { car: any }) => {
  return (
    <Card
      className="h-full overflow-hidden"
      onClick={() => {
        window.location.href = `/auction/${car.vin}`;
      }}
    >
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
                  {lot.images?.normal !== "" ? (
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
            <div className="col-span-2 w-full flex-col items-center justify-center rounded-md">
              <div className="flex h-full w-full flex-col items-center justify-center">
                <Badge className="flex w-full justify-center rounded-b-none">
                  Детайли
                </Badge>
                <Separator orientation="horizontal" />
                <h2>
                  Пробег -{" "}
                  {car.lots[0] &&
                    car.lots[0].odometer &&
                    car.lots[0].odometer.km}{" "}
                  км
                </h2>
                <Separator orientation="horizontal" />

                <h2>Двигател - {car.engine && car.engine.name}</h2>
                <Separator orientation="horizontal" />

                <h2>Повреда - {car.lots[0] && car.lots[0].damage.main.name}</h2>
                <Separator orientation="horizontal" />

                <Badge className="flex w-full items-center justify-center rounded-t-none">
                  Търг -{" "}
                  {car.lots[0] && car.lots[0].sale_date
                    ? splitDateAndTime(car.lots[0].sale_date)
                    : "Очаква се дата"}
                </Badge>
              </div>
            </div>

            <button className="flex aspect-square min-h-full w-full flex-col items-center justify-center rounded-md border bg-red-500 text-white hover:bg-red-800">
              Направи запитване
              <PhoneCall color="white" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;
