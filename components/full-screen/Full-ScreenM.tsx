"use client";
import { useEffect, useState } from "react";
import Infomation from "./calculation";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import { Card, CardContent } from "@components/ui/card";
import { Button } from "@components/ui/button";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const url = "https://wandering-bison-612.convex.site/getImage?storageId=";

type TestoveProps = {
  testove: boolean;
  setTestove: (testove: boolean) => void;
  id: any;
};

const Testove: React.FC<TestoveProps> = ({ testove, setTestove, id }) => {
  const [infomation, setInfomation] = useState<string | any>(null);
  const status = testove;

  function onClick() {
    setTestove(!status);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const infomation = Infomation();

      setInfomation(infomation);

      // Забрана на превъртане
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";

      return () => {
        // Връщане към нормалното състояние при напускане на компонента
        document.body.style.overflow = "scroll";
        document.body.style.position = "";
        document.body.style.width = "";
      };
    }
  }, []);

  return (
    <motion.div className="full-screen">
      {infomation ? (
        <AnimatePresence initial={false}>
          <motion.div
            initial={{ opacity: 1, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 1000, transition: { duration: 0.5 } }}
            transition={{
              delay: 0,
              duration: 0.4,
              damping: 0.5,
              ease: "easeInOut",
            }}
            className="absolute top-[550px] h-full sm:top-[150px]"
          >
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-[100vw] max-w-[100%]"
            >
              <CarouselContent>
                {Array.from({ length: 1 }).map((_, index) => (
                  <CarouselItem key={index} className="">
                    <div className="p-0">
                      <Card>
                        <Button
                          onClick={onClick}
                          className="absolute left-10 top-0 z-50 mb-2"
                        >
                          Затвори
                        </Button>
                        <CardContent className="">
                          <img
                            src={`${id}`}
                            alt=""
                            className="relative bottom-32 min-h-screen w-full"
                            width="1000"
                            height="1000"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>
        </AnimatePresence>
      ) : (
        ""
      )}
    </motion.div>
  );
};

export default Testove;
