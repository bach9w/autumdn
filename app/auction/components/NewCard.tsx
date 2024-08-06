"use client";
import Image from "next/image";
import React, { act, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { CiLocationOn } from "react-icons/ci";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@components/ui/carousel";
import { cn } from "@lib/utils";
import { Button } from "@components/ui/button";
import { Badge } from "@components/ui/badge";
import { Separator } from "@components/ui/separator";
import DamageCheck from "@app/auction/components/DamageCheck";
import Link from "next/link";

function splitDateAndTime(date: string) {
  // Създаване на дата обект от предоставената дата
  const targetDate = new Date(date);

  // Получаване на днешната дата
  const today = new Date();

  // Изчистване на времевата част за днешната дата
  today.setHours(0, 0, 0, 0);

  // Изчисляване на разликата в милисекунди между двете дати
  const diffInMs = targetDate.getTime() - today.getTime();

  // Преобразуване на разликата в дни
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

  return diffInDays;
}

function priceBGN(price: number): any {
  if (price === 0)
    return (
      <div className="flex w-full items-center justify-between">
        <p>ЗАПОЧНИ НАДДАВАНЕТО</p>0 ЛВ.
      </div>
    );
  const changed = price * 1.792846 + 10000;
  return (
    <div className="flex w-full items-center justify-between">
      <p>Купи сега</p>
      {Number(changed.toFixed(0)).toLocaleString("bg-BG")} ЛВ.
    </div>
  );
}

function NewCard({ card }: { card: any }) {
  const [active, setActive] = useState<(typeof cars)[number] | boolean | null>(
    null,
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "scroll";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 h-full w-full bg-black/20"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 z-[90] grid place-items-center items-center">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="absolute right-1/2 top-2 z-[100] flex h-6 w-6 items-center justify-center rounded-full bg-card lg:hidden"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="flex h-full w-full max-w-[500px] flex-col justify-center overflow-hidden bg-white dark:bg-neutral-900 sm:rounded-3xl md:h-fit md:max-h-[90%]"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                {active.lots?.length &&
                  active.lots[active.lots.length - 1]?.images && (
                    <Carousel className="h-96 w-full" key={active.id}>
                      <CarouselContent>
                        {active.lots[active.lots.length - 1].images?.normal !==
                        null ? (
                          active.lots[active.lots.length - 1].images.normal.map(
                            (img: any, index: any) => (
                              <CarouselItem key={index}>
                                <motion.img
                                  src={img}
                                  alt={`Car image ${index + 1}`}
                                  width={600}
                                  height={400}
                                  className="h-96 w-full object-cover"
                                  whileHover={{ scale: 1.05 }}
                                  transition={{ duration: 0.3 }}
                                />
                              </CarouselItem>
                            ),
                          )
                        ) : (
                          <CarouselItem>
                            <div className="aspect-square h-[300px] w-[300px] rounded-md object-cover">
                              No Image
                            </div>
                          </CarouselItem>
                        )}
                      </CarouselContent>
                      <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                        }}
                        exit={{ opacity: 0, y: 50 }}
                        className="absolute right-5 top-5"
                      >
                        <Badge className="bg-sky-600">ПАЛИ И ТРЪГВА</Badge>
                      </motion.div>
                    </Carousel>
                  )}
              </motion.div>

              <div>
                <div className="flex items-start justify-between p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-base font-medium text-neutral-700 dark:text-neutral-200"
                    >
                      {active.manufacturer.name} / {active.model.name}
                    </motion.h3>

                    <motion.p
                      layoutId={`description-${active.id}-${id}`}
                      className="text-base text-neutral-600 dark:text-neutral-400"
                    >
                      {active.year} /{" "}
                      {active.drive_wheel && active.drive_wheel.name} /{" "}
                      {active.transmission && active.transmission.name} /{" "}
                      {active.body_type && active.body_type.name}
                    </motion.p>
                  </div>
                </div>
                <motion.a
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  target="_blank"
                  className="flex w-full bg-red-500 px-4 py-3 text-sm font-bold text-white"
                >
                  {priceBGN(active.lots[active.lots.length - 1].buy_now)}
                </motion.a>
                <div className="relative pt-4 uppercase">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    exit={{ opacity: 0 }}
                  >
                    <Badge className="flex w-full justify-center rounded-none bg-card/90 text-center text-xl">
                      Детайли
                    </Badge>
                    <Separator orientation="horizontal" />
                    <h2 className="bg-black text-center text-white">
                      Пробег -{" "}
                      {active.lots[0] &&
                        active.lots[0].odometer &&
                        active.lots[0].odometer.km}{" "}
                      км
                    </h2>
                    <Separator orientation="horizontal" />

                    <h2
                      className={cn(
                        "bg-black text-center text-[20px] text-white",
                      )}
                    >
                      Двигател - {active.engine && active.engine.name}
                    </h2>

                    <Separator orientation="horizontal" />

                    <h2 className="bg-black text-center font-bold uppercase text-white">
                      {active.lots[active.lots.length - 1] &&
                      active.lots[active.lots.length - 1].damage &&
                      active.lots[active.lots.length - 1].damage.main.name !==
                        null ? (
                        <DamageCheck damage={active.lots[0].damage.main.name} />
                      ) : (
                        "Няма"
                      )}
                    </h2>
                    <h2
                      className={cn(
                        "flex items-center justify-center bg-sky-500/80 text-center text-[20px] text-white",
                      )}
                    >
                      <CiLocationOn />
                      Локация -{" "}
                      {
                        active.lots[active.lots.length - 1].location.country
                          .name
                      }{" "}
                      / {active.lots[active.lots.length - 1].location.city.name}
                    </h2>
                  </motion.div>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-20 flex-col items-start gap-4 overflow-auto pb-10 text-xs text-neutral-600 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] dark:text-neutral-400 md:h-fit md:text-sm lg:text-base"
                  >
                    {typeof active.lots[active.lots.length - 1].status.name ===
                    "string" ? (
                      <Link
                        className="mt-2 w-full rounded-t-none"
                        href={`/auction/${active.vin}`}
                      >
                        <Button className="w-full rounded-t-none">
                          Разгледай аукциона
                        </Button>
                      </Link>
                    ) : (
                      active.lots[active.lots.length - 1].status.id
                    )}
                  </motion.div>
                  <motion.button
                    key={`button-${active.title}-${id}`}
                    layout
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                      transition: {
                        duration: 0.05,
                      },
                    }}
                    className="flex h-6 w-full items-center justify-center rounded-full bg-white lg:hidden"
                    onClick={() => setActive(null)}
                  >
                    Затвори <CloseIcon />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      {card && (
        <motion.div
          layoutId={`card-${card.title}-${id}`}
          key={card.title}
          onClick={() => setActive(card)}
          className="group flex cursor-pointer flex-col rounded-xl bg-card p-4 hover:bg-neutral-50"
        >
          <div className="flex w-full flex-col gap-4">
            <motion.div layoutId={`image-${card.title}-${id}`}>
              <motion.div
                className={cn(
                  card.lots?.[card.lots.length - 1]?.buy_now !== null
                    ? `relative top-2 rounded-md bg-red-600/90 px-2 py-1 uppercase text-white shadow-lg backdrop-blur-sm`
                    : `hidden`,
                )}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="flex justify-between text-2xl font-bold">
                  {priceBGN(card.lots?.[card.lots.length - 1]?.buy_now)}
                </div>
              </motion.div>
              <img
                width={300}
                height={300}
                src={
                  (card.lots[card.lots.length - 1].images &&
                    card.lots[card.lots.length - 1].images.normal &&
                    card.lots[card.lots.length - 1].images.normal[0]) ||
                  (card.lots[card.lots.length - 1].images &&
                    card.lots[card.lots.length - 1].images.big &&
                    card.lots[card.lots.length - 1].images.big[0]) ||
                  "/no-image.jpeg"
                }
                alt={card.title}
                className="h-100 w-full rounded-lg object-cover md:h-[300px]"
              />

              <motion.div
                className="relative bottom-2 rounded-md bg-orange-700/75 px-2 py-1 uppercase text-white shadow-lg backdrop-blur-sm"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="text-center text-xl font-bold">
                  {card.lots?.[card.lots.length - 1]?.sale_date !== null ? (
                    <div>
                      {splitDateAndTime(
                        card.lots[card.lots.length - 1]?.sale_date,
                      ) < 0 ? (
                        <div className="text-red-500">Търгува се</div>
                      ) : (
                        <div>
                          {splitDateAndTime(
                            card.lots[card.lots.length - 1]?.sale_date,
                          )}{" "}
                          дни до търг
                        </div>
                      )}
                    </div>
                  ) : (
                    "Наскоро добавена"
                  )}
                </div>
              </motion.div>
            </motion.div>

            <div className="flex flex-col items-center justify-center">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="text-center text-base font-medium text-white group-hover:text-black dark:text-neutral-200 md:text-left"
              >
                {card.manufacturer && card.manufacturer.name} /{" "}
                {card.model && card.model.name}
              </motion.h3>

              <motion.p
                layoutId={`description-${card.id}-${id}`}
                className="text-center text-base text-neutral-600 dark:text-neutral-400 md:text-left"
              >
                {card.year} / {card.cylinders} цилиндров /{" "}
                {card.fuel && card.fuel.name} /{" "}
                {card.transmission && card.transmission.name}
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cars = [
  {
    id: 18550,
    year: 2016,
    title: "2016 Land Rover Range Rover Supercharged",
    vin: "SALGS2EF2GA306177",
    manufacturer: {
      id: 74,
      name: "Land Rover",
    },
    model: {
      id: 474,
      name: "Range Rover",
      manufacturer_id: 74,
    },
    generation: {
      id: 2271,
      name: "IV",
      manufacturer_id: 74,
      model_id: 474,
    },
    body_type: {
      name: "suv",
      id: 5,
    },
    color: {
      name: "black",
      id: 15,
    },
    engine: {
      id: 37,
      name: "5.0l 8",
    },
    transmission: {
      name: "automatic",
      id: 1,
    },
    drive_wheel: {
      name: "all",
      id: 3,
    },
    vehicle_type: {
      name: "automobile",
      id: 1,
    },
    fuel: {
      name: "gas",
      id: 5,
    },
    cylinders: 8,
    lots: [
      {
        id: 18551,
        lot: "65810523",
        domain: {
          name: "copart_com",
          id: 3,
        },
        external_id: null,
        odometer: {
          km: 220118,
          mi: 136775,
          status: {
            name: "actual",
            id: 1,
          },
        },
        estimate_repair_price: null,
        pre_accident_price: null,
        clean_wholesale_price: 32125,
        actual_cash_value: null,
        sale_date: "2024-06-06T01:00:00.000000Z",
        bid: 15800,
        buy_now: 15800,
        status: {
          name: "sale",
          id: 3,
        },
        seller: null,
        title: {
          id: 1,
          code: null,
          name: "Certificate Of Title",
        },
        detailed_title: {
          id: 1767,
          code: null,
          name: "AZ - CERTIFICATE OF TITLE",
        },
        damage: {
          main: {
            id: 1,
            name: "Minor Dent/Scratches",
          },
          second: null,
        },
        keys_available: true,
        airbags: null,
        condition: {
          name: "enhanced",
          id: 7,
        },
        grade_iaai: null,
        images: {
          id: 18523,
          small: [
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/3dbd0fb138974789a384b263114ade8e_thb.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/bc8d748e38b44986b95e9def92b9e15a_thb.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/48c6475ec7c446ba8ec5cb6e5d3fbf75_thb.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/ebacd3b9fefb42949c677f4bb8b9790d_thb.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/cdc54b11f2f64624aeefd4e07cdd9e1a_thb.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/9647e663460244a783f6d9175f37e922_thb.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/c03ad1d69dc74de8bb7d77762e86d262_thb.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/8a3259bf2d9643dcbb52383e4b2ee321_thb.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/d5e6057ffb1d48daa8ab2161f13e1c27_thb.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/98af767b06f84addaccf65917d228ed1_thb.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/7d5603c93371435eac581ae077080ca8_thb.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/6e0da7c69c8f4266a3564c80faef975f_thb.jpg",
          ],
          normal: [
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/3dbd0fb138974789a384b263114ade8e_ful.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/bc8d748e38b44986b95e9def92b9e15a_ful.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/48c6475ec7c446ba8ec5cb6e5d3fbf75_ful.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/ebacd3b9fefb42949c677f4bb8b9790d_ful.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/cdc54b11f2f64624aeefd4e07cdd9e1a_ful.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/9647e663460244a783f6d9175f37e922_ful.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/c03ad1d69dc74de8bb7d77762e86d262_ful.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/8a3259bf2d9643dcbb52383e4b2ee321_ful.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/d5e6057ffb1d48daa8ab2161f13e1c27_ful.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/98af767b06f84addaccf65917d228ed1_ful.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/7d5603c93371435eac581ae077080ca8_ful.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/6e0da7c69c8f4266a3564c80faef975f_ful.jpg",
          ],
          big: [
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/3dbd0fb138974789a384b263114ade8e_hrs.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/bc8d748e38b44986b95e9def92b9e15a_hrs.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/48c6475ec7c446ba8ec5cb6e5d3fbf75_hrs.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/ebacd3b9fefb42949c677f4bb8b9790d_hrs.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/cdc54b11f2f64624aeefd4e07cdd9e1a_hrs.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/9647e663460244a783f6d9175f37e922_hrs.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/c03ad1d69dc74de8bb7d77762e86d262_hrs.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/8a3259bf2d9643dcbb52383e4b2ee321_hrs.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/d5e6057ffb1d48daa8ab2161f13e1c27_hrs.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/98af767b06f84addaccf65917d228ed1_hrs.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/7d5603c93371435eac581ae077080ca8_hrs.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/6e0da7c69c8f4266a3564c80faef975f_hrs.jpg",
          ],
          exterior: null,
          interior: null,
          video: null,
          video_youtube_id: null,
          external_panorama_url: null,
        },
        location: {
          country: {
            iso: "us",
            name: "USA",
          },
          state: {
            id: 115,
            code: "az",
            name: "arizona",
          },
          city: {
            id: 41,
            name: "phoenix",
          },
          location: {
            id: 57,
            name: "az - phoenix",
          },
          latitude: 33.44173,
          longitude: -112.16871,
          postal_code: "85043 4706",
          is_offsite: null,
          raw: null,
        },
        selling_branch: {
          name: "az - phoenix",
          link: null,
          number: null,
          id: 540329,
          domain_id: 3,
        },
        created_at: "2023-09-09T01:58:21.000000Z",
        updated_at: "2024-06-05T16:45:19.000000Z",
      },
    ],
  },
];

export default NewCard;
