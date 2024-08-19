"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardMain } from "@components/card";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";

import { api } from "@convex/_generated/api";
import { useQuery } from "convex/react";
import { motion } from "framer-motion";
import {
  MessageCircleQuestionIcon,
  PhoneCall,
  PhoneForwarded,
} from "lucide-react";
import Image from "next/image";
import ReactWhatsapp from "react-whatsapp";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

const NalichniPage = () => {
  const { isSignedIn } = useAuth();
  const images = useQuery(api.listAuctions.getLive);
  const url = "https://wandering-bison-612.convex.site/getImage?storageId=";

  return (
    <section className="min-h-screen">
      <div className="py-10 text-center text-2xl font-bold uppercase text-white drop-shadow-lg">
        Налични автомобили
      </div>

      {images && images.length && (
        <div className="grid h-full grid-cols-1 gap-2 p-2 md:grid-cols-2 xl:grid-cols-3">
          {images.map((image) => (
            <>
              <Link href={`/nalichni/${image._id}`}>
                <div
                  key={image._id}
                  className="h-full w-full bg-white/10 p-2 hover:bg-white/30"
                >
                  <div className="bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-end justify-between">
                      <div className="text-white">
                        <div className="flex h-full w-full">
                          <h3 className="text-2xl font-bold">
                            {image.manufacturerId}/{image.modelId}
                          </h3>
                          {isSignedIn && (
                            <Button className="w-full">Промени</Button>
                          )}
                        </div>
                        <p className="text-sm">
                          {image.year} | {image.km} km
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 flex w-full justify-between bg-white">
                    <Badge className="rounded-none">
                      {" "}
                      {image.modelId}/{image.manufacturerId}{" "}
                    </Badge>
                    <Badge className="rounded-none bg-red-500">
                      {image.vin} ЛВ.
                    </Badge>
                  </div>
                  <div className="flex w-full flex-col items-center justify-end">
                    <Carousel className="w-full">
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
                        <CarouselPrevious
                          className="bg-red-500"
                          color="black"
                        />
                      </motion.div>
                      <CarouselContent>
                        {image.images?.map((img, index) => (
                          <>
                            <CarouselItem key={index}>
                              <div className="p-0">
                                <Card>
                                  <CardContent className="flex w-full items-center justify-center p-0">
                                    <span className="text-4xl font-semibold">
                                      <Image
                                        className="object-cover"
                                        src={url + `${img.url}`}
                                        alt={`Image ${img.url}`}
                                        width={1000}
                                        height={800}
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
                  </div>

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
                        message={`Здравейте, интересувам се от автомил ${image.manufacturerId}/${image.modelId}/ с цена ${image.vin} лв.`}
                      >
                        Изпрати запитване{" "}
                        <MessageCircleQuestionIcon className="h-4 w-4" />
                      </ReactWhatsapp>
                    </Button>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      )}
      {images && images.length === 0 && (
        <div className="flex min-h-screen w-full flex-col items-center justify-center text-2xl font-bold uppercase text-white">
          <p>Няма налични автомобили</p>
          <p>Проверете отново</p>
        </div>
      )}
    </section>
  );
};

export default NalichniPage;
