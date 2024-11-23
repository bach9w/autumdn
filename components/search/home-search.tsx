"use client";

import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

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

export default function VehicleSearch() {
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
    <div className="mx-auto w-full max-w-5xl space-y-4 rounded-lg bg-gray-900 p-4">
      {/* Top row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
        <Input
          className="h-12 border-none bg-gray-700 text-white placeholder-gray-400 md:col-span-1"
          placeholder="Потърси ключова дума или VIN"
        />

        <Select
          value={chosedManufacturer}
          onValueChange={setChosedManufacturer}
        >
          <SelectTrigger className="h-12 border-none bg-gray-700 text-white">
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
          <SelectContent className="overflow-y-auto">
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
          <SelectTrigger className="h-12 border-none bg-gray-700 text-white">
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
          <SelectTrigger className="h-12 border-none bg-gray-700 text-white">
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
          <SelectTrigger className="h-12 border-none bg-gray-700 text-white">
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
        <Select>
          <SelectTrigger className="h-12 border-none bg-gray-700 text-white">
            <SelectValue placeholder="Километраж" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-50000">0 - 50,000</SelectItem>
            <SelectItem value="50000-100000">50,000 - 100,000</SelectItem>
            <SelectItem value="100000+">100,000+</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="h-12 border-none bg-gray-700 text-white">
            <SelectValue placeholder="Състояние" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="new">Нов</SelectItem>
            <SelectItem value="used">Използван</SelectItem>
            <SelectItem value="certified">Certified Pre-Owned</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="h-12 border-none bg-gray-700 text-white">
            <SelectValue placeholder="Трансмисия" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="automatic">Автоматична</SelectItem>
            <SelectItem value="manual">Ръчна</SelectItem>
            <SelectItem value="cvt">CVT</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="h-12 border-none bg-gray-700 text-white">
            <SelectValue placeholder="Гориво" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gasoline">Бензин</SelectItem>
            <SelectItem value="diesel">Дизел</SelectItem>
            <SelectItem value="electric">Ток</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="h-12 border-none bg-gray-700 text-white">
            <SelectValue placeholder="Задвижване" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="fwd">FWD</SelectItem>
            <SelectItem value="rwd">RWD</SelectItem>
            <SelectItem value="awd">AWD</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-8">
          <div className="text-white">Търсене в</div>
          <RadioGroup defaultValue="copart" className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="copart"
                id="copart"
                className="text-white"
              />
              <Label htmlFor="copart" className="text-white">
                COPART
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="iaai" id="iaai" className="text-white" />
              <Label htmlFor="iaai" className="text-white">
                IAAI
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="h-12 w-[120px] border-none bg-gray-700 text-white">
              <SelectValue placeholder="Цена" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-10000">$0 - $10,000</SelectItem>
              <SelectItem value="10000-20000">$10,000 - $20,000</SelectItem>
              <SelectItem value="20000+">$20,000+</SelectItem>
            </SelectContent>
          </Select>

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
    </div>
  );
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
