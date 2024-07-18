"use client";
import React, { useEffect, useState, Suspense, lazy } from "react";

import { Card, CardDescription, CardHeader } from "@components/ui/card";
import { cn } from "@lib/utils";
import Loading from "@components/loading";
import { useRouter } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import { motion } from "framer-motion";
import Link from "next/link";

const Manufacturers = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });

  const manufacturers = useQuery(api.manufacturer.getManufacturers);

  return (
    <>
      <div className="min-h-screen w-full">
        <div className="fixed top-0 z-30 flex h-[8%] w-full items-center justify-center rounded-b-xl bg-card text-2xl font-bold uppercase text-white shadow-sm shadow-white">
          Марки автомобили
        </div>
        {loading && <Loading />}

        <Suspense fallback={<Loading />}>
          <div className="mt-2 grid grid-cols-2 gap-4 p-4 py-10 md:grid-cols-3">
            {manufacturers?.map((manufacturer: any) => (
              <Link href={`/manufacturers/${manufacturer.id}`}>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 10px rgba(0, 255, 255, 0.2)",
                  }}
                  viewport={{ once: true }}
                  key={manufacturer.id}
                  className="flex p-1"
                >
                  <Card className="flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border-none bg-card text-card-foreground shadow-lg">
                    <CardHeader>
                      <p>{manufacturer.name}</p>
                    </CardHeader>
                    <CardDescription>
                      {manufacturer.image ? (
                        <img
                          width={100}
                          height={100}
                          src={manufacturer.image}
                          alt={manufacturer.name}
                        />
                      ) : (
                        <p className="text-2xl">{manufacturer.name}</p>
                      )}
                    </CardDescription>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </div>
        </Suspense>
      </div>
    </>
  );
};

export default Manufacturers;
