"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FilterCategory = "модели" | "години" | "гориво" | "състояние";

const filterOptions: Record<FilterCategory, string[]> = {
  модели: ["Седан", "SUV", "Хетчбек", "Купе", "Вагон", "Ван"],
  години: [
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
  ],
  гориво: ["Бензин", "Дизел", "Електрически", "Хибрид", "Plug-in Хибрид"],
  състояние: ["Нов", "Употребявам", "Сертифицирани употребявани"],
};

export default function FilterSearch({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const [selectedFilters, setSelectedFilters] = useState<
    Record<FilterCategory, string[]>
  >({
    модели: [],
    години: [],
    гориво: [],
    състояние: [],
  });

  const handleFilterChange = (category: FilterCategory, value: string) => {
    setSelectedFilters((prev) => {
      const updatedCategory = prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value];
      return { ...prev, [category]: updatedCategory };
    });
  };

  const clearFilters = () => {
    setSelectedFilters({
      модели: [],
      години: [],
      гориво: [],
      състояние: [],
    });
  };

  return (
    <div className="mx-auto h-full w-full max-w-xl overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="border-b border-gray-200 bg-gray-50 p-6">
        <h2 className="text-2xl font-semibold text-black">Филтри</h2>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {Object.entries(filterOptions).map(([category, options]) => (
          <AccordionItem value={category} key={category}>
            <AccordionTrigger className="flex justify-center px-6 py-4 transition-colors hover:bg-gray-50">
              <span className="text-lg font-medium capitalize text-black">
                {category}
              </span>
              <ChevronDown className="h-5 w-5 text-black transition-transform duration-200" />
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4">
              <div className="space-y-2">
                {options.map((option) => (
                  <label
                    key={option}
                    className="flex cursor-pointer items-center space-x-3 rounded p-2 transition-colors hover:bg-gray-100"
                  >
                    <Checkbox
                      id={`${category}-${option}`}
                      checked={selectedFilters[
                        category as FilterCategory
                      ].includes(option)}
                      onCheckedChange={() =>
                        handleFilterChange(category as FilterCategory, option)
                      }
                    />
                    <span className="text-sm font-medium text-black">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="border-t border-gray-200 bg-gray-50 p-6">
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={clearFilters}
            className="text-black hover:text-gray-800"
          >
            Изчисти
          </Button>
          <Button
            size="sm"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Приложи
          </Button>
        </div>
      </div>
    </div>
  );
}
