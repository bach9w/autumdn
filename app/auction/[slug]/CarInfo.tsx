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
} from "@components/ui/carousel";

function splitDateAndTime(date: string) {
  const [datePart, timePart] = date.split("T");
  const [year, month, day] = datePart.split("-");
  return `${day}.${month}.${year}`;
}

export function CarInfo({ data }: { data: any }) {
  return (
    <main className="grid flex-1 items-start gap-4 p-0 sm:px-6 sm:py-0 md:gap-8">
      <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="h-7 w-7">
            <ChevronLeft
              className="h-4 w-4"
              onClick={() => {
                window.history.back();
              }}
            />
            <span className="sr-only">Назад</span>
          </Button>
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            {data.title}
          </h1>
          <Badge variant="outline" className="ml-auto rounded-none sm:ml-0">
            В движение
          </Badge>
          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            <Button
              className="flex items-center justify-center gap-1 hover:bg-red-500 hover:text-white"
              variant="outline"
              size="sm"
            >
              Получи информация <PhoneCall className="h-4 w-4" />
            </Button>
            <Button
              className="flex items-center justify-center gap-1 hover:bg-red-500 hover:text-white"
              size="sm"
            >
              Изпрати запитване{" "}
              <MessageCircleQuestionIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:gap-8">
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-3">
              <CardHeader>
                <CardTitle>Начало на аукцион</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <div className="flex flex-col">
                      <Badge className="mb-2 flex h-[40px] w-full justify-center rounded-none uppercase">
                        {data.lots && splitDateAndTime(data.lots[0].sale_date)}
                      </Badge>

                      {data.lots[data.lots.length - 1].buy_now ? (
                        <Badge className="flex w-full justify-center uppercase">
                          Купи сега за -{" "}
                          {data.lots[data.lots.length - 1].buy_now} $
                        </Badge>
                      ) : (
                        <Badge className="flex w-full justify-center uppercase">
                          Очаквана цена -{" "}
                          {
                            data.lots[data.lots.length - 1]
                              .clean_wholesale_price
                          }{" "}
                          $
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
              <CardHeader>
                <CardTitle>Изображения</CardTitle>
                <CardDescription>Изображения на автомобила</CardDescription>
              </CardHeader>
              <CardContent>
                <Carousel>
                  <CarouselContent>
                    {data.lots &&
                      data.lots[data.lots.length - 1].images.normal.map(
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
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-07-chunk-5">
              <CardHeader>
                <CardTitle>Данни за обявата</CardTitle>
                <CardDescription>
                  Необходими при запитване и покупка
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col">
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
                      {data.manufacturer.name}
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
                        Основна -{" "}
                        {data.lots[data.lots.length - 1].damage.main !== null
                          ? data.lots[data.lots.length - 1].damage.main.name
                          : "Няма"}
                      </p>
                      <p>
                        Вторична -{" "}
                        {data.lots[data.lots.length - 1].damage.second !== null
                          ? data.lots[data.lots.length - 1].damage.second.name
                          : "Няма"}
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
        <div className="flex items-center justify-center gap-2 md:hidden">
          <Button
            className="flex items-center justify-center gap-1 hover:bg-red-500 hover:text-white"
            variant="outline"
            size="sm"
          >
            Получи информация <PhoneCall className="h-4 w-4" />
          </Button>
          <Button
            className="flex items-center justify-center gap-1 hover:bg-red-500 hover:text-white"
            size="sm"
          >
            Изпрати запитване <MessageCircleQuestionIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </main>
  );
}