"use client";
import { useEffect, useState } from "react";
import Infomation from "./calculation";
import "./Page.css"; // Импортирайте CSS файла
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
import { AnimatePresence, motion, MotionConfig } from "framer-motion";

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
      document.body.style.overflow = "auto";
      document.body.style.position = "fixed";
      document.body.style.top = "0";

      document.body.style.width = "100%";

      return () => {
        // Връщане към нормалното състояние при напускане на компонента
        document.body.style.overflow = "auto";
        document.body.style.position = "auto";
      };
    }
  }, []);

  return (
    <motion.div className="full-screen z-100 only:absolute">
      {testove && infomation ? (
        <AnimatePresence>
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
            className="absolute top-40 h-full"
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
                          <Image
                            src={url + `${id}`}
                            alt=""
                            className="relative bottom-32 min-h-screen w-full"
                            width="2000"
                            height="2000"
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
