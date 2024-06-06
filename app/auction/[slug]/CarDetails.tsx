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
import { Car, PhoneCall, Upload } from "lucide-react";
import { Separator } from "@components/ui/separator";
import { Badge } from "@components/ui/badge";

function splitDateAndTime(date: string) {
  const [datePart, timePart] = date.split("T");
  const [year, month, day] = datePart.split("-");
  return `${day}.${month}.${year}`;
}

const CarDetails = ({ car }: { car: any }) => {
  console.log(car);
  return (
    <Card
      className="h-full max-h-full overflow-hidden"
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
        <div className="">
          <Carousel>
            <CarouselContent>
              {car.lots &&
                car.lots[0].images.normal.map(
                  (imageUrl: string, index: number) => (
                    <CarouselItem key={index}>
                      <img
                        src={imageUrl}
                        alt={`Car image ${index + 1}`}
                        height={300}
                        className="aspect-square w-full rounded-md object-fill"
                        width="300"
                      />
                    </CarouselItem>
                  ),
                )}
            </CarouselContent>
          </Carousel>
          <div className="grid grid-cols-3 gap-2 uppercase">
            <div className="col-span-2 w-full flex-col items-center justify-center rounded-md border border-dashed">
              <div className="flex h-full w-full flex-col items-center justify-center">
                <h2>Детайли</h2>
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

                <h2 className="flex w-full items-center justify-center">
                  Търг -{" "}
                  {car.lots[0] && car.lots[0].sale_date
                    ? splitDateAndTime(car.lots[0].sale_date)
                    : "Очаква се дата"}
                </h2>
              </div>
            </div>

            <button className="flex aspect-square min-h-full w-full flex-col items-center justify-center rounded-md border border-dashed bg-red-500 text-white hover:bg-red-800">
              Направи запитване
              <PhoneCall color="white" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarDetails;
