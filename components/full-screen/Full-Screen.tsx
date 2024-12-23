"use client";
import { useEffect, useState } from "react";
import Infomation from "./calculation";
// Импортирайте CSS файла
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
import {
  AnimatePresence,
  motion,
  MotionConfig,
  useScroll,
} from "framer-motion";

const url = "https://wandering-bison-612.convex.site/getImage?storageId=";

type TestoveProps = {
  testove: boolean;
  setTestove: (testove: boolean) => void;
  id: any;
};

const Testove: React.FC<TestoveProps> = ({ testove, setTestove, id }) => {
  const [infomation, setInfomation] = useState<string | any>(null);
  const { scrollYProgress } = useScroll();

  const status = testove;

  function onClick() {
    setTestove(!status);
  }

  useEffect(() => {
    if (scrollYProgress) {
      console.log(scrollYProgress);
    }
    if (typeof window !== "undefined") {
      const infomation = Infomation();

      setInfomation(infomation);

      // Забрана на превъртане
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";

      document.body.style.width = "100%";
      document.body.style.height = "100%";

      return () => {
        // Връщане към нормалното състояние при напускане на компонента
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
        document.body.style.height = "";
      };
    }
  }, [scrollYProgress]);

  return (
    <motion.div className="fixed inset-0 top-[-130px] z-50 flex items-center justify-center bg-black bg-opacity-75">
      {" "}
      {testove && infomation ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{
              opacity: 0,
              y: 10,
              transition: { duration: 0.5 },
            }}
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
