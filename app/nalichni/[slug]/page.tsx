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
import Testove from "@components/full-screen/Full-Screen";

const url = "https://wandering-bison-612.convex.site/getImage?storageId=";

export default function Page({
  params,
}: {
  params: { slug: Id<"availableCars"> };
}) {
  const cars = useQuery(api.listAuctions.getLiveById, { id: params.slug });
  const { isSignedIn } = useAuth();
  const [testove, setTestove] = useState(false);
  const [id, setId] = useState(null);

  function onClick() {
    setTestove(!testove);
  }

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedImages = cars?.images?.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen">
      {testove && <Testove testove={testove} setTestove={setTestove} id={id} />}
      <Card className="mt-8 border-0 bg-black">
        <CardHeader>
          <CardTitle className="flex w-full justify-between text-white">
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
                className="flex h-full w-full flex-col bg-white/10 p-0 hover:bg-white/30"
              >
                <div className="flex h-full w-full flex-col items-center justify-end">
                  <Carousel className="h-full w-full">
                    <motion.div
                      className="absolute right-8 z-50 h-full rounded-md border-0 text-white"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <CarouselNext className="bg-red-500" color="black" />
                    </motion.div>
                    <motion.div
                      className="absolute left-8 z-50 h-full rounded-md border-0 text-white shadow-lg backdrop-blur-sm"
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
                            <div className="p-0">
                              <Card className="border-0">
                                <CardContent className="flex h-full w-full items-center justify-center border-0 bg-black p-0">
                                  <span className="text-4xl font-semibold">
                                    <Image
                                      className="h-full w-full"
                                      src={url + `${img.url}`}
                                      alt={`Image ${img.url}`}
                                      width={1200}
                                      height={1000}
                                      onClick={() => {
                                        setTestove(true);
                                        setId(img.url);
                                      }}
                                    />
                                  </span>
                                </CardContent>
                              </Card>
                            </div>
                          </CarouselItem>
                        </>
                      ))}
                    </CarouselContent>
                    <div className="grid grid-cols-2 rounded sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8">
                      {cars?.images?.map((img, index) => (
                        <>
                          <div
                            key={index}
                            className="h-40 w-40 items-center justify-center rounded-full bg-gray-200"
                            onClick={() => {
                              setTestove(true);
                              setId(img.url);
                            }}
                          >
                            <Image
                              className="h-full w-full"
                              src={url + `${img.url}`}
                              alt={`Image ${img.url}`}
                              width={50}
                              height={50}
                            />
                          </div>
                        </>
                      ))}
                    </div>
                  </Carousel>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-white">
                        Допълнителна информация
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-2 gap-4 text-center uppercase text-white">
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
                </div>{" "}
                <div className="mt-2 grid w-full grid-cols-1 justify-between gap-2 md:grid-cols-2">
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
