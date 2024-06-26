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
import All from "../all/page";
import { Card, CardHeader } from "@components/ui/card";
export default function Home() {
  const storeUser = useMutation(api.users.store);

  const router = useRouter();
  useEffect(() => {
    storeUser({});
  });

  return (
    <main className="z-50 flex h-full min-h-screen w-full items-center justify-center">
      <SignedOut>
        <div className="flex h-full w-full items-center justify-center sm:h-full">
          <SignIn forceRedirectUrl="/obqvi" />
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex h-full w-full flex-col items-center sm:h-full">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <Card onClick={() => router.push("/obqvi/all")}>
              <CardHeader>
                <p>Всички автомобили</p>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <p>Всички части</p>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <p>Добави автомобил</p>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <p>Добави част</p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </SignedIn>
    </main>
  );
}
