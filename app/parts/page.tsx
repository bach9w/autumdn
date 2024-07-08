"use client";
import { Card, CardContent, CardHeader } from "@components/ui/card";
import { Badge } from "@components/ui/badge";

import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import SearchBar from "./components/search-bar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@components/ui/carousel";
import { Label } from "@components/ui/label";
import { Button } from "@components/ui/button";

const Page = () => {
  const parts = useQuery(api.parts.getParts);
  return (
    <div className="container h-full w-full text-center text-white">
      Части за автомобили
      <SearchBar />
      <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-2 xl:grid-cols-3">
        {parts &&
          parts.map((part) => (
            <Card
              key={part.id}
              className="w-full overflow-hidden rounded-lg border-none bg-card text-card-foreground shadow-lg"
            >
              <CardHeader>{part.name}</CardHeader>
              <CardContent>
                <Carousel>
                  <CarouselContent>
                    {part.base_image.map((file) => (
                      <CarouselItem className="flex aspect-square items-center justify-center">
                        <img
                          className="h-full w-full object-fill"
                          src={file.path}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>

                <div className="mt-2 flex w-full justify-center">
                  <Badge className="rounded-r-none">
                    {part.is_new ? "НОВ" : "ВТОРА УПОТРЕБА"}
                  </Badge>

                  <Badge className="rounded-none bg-orange-600 shadow-black drop-shadow-sm">
                    Направи запитване
                  </Badge>
                  <Badge className="shadow-xs rounded-l-none bg-red-500 shadow-black drop-shadow-sm">
                    Позвъни сега
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
      <div className="flex flex-col">
        <Label className="text-md uppercase">
          При неналичието на желаната част
        </Label>
        <Button>Направи запитване</Button>
      </div>
    </div>
  );
};

export default Page;
