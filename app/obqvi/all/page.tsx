"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useAction, useMutation } from "convex/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  SignOutButton,
  SignIn,
} from "@clerk/nextjs";
import Navbar from "../components/navbar";
import { AddForm } from "../components/dobavi";

import { useQuery } from "convex/react";

import CarCard from "../components/Card";

export default function Home() {
  const cars = useQuery(api.cars.getAllCars);

  return (
    <main>
      <SignedOut>
        <div className="flex h-full w-full items-center justify-center sm:h-full">
          <SignIn forceRedirectUrl="/obqvi" />
        </div>
      </SignedOut>
      <SignedIn>
        <Navbar />

        <div className="grid grid-cols-1 md:grid-cols-2">
          {cars?.map((cars) => {
            return (
              <div className="-ml-5 -mr-5 overflow-x-hidden" key={cars._id}>
                <CarCard car={cars} />
              </div>
            );
          })}
        </div>
      </SignedIn>
    </main>
  );
}
