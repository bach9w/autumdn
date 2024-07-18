"use client";
import { Card, CardContent, CardFooter, CardHeader } from "@components/ui/card";
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
import { motion } from "framer-motion";
import { cn } from "@lib/utils";

const Page = () => {
  const parts = useQuery(api.parts.getParts);
  return (
    <div className="container h-full min-h-screen w-full text-center text-white">
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
                  <motion.div
                    className={cn(
                      part.formatted_price
                        ? `absolute right-2 top-2 rounded-md bg-red-600/90 px-2 py-1 uppercase text-white shadow-lg backdrop-blur-sm`
                        : `hidden`,
                    )}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <div className="text-2xl font-bold">
                      {part.formatted_price}
                    </div>
                  </motion.div>
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
              <CardFooter className="flex w-full flex-col items-center justify-center">
                <div>Допълнителна информация</div>
                <div>{part.information}</div>
              </CardFooter>
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
