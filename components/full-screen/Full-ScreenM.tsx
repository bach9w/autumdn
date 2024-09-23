"use client";
import { useEffect, useState, useCallback } from "react";
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
import { AnimatePresence, motion } from "framer-motion";

type TestoveProps = {
  testove: boolean;
  setTestove: (testove: boolean) => void;
  id: any;
};

const Testove: React.FC<TestoveProps> = ({ testove, setTestove, id }) => {
  const [infomation, setInfomation] = useState<string | any>(null);

  const onClick = useCallback(() => {
    setTestove(!testove);
  }, [testove, setTestove]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const infomation = Infomation();
      setInfomation(infomation);

      // Забрана на превъртане и фиксиране на позицията
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.height = "100%";

      return () => {
        // Възстановяване на нормалното състояние при демонтиране на компонента
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
        document.body.style.height = "";
      };
    }
  }, []);

  return (
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25">
      {infomation && (
        <AnimatePresence initial={false}>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 1000, transition: { duration: 0.5 } }}
            transition={{
              delay: 0,
              duration: 0.4,
              damping: 0.5,
              ease: "easeInOut",
            }}
            className="h-full w-full"
          >
            <Card className="relative h-full w-full">
              <Button
                onClick={onClick}
                className="absolute left-10 top-10 z-50"
              >
                Затвори
              </Button>
              <CardContent className="min-w-screen flex h-full items-center justify-center">
                {" "}
                <Carousel className="w-full min-w-[100vw]">
                  <CarouselContent>
                    {id.map((_: any, index: string) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                              <span className="text-4xl font-semibold">
                                <img src={`${_}`} alt="" />
                              </span>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default Testove;
