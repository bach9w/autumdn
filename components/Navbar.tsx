"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/myride_logo.png";
import React from "react";

import { Input } from "./ui/input";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import Nav from "./navbar/corner-navbar";

const NavBar = () => {
  const router = useRouter();
  const user = useUser();
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 500) {
        // Скрива се при скрол надолу, ако е над 500
        if (window.scrollY > lastScrollY) {
          setShowNav(false);
        } else {
          setShowNav(true);
        }
      } else {
        // Винаги се показва, ако е под 500
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`sticky top-0 z-40 flex h-[10%] flex-col transition duration-150 ease-out ${showNav ? "show" : "hideNav"}`}
      >
        <nav className="top-0 z-40 h-full w-full bg-gradient-to-b from-[#151515] to-[#191919] p-2">
          <div className="flex w-full items-center justify-between">
            <div className="flex">
              <img
                src="/myride_logo.png"
                width={120}
                height={300}
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
            <div className="h-full">
              <Nav />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
