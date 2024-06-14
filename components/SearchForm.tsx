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

export default async function SearchForm() {
  const [model, setModel] = useState<any>();
  const [modelName, setModelName] = useState<any>();

  return (
    <div className="rounded-md bg-gray-800 p-4">
      <div className="mb-4 flex items-center">
        <SearchIcon className="mr-2 h-6 w-6 text-white" />
        <Input
          type="text"
          placeholder="...желания  автомобил"
          className="flex-1 border-2 border-white bg-gray-800 text-[17px] text-white placeholder-gray-400 outline-none"
        />
      </div>
      <div className="mb-4 flex items-center justify-between">
        <Tabs defaultValue="car" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="car"
              className="data-[state=active]:bg-orange-700"
            >
              <CarIcon className="" />
            </TabsTrigger>
            <TabsTrigger
              value="truck"
              className="data-[state=active]:bg-orange-700"
            >
              {" "}
              <TruckIcon className="h-6 w-6 text-black shadow-xl shadow-white" />
            </TabsTrigger>
            <TabsTrigger
              value="hang"
              className="data-[state=active]:bg-orange-700"
            >
              {" "}
              <CaravanIcon className="filter- h-6 w-6 text-black shadow-xl shadow-white" />
            </TabsTrigger>
            <TabsTrigger
              value="bike"
              className="data-[state=active]:bg-orange-700"
            >
              <BikeIcon className="h-6 w-6 text-black shadow-xl shadow-white" />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="car">
            <Card className="border-none bg-opacity-0">
              <CardHeader>
                <CardTitle className="text-white">Търсачка</CardTitle>
                <CardDescription>Намери желания автомобил</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="make" className="text-sm text-white">
                      Марка
                    </label>
                    <div className="flex items-center rounded-md bg-orange-700 p-2">
                      <input
                        id="make"
                        type="text"
                        value={model}
                        onSelect={() => {
                          console.log(modelName);
                        }}
                        onChange={(e) => {
                          setTimeout(() => {
                            setModelName(e.target.value);
                          }, 2500);
                        }}
                        placeholder="Марка"
                        className="flex-1 bg-orange-700 text-white outline-none"
                      />
                      <ChevronDownIcon className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="model" className="text-sm text-white">
                      Модел
                    </label>
                    <div className="flex items-center rounded-md bg-gray-700 p-2">
                      <input
                        id="model"
                        type="text"
                        placeholder="Модел"
                        className="flex-1 bg-gray-700 text-white placeholder-gray-400 outline-none"
                      />
                      <ChevronDownIcon className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="price" className="text-sm text-white">
                      цена до (€)
                    </label>
                    <div className="flex items-center rounded-md bg-gray-700 p-2">
                      <input
                        id="price"
                        type="text"
                        placeholder="цена до (€)"
                        className="flex-1 bg-gray-700 text-white placeholder-gray-400 outline-none"
                      />
                      <ChevronDownIcon className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="registration"
                      className="text-sm text-white"
                    >
                      Първа регистрация след
                    </label>
                    <div className="flex items-center rounded-md bg-gray-700 p-2">
                      <input
                        id="registration"
                        type="text"
                        placeholder="Първа регистрация след"
                        className="flex-1 bg-gray-700 text-white placeholder-gray-400 outline-none"
                      />
                      <ChevronDownIcon className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="region" className="text-sm text-gray-400">
                    Държава
                  </label>
                  <div className="flex items-center rounded-md bg-gray-700 p-2">
                    <input
                      id="region"
                      type="text"
                      placeholder="Европа"
                      className="flex-1 bg-gray-700 text-white placeholder-gray-400 outline-none"
                    />
                    <ChevronDownIcon className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
                <div className="mb-4"></div>
                <div className="mb-4 rounded-md bg-orange-600 p-4 font-bold text-white">
                  2 063 927 резултати
                </div>
                <button className="w-full rounded-md bg-gray-700 px-4 py-2 text-white">
                  Разширено търсене
                </button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
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
