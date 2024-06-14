"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { Check, ChevronsUpDown, XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { ComboBoxResponsive } from "./search/responsive-combobox";
import { useRouter } from "next/navigation";

const fuels = [
  {
    id: 1,
    name: "Дизел",
  },
  {
    id: 4,
    name: "Газ",
  },
  {
    id: 5,
    name: "Бензин",
  },
  {
    id: 2,
    name: "Електричество",
  },
];

export default function SearchForm() {
  const [man, setMan] = useState<any>();
  const [fuel, setFuel] = useState<any>();
  const [modelName, setModelName] = useState<any>();
  const [manufacturers, setManufacturers] = useState<any>();
  const [models, setModels] = useState<any>();
  const [year, setYear] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/manufacturer`, {
          next: { revalidate: 3600 },
        });
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.error);
        }
        setManufacturers(result.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        if (man === undefined) return;
        if (man.id !== null) {
          const response = await fetch(`/api/models/${man.id}`, {
            next: { revalidate: 3600 },
          });
          const result = await response.json();
          if (!response.ok) {
            throw new Error(result.error);
          }
          setModels(result.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [man]);

  const router = useRouter();

  const handleSearch = () => {
    if (man === "") {
      return alert("Please provide some input");
    }

    updateSearchParams(modelName, man.id, year, fuel);
  };

  const updateSearchParams = (
    model: any,
    manufacturer: any,
    year: any,
    fuel: any,
  ) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'model' search parameter based on the 'model' value
    if (model && model.id) {
      searchParams.set("model", model.id);
    } else {
      searchParams.delete("model");
    }

    // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    if (year) {
      searchParams.set("year", year);
    } else {
      searchParams.delete("year");
    }

    if (fuel && fuel.id) {
      searchParams.set("fuel", fuel.id);
    } else {
      searchParams.delete("fuel");
    }

    // Generate the new pathname with the updated search parameters
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname, { scroll: false });
  };

  return (
    <div className="rounded-md bg-gray-800 p-4">
      <div className="mb-4 flex items-center justify-between">
        <Tabs defaultValue="car" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="car"
              className="data-[state=active]:bg-orange-600"
            >
              <CarIcon className="" />
            </TabsTrigger>
            <TabsTrigger
              value="truck"
              className="data-[state=active]:bg-orange-700"
            >
              <XIcon color="black" />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="car">
            <Card className="border-none bg-opacity-0">
              <CardHeader>
                <CardTitle className="text-white">Търсачка</CardTitle>
                <CardDescription>Намери желания автомобил</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Label
                      htmlFor="manufacturer"
                      className="text-sm text-white"
                    >
                      Марка
                    </Label>
                    <ComboBoxResponsive
                      disabled={false}
                      setSelected={(e) => {
                        setMan(e);
                      }}
                      model="Марки"
                      data={manufacturers}
                    />
                  </div>
                  <div>
                    <label htmlFor="model" className="text-sm text-white">
                      Модел
                    </label>

                    <ComboBoxResponsive
                      setSelected={(e) => {
                        setModelName(e);
                      }}
                      disabled={man ? false : true}
                      model="Модели"
                      data={models && models}
                    />
                  </div>
                </div>
                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="year" className="text-sm text-white">
                      Година
                    </label>
                    <div className="flex items-center rounded-md bg-gray-700 p-2">
                      <input
                        id="year"
                        type="text"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        placeholder="Година"
                        className="flex-1 bg-gray-700 text-white placeholder-gray-400 outline-none"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="fuel" className="text-sm text-gray-400">
                      Гориво
                    </label>
                    <div className="flex items-center rounded-md">
                      <ComboBoxResponsive
                        setSelected={(e) => {
                          setFuel(e);
                        }}
                        disabled={false}
                        model="Гориво"
                        data={fuels}
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4"></div>
                <div className="mb-4 rounded-md bg-orange-600 p-4 font-bold text-white">
                  Избери сред 63 927 резултата
                </div>
                <button
                  onClick={handleSearch}
                  className="w-full rounded-md bg-gray-700 px-4 py-2 text-white"
                >
                  Разширено търсене
                </button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function BikeIcon(props: any) {
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
      <circle cx="18.5" cy="17.5" r="3.5" />
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="15" cy="5" r="1" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </svg>
  );
}

function CarIcon(props: any) {
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
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function CaravanIcon(props: any) {
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
      <rect width="4" height="4" x="2" y="9" />
      <rect width="4" height="10" x="10" y="9" />
      <path d="M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2" />
      <circle cx="8" cy="19" r="2" />
      <path d="M10 19h12v-2" />
    </svg>
  );
}

function ChevronDownIcon(props: any) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ForkliftIcon(props: any) {
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
      <path d="M12 12H5a2 2 0 0 0-2 2v5" />
      <circle cx="13" cy="19" r="2" />
      <circle cx="5" cy="19" r="2" />
      <path d="M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5" />
    </svg>
  );
}

function SearchIcon(props: any) {
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

function TruckIcon(props: any) {
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
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}
