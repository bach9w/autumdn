"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/myride_logo.png";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "./ui/input";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import StickySearchForm from "./search/sticky-search";
import SearchForm from "./SearchForm";
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs";

const NavBar = () => {
  const router = useRouter();
  const user = useUser();

  return (
    <>
      <div className="sticky top-0 z-40 flex flex-col">
        <nav className="top-0 z-40 h-[10%] w-full bg-gradient-to-b from-[#151515] to-[#191919] p-2">
          <div className="flex w-full items-center justify-between">
            <div className="flex">
              <Image
                src={Logo}
                width={100}
                height={250}
                alt="logo"
                onClick={() => router.push("/")}
                className="cursor-pointer rounded-xl"
              />
            </div>
            <div className="hidden w-[300px] p-2 md:relative md:flex">
              <Input
                placeholder="Tърсене на автомобил"
                className="rounded-r-none"
              />

              <Button className="rounded-l-none bg-red-500">Търси</Button>
            </div>
            <div className="text-black">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="shrink-0">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="grid gap-6 text-lg font-medium">
                    <Link
                      href="/"
                      className="flex items-center gap-2 text-lg font-semibold"
                    >
                      <Image src={Logo} width={70} height={30} alt="logo" />
                      <span className="sr-only">MYRIDE</span>
                    </Link>
                    <SheetClose asChild>
                      <Link
                        href="/"
                        className="text-black hover:text-orange-700"
                      >
                        Начало
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/auction"
                        className="text-black hover:text-orange-700"
                      >
                        Аукциони
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/nalichni"
                        className="text-black hover:text-orange-700"
                      >
                        Налични автомобили
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/manufacturers"
                        className="text-black hover:text-orange-700"
                      >
                        Марки
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/parts"
                        className="text-black hover:text-orange-700"
                      >
                        Части за автомобили
                      </Link>
                    </SheetClose>
                    <Link href="#" className="text-black hover:text-orange-700">
                      За нас
                    </Link>
                    {user.isSignedIn && (
                      <>
                        <div className="flex items-center justify-center gap-2 bg-black text-white">
                          <UserButton afterSignOutUrl="/" />
                          {user.user.username}
                        </div>

                        <div className="flex w-full flex-col justify-center">
                          <SheetClose asChild>
                            <Link
                              href="/obqvi/all"
                              className="text-black hover:text-orange-700"
                            >
                              Всички автомобили
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link
                              href="/obqvi/parts"
                              className="text-black hover:text-orange-700"
                            >
                              Всички части
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link
                              href="/obqvi/dobavi"
                              className="text-black hover:text-orange-700"
                            >
                              Добави автомобил
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link
                              href="/obqvi/parts/dobavi"
                              className="text-black hover:text-orange-700"
                            >
                              Добави част
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <SignOutButton>
                              <Button>Изход</Button>
                            </SignOutButton>
                          </SheetClose>
                        </div>
                      </>
                    )}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
        <div className="flex w-full items-center justify-end">
          <section id="auctions" className="sticky w-[100%]">
            <StickySearchForm />
          </section>
        </div>
      </div>
    </>
  );
};

export default NavBar;
