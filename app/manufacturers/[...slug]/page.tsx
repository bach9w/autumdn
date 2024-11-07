"use client";

import { fetchCarByManufacturer } from "@app/api/cars";
import CarCard from "@app/auction/CarCard";
import Pagination from "@app/auction/components/Pagination";
import Loading from "@components/loading";
import { SelectDemo } from "@components/SelectC";
import { Button } from "@components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@components/ui/card";
import { cn } from "@lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { years } from "@constants/import";
import { ComboBoxResponsive } from "@components/search/responsive-combobox";
import { motion } from "framer-motion";
import NewCard from "@app/auction/components/NewCard";

const Manufacture = ({ params }: { params: { slug: any } }) => {
  const { slug } = params;

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const searchParams = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : "",
  );
  const [fromYear, setFromYear] = useState<any>(null);
  const [toYear, setToYear] = useState<any>(null);

  const page = searchParams.get("page") || 1;

  useEffect(() => {
    async function fetchData() {
      if (slug.length === 1) {
        try {
          const response = await fetch(`/api/models/${slug[0]}`, {
            next: { revalidate: 600 },
          });
          const result = await response.json();
          if (!response.ok) {
            throw new Error(result.error);
          }
          setData(result.data);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      } else if (slug.length === 2) {
        try {
          if (
            (fromYear !== undefined && fromYear !== null) ||
            (toYear !== undefined && toYear !== null)
          ) {
            let query = `/api/cars?per_page=21&manufacturer=${slug[0]}&model=${slug[1]}&sale_date_in_days=10&page=${page}`;

            if (fromYear !== undefined && fromYear !== null) {
              query += `&from_year=${fromYear}`;
            }

            if (toYear !== undefined && toYear !== null) {
              query += `&to_year=${toYear}`;
            }

            const response = await fetch(query, {
              next: { revalidate: 3600 },
            });

            const result = await response.json();
            if (!response.ok) {
              throw new Error(result.error);
            }
            setData(result.data);
            setLoading(false);
          } else {
            const response = await fetch(
              `/api/cars?per_page=21&manufacturer=${slug[0]}&model=${slug[1]}&sale_date_in_days=10&page=${page}`,
              {
                next: { revalidate: 3600 },
              },
            );

            const result = await response.json();
            if (!response.ok) {
              throw new Error(result.error);
            }
            setData(result.data);
            setLoading(false);
          }
        } catch (error) {
          console.error(error);
        }
      }
    }

    fetchData();
  }, [page, fromYear, toYear]);

  return (
    <Suspense fallback={<Loading />}>
      {loading && <Loading />}
      <div className="min-h-screen overflow-x-hidden">
        <Button
          variant="outline"
          size="icon"
          className="mb-2 ml-5 mt-5 h-7 w-7"
        >
          <ChevronLeft
            className="h-4 w-4"
            onClick={() => {
              window.history.back();
            }}
          />
          <span className="sr-only">Назад</span>
        </Button>
        {slug[0] && (
          <div
            className={cn(
              "grid grid-cols-2 items-center justify-center gap-2 overflow-x-hidden p-4 py-10 text-center md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5",
              slug[1] && "hidden",
            )}
          >
            {data &&
              data.map((models: any) => {
                return (
                  <Link href={`/manufacturers/${slug}/${models.id}`}>
                    <motion.div
                      key={models.id}
                      initial={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      whileInView={{ opacity: 1 }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 0px 10px rgba(0, 255, 255, 0.2)",
                      }}
                      viewport={{ once: true }}
                      className="flex p-1"
                    >
                      <Card
                        className="flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border-none bg-card text-card-foreground shadow-lg"
                        key={models.id}
                      >
                        <CardHeader>{models.name}</CardHeader>
                      </Card>
                    </motion.div>
                  </Link>
                );
              })}
          </div>
        )}
        {slug[0] && slug[1] && (
          <>
            <div className="mb-2 grid gap-2 md:grid-cols-2">
              <ComboBoxResponsive
                disabled={false}
                setSelected={(e) => {
                  setFromYear(e?.name);
                }}
                model="Година от"
                data={years}
              />
              <ComboBoxResponsive
                disabled={false}
                setSelected={(e) => {
                  setToYear(e?.name);
                }}
                model="Година до"
                data={years}
              />
            </div>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
              {data &&
                Array.isArray(data) &&
                data
                  .filter((car: any) => car.lots)
                  .map((car: any) => (
                    <div className="overflow-x-hidden p-2" key={car.id}>
                      <NewCard card={car} />
                    </div>
                  ))}
            </div>
            <div className="mt-2">
              <Pagination page={page} />
            </div>
          </>
        )}
      </div>
    </Suspense>
  );
};

export default Manufacture;

/*
<div className="grid grid-cols-1 overflow-x-hidden p-4 py-10 md:grid-cols-2 xl:grid-cols-3">
        {data &&
          Array.isArray(data) &&
          data.map(
            (car: any) =>
              car.lots &&
              car.lots[0] &&
              car.lots[0].images &&
              car.lots[0].sale_date !== null &&
              car.lots[0].damage &&
              car.lots[0].damage.main &&
              car.lots[0].images?.normal && (
                <div
                  key={car.id}
                  className="-ml-10 -mr-10 mb-[25px] md:-ml-0 md:-mr-0"
                >
                  <CarCard car={car} />
                </div>
              ),
          )}
      </div>
      */
