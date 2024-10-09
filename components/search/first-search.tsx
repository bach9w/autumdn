"use client";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
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
    <div className="rounded bg-[#802531] p-4 text-white md:p-10 lg:p-12">
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
    </div>
  );
}

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
