"use client";
import { Card, CardContent, CardHeader } from "@components/ui/card";
import { Badge } from "@components/ui/badge";

import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import SearchBar from "./components/search-bar";

const Page = () => {
  const parts = useQuery(api.parts.getParts);
  return (
    <div className="container h-full w-full text-center text-white">
      Части за автомобили (втора употреба)
      <SearchBar />
      <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-2 xl:grid-cols-3">
        {parts &&
          parts.map((part) => (
            <Card key={part.id} className="box">
              <CardHeader>{part.name}</CardHeader>
              <CardContent>
                <div>
                  <img
                    src={part.base_image.path}
                    alt={part.name}
                    className="aspect-square h-full w-full"
                  />
                </div>
                <div className="mt-2 flex w-full justify-center">
                  <Badge className="rounded-r-none">
                    {part.is_new ? "НОВ" : "ВТОРА УПОТРЕБА"}
                  </Badge>

                  <Badge className="rounded-none bg-orange-600 shadow-black drop-shadow-sm">
                    Получи информация
                  </Badge>
                  <Badge className="shadow-xs rounded-l-none bg-red-500 shadow-black drop-shadow-sm">
                    Позвъни сега
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Page;
