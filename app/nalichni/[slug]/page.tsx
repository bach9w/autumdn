"use client";

import { Badge } from "@components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { api } from "@convex/_generated/api";
import { Id } from "@convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@components/ui/button";
import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import ReactWhatsapp from "react-whatsapp";
import { MessageCircleQuestionIcon, PhoneCall } from "lucide-react";
import { useState } from "react";
import Edit from "../components/edit";

const url = "https://wandering-bison-612.convex.site/getImage?storageId=";

export default function Page({
  params,
}: {
  params: { slug: Id<"availableCars"> };
}) {
  const cars = useQuery(api.listAuctions.getLiveById, { id: params.slug });
  const { isSignedIn } = useAuth();

  return (
    <div className="min-h-full">
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex w-full justify-between text-black">
            <div>
              {cars?.manufacturerId}/ {cars?.modelId}
            </div>
            {isSignedIn && <Edit car={cars} />}
            <Badge className="bg-red-500">{cars?.vin} ЛВ.</Badge>
          </CardTitle>
          <CardContent>
            <CardDescription>
              <div
                key={cars?._id}
                className="h-full w-full bg-white/10 p-2 hover:bg-white/30"
              >
                <div className="flex w-full flex-col items-center justify-end">
                  <Carousel className="w-full max-w-md md:max-w-xl">
                    <motion.div
                      className="absolute right-8 z-50 h-full rounded-md text-white shadow-lg backdrop-blur-sm"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <CarouselNext className="bg-red-500" color="black" />
                    </motion.div>
                    <motion.div
                      className="absolute left-8 z-50 h-full rounded-md text-white shadow-lg backdrop-blur-sm"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <CarouselPrevious className="bg-red-500" color="black" />
                    </motion.div>
                    <CarouselContent>
                      {cars?.images?.map((img, index) => (
                        <>
                          <CarouselItem key={index}>
                            <div className="p-1">
                              <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                  <span className="text-4xl font-semibold">
                                    <Image
                                      className="object-scale-down"
                                      src={url + `${img.url}`}
                                      alt={`Image ${img.url}`}
                                      width={1000}
                                      height={300}
                                    />
                                  </span>
                                </CardContent>
                              </Card>
                            </div>
                          </CarouselItem>
                        </>
                      ))}
                    </CarouselContent>
                  </Carousel>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        Допълнителна информация
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-2 gap-4 text-center uppercase">
                          <div>
                            <h4 className="text-sm font-medium">Ключове</h4>
                            {cars?.keys && (
                              <Badge variant="destructive">Да</Badge>
                            )}
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Airbags</h4>
                            {cars?.airbags && (
                              <Badge variant="destructive">Да</Badge>
                            )}
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Тип</h4>
                            <p className="uppercase">{cars?.body_type}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Цвят</h4>
                            <p>{cars?.color}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Гориво</h4>
                            <p>{cars?.fuel}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Трансмисия</h4>
                            <p>{cars?.transmission}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Двигател</h4>
                            <p>{cars?.engine}</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="mt-2 flex w-full justify-between">
                  <Button
                    className="inline-flex h-[40px] w-full animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#220103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    variant="outline"
                    size="sm"
                  >
                    <a
                      className="flex animate-pulse items-center justify-center gap-1"
                      href="tel:+359876995555"
                    >
                      Получи информация <PhoneCall className="h-4 w-4" />
                    </a>
                  </Button>

                  <Button
                    className="inline-flex h-[40px] w-full animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#220103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    size="sm"
                  >
                    <ReactWhatsapp
                      className="flex animate-pulse items-center justify-center gap-1"
                      element="webview"
                      number="+359876995555"
                      message={`Здравейте, интересувам се от автомил ${cars?.manufacturerId}/${cars?.modelId}/ с цена ${cars?.vin} лв.`}
                    >
                      Изпрати запитване{" "}
                      <MessageCircleQuestionIcon className="h-4 w-4" />
                    </ReactWhatsapp>
                  </Button>
                </div>
              </div>
            </CardDescription>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}
