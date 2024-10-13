"use client";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import { error } from "console";
import Loading from "@components/loading";
import { years } from "@constants/import";
import { useRouter } from "next/navigation";

export default function SearchComponentFirst() {
  const [chosedManufacturer, setChosedManufacturer] = useState<any>("all");
  const [chosedManName, setChosedManName] = useState<any>();
  const [chosedModel, setChosedModel] = useState<any>();
  const [chosedGeneration, setChosedGeneration] = useState<any>();
  const [yearFrom, setYearFrom] = useState<any>();
  const [yearTo, setYearTo] = useState<any>();
  const [vin, setVin] = useState<string>();
  const router = useRouter();

  const manufacturers = useQuery(api.manufacturer.getManufacturers);

  const fetcher = (url: any) => fetch(url).then((res) => res.json());

  const { data: modelsData } = useSWR(
    chosedManufacturer !== undefined
      ? `/api/models/${chosedManufacturer}`
      : null,
    fetcher,
  );

  const { data: generationsData } = useSWR(
    chosedModel !== undefined ? `/api/generations/${chosedModel}` : null,
    fetcher,
  );

  const { data: availableCars, isLoading: availabeLoading } = useSWR(
    `/api/searchNumber?manufacturer=${chosedManufacturer}&model=${chosedModel}&generation=${chosedGeneration}$&from_year=${yearFrom}&to_year=${yearTo}&status=3`,
    fetcher,
  );

  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-between rounded-md bg-red-500/60 p-2 text-[17px] sm:flex-row md:rounded-full xl:max-w-7xl">
      <div className="mb-2 flex w-full flex-col items-center gap-2 space-x-2 bg-black p-2 sm:mb-0 sm:w-auto sm:flex-row sm:rounded-full">
        <SearchIcon className="ml-2 text-white" />
        <p className="text-white">Търсачка</p>
        <Input
          type="text"
          placeholder="Търси по VIN или ключова дума"
          className="hidden flex-1 border-none bg-transparent text-white placeholder-white focus:outline-none md:block"
        />

        <Select
          value={chosedManufacturer}
          onValueChange={setChosedManufacturer}
        >
          <SelectTrigger className="flex w-full justify-between border-none bg-transparent text-white">
            {chosedManufacturer !== "all" ? (
              <div className="flex w-full items-center justify-center gap-4">
                {
                  manufacturers
                    ?.filter(
                      (manufacturer) => manufacturer.id === chosedManufacturer,
                    )
                    ?.find(
                      (manufacturers) =>
                        manufacturers.id === chosedManufacturer,
                    )?.name
                }{" "}
                <img
                  src={
                    manufacturers
                      ?.filter(
                        (manufacturer) =>
                          manufacturer.id === chosedManufacturer,
                      )
                      ?.find(
                        (manufacturers) =>
                          manufacturers.id === chosedManufacturer,
                      )?.image
                  }
                  className="rounded bg-white/100"
                  width={30}
                  height={30}
                />
              </div>
            ) : (
              <div>Марки</div>
            )}
          </SelectTrigger>
          <SelectContent className="max-h-[300px] overflow-y-auto">
            <SelectItem
              value="all"
              className="flex items-center justify-between"
            >
              <span>Марки</span>
            </SelectItem>
            {manufacturers?.map((manufacturer) => (
              <SelectItem
                key={manufacturer._id}
                value={manufacturer.id}
                className="flex items-center justify-between py-2"
              >
                <span>{manufacturer.name}</span>
                {manufacturer.image && (
                  <img
                    src={manufacturer.image}
                    alt={manufacturer.name}
                    width={20}
                    height={20}
                    className="ml-2 inline-block bg-white"
                  />
                )}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          disabled={chosedManufacturer !== "all" ? false : true}
          value={chosedModel}
          onValueChange={setChosedModel}
        >
          <SelectTrigger className="flex w-full items-center border-none bg-transparent text-white">
            <SelectValue placeholder="Всички модели" />
          </SelectTrigger>
          <SelectContent className="rounded-md border border-[#C0C0C0] bg-white text-[#333333]">
            <SelectItem value="all">Всички модели</SelectItem>
            {modelsData?.data?.map((model: any) => (
              <SelectItem value={model?.id}>{model?.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={yearFrom} onValueChange={setYearFrom}>
          <SelectTrigger className="flex w-full items-center border-none bg-transparent text-white">
            <SelectValue placeholder="Година от" />
          </SelectTrigger>
          <SelectContent className="max-h-[300px] overflow-y-auto">
            {years.map((year) => (
              <SelectItem key={year.name} value={year.name}>
                {year.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={yearTo} onValueChange={setYearTo}>
          <SelectTrigger className="flex w-full items-center border-none bg-transparent text-white">
            <SelectValue placeholder="Година до" />
          </SelectTrigger>
          <SelectContent className="max-h-[300px] overflow-y-auto">
            {years.map((year) => (
              <SelectItem key={year.name} value={year.name}>
                {year.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="ml-2 flex items-center space-x-6">
        <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 rounded-full bg-[#0A1F44]" />
            <span className="text-white">Copart</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 rounded-full bg-[#FF8C00]" />
            <span className="text-[#FF8C00]">IAAI</span>
          </div>
        </div>

        <button
          className="group relative rounded bg-black px-4 py-2.5 font-semibold text-white transition-colors hover:bg-red-600/60 md:rounded-r-full"
          disabled={availabeLoading ? true : false}
          onClick={() => {
            router.push(
              `/auction?manufacturer=${chosedManufacturer}&model=${chosedModel}&generation=${chosedGeneration}&from_year=${yearFrom}&to_year=${yearTo}&per_page=10`,
            );
          }}
        >
          <span className="font-bold">ТЪРСИ</span>
          <span className="block text-xs">
            {" "}
            от {availableCars?.meta?.total} возила
          </span>
          <Drip left="10%" height={24} delay={0.5} />
          <Drip left="30%" height={20} delay={3} />
          <Drip left="57%" height={10} delay={4.25} />
          <div className="md:hidden">
            <Drip left="85%" height={16} delay={1.5} />
          </div>
        </button>
      </div>
    </div>
  );
}

interface DripProps {
  left: string;
  height: number;
  delay: number;
}

const Drip = ({ left, height, delay }: DripProps) => {
  return (
    <motion.div
      className="absolute top-[99%] origin-top"
      style={{
        left,
      }}
      initial={{ scaleY: 0.75 }}
      animate={{ scaleY: [0.75, 1, 0.75] }}
      transition={{
        duration: 2,
        times: [0, 0.25, 1],
        delay,
        ease: "easeIn",
        repeat: Infinity,
        repeatDelay: 2,
      }}
    >
      <div
        style={{ height }}
        className="w-2 rounded-b-full bg-black transition-colors group-hover:bg-black"
      />
      <svg
        width="6"
        height="6"
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-full top-0"
      >
        <g clipPath="url(#clip0_1077_28)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
            className="fill-black transition-colors group-hover:fill-black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
            className="fill-black transition-colors group-hover:fill-black"
          />
        </g>
        <defs>
          <clipPath id="clip0_1077_28">
            <rect width="6" height="6" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <svg
        width="6"
        height="6"
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-full top-0 rotate-90"
      >
        <g clipPath="url(#clip0_1077_28)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
            className="fill-black transition-colors group-hover:fill-black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
            className="fill-black transition-colors group-hover:fill-black"
          />
        </g>
        <defs>
          <clipPath id="clip0_1077_28">
            <rect width="6" height="6" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <motion.div
        initial={{ y: -8, opacity: 1 }}
        animate={{ y: [-8, 50], opacity: [1, 0] }}
        transition={{
          duration: 2,
          times: [0, 1],
          delay,
          ease: "easeIn",
          repeat: Infinity,
          repeatDelay: 2,
        }}
        className="absolute top-full h-2 w-2 rounded-full bg-black transition-colors group-hover:bg-black"
      />
    </motion.div>
  );
};

/*
 <div className="rounded bg-red-500/60 p-4 text-white md:p-10 lg:p-12">
      <div className="flex items-center justify-between space-x-4 md:space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4"></div>
        <img src="/myride_logo.png" className="w-[200px]" />
      </div>
      <div className="space-y-4 md:space-y-6 lg:space-y-8">
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Какъв автомобил търсите?
          </label>
          <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
            <Select
              value={chosedManufacturer}
              onValueChange={setChosedManufacturer}
            >
              <SelectTrigger className="w-1/2 rounded-md border border-[#C0C0C0] bg-white text-[#333333] md:w-48 lg:w-56">
                <SelectValue placeholder="Всички марки" />
              </SelectTrigger>
              <SelectContent className="rounded-md border border-[#C0C0C0] bg-white text-[#333333]">
                <SelectItem value="all">Всички марки</SelectItem>
                {manufacturers?.map((manufacturer) => (
                  <SelectItem value={manufacturer.id} key={manufacturer._id}>
                    <div className="flex text-[15px]">
                      {manufacturer.name}
                      <img
                        src={manufacturer?.image || ""}
                        alt={manufacturer.name}
                        width={20}
                        height={20}
                      />
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              disabled={chosedManufacturer !== "all" ? false : true}
              value={chosedModel}
              onValueChange={setChosedModel}
            >
              <SelectTrigger className="w-1/2 rounded-md border border-[#C0C0C0] bg-white text-[#333333] md:w-48 lg:w-56">
                <SelectValue placeholder="Всички модели" />
              </SelectTrigger>
              <SelectContent className="rounded-md border border-[#C0C0C0] bg-white text-[#333333]">
                <SelectItem value="all">Всички модели</SelectItem>
                {modelsData?.data?.map((model: any) => (
                  <SelectItem value={model?.id}>{model?.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
            <Select
              value={chosedGeneration}
              onValueChange={setChosedGeneration}
              disabled={chosedModel !== "all" ? false : true}
            >
              <SelectTrigger className="w-40 rounded-md border border-[#C0C0C0] bg-white text-[#333333] md:w-48 lg:w-56">
                <SelectValue placeholder="Генерации" />
              </SelectTrigger>
              <SelectContent className="rounded-md border border-[#C0C0C0] bg-white text-[#333333]">
                <SelectItem value="all">Всички генерации</SelectItem>
                {generationsData?.data?.map((generation: any) => (
                  <SelectItem value={generation?.id}>
                    {generation?.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={yearFrom} onValueChange={setYearFrom}>
              <SelectTrigger className="w-40 rounded-md border border-[#C0C0C0] bg-white text-[#333333] md:w-48 lg:w-56">
                <SelectValue placeholder="Година от" />
              </SelectTrigger>
              <SelectContent className="rounded-md border border-[#C0C0C0] bg-white text-[#333333]">
                {years.map((year) => (
                  <SelectItem value={year.name}>{year.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={yearTo} onValueChange={setYearTo}>
              <SelectTrigger className="w-40 rounded-md border border-[#C0C0C0] bg-white text-[#333333] md:w-48 lg:w-56">
                <SelectValue placeholder="Година до" />
              </SelectTrigger>
              <SelectContent className="rounded-md border border-[#C0C0C0] bg-white text-[#333333]">
                {years.map((year) => (
                  <SelectItem value={year.name}>{year.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="text-center text-[#C0C0C0]">ИЛИ</div>
        <div className="relative">
          <Input
            type="search"
            placeholder="Потърси по VIN"
            className="w-full rounded-md border border-[#C0C0C0] bg-white pl-8 text-[#333333] md:w-auto"
            onChange={(e) => setVin(e.target.value)}
          />
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-[#C0C0C0]" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 rounded-full bg-[#0A1F44]" />
              <span className="text-[#0A1F44]">Copart</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 rounded-full bg-[#FF8C00]" />
              <span className="text-[#FF8C00]">IAAI</span>
            </div>
          </div>
          <Button
            disabled={availabeLoading ? true : false}
            className="rounded-md bg-[#3967d3] px-6 py-2 text-sm text-white hover:bg-[#1b2e5c]/100 focus:ring-2 focus:ring-[#3967d3] focus:ring-offset-2 md:px-8 md:py-3 md:text-base lg:px-10 lg:py-4 lg:text-lg"
            onClick={() => {
              router.push(
                `/auction?manufacturer=${chosedManufacturer}&model=${chosedModel}&generation=${chosedGeneration}$&from_year=${yearFrom}&to_year=${yearTo}&per_page=10`,
              );
            }}
          >
            Покажи {availableCars?.meta?.total}
            <SearchIcon className="relative h-4 w-4 text-[#C0C0C0]" />
          </Button>
        </div>
      </div>
    </div> */

function CarIcon(props: any) {
  return <img src="/myride_logo.png" width={50} height={50} alt="Logo" />;
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
