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
export default function Home() {
  const storeUser = useMutation(api.users.store);

  const router = useRouter();
  useEffect(() => {
    storeUser({});
  });

  return (
    <main className="absolute top-0 z-50 h-full min-h-screen w-full bg-orange-500">
      <SignedOut>
        <div className="flex h-1/2 w-full items-center justify-center sm:h-full">
          <SignIn forceRedirectUrl="/obqvi" />
        </div>
      </SignedOut>
      <SignedIn>
        <Navbar />
        <div className="flex h-1/2 w-full flex-col items-center justify-center sm:h-full">
          <AddForm />
        </div>
      </SignedIn>
    </main>
  );
}
