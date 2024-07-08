// components/StickyBottomNav.js
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const StickyBottomNav = () => {
  const [showNav, setShowNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 200) {
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
      console.log(lastScrollY);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <div className={`stickyNav ${showNav ? "show" : "hide"}`}>
      {/* Съдържание на навигационното меню */}
      <nav className="group h-full bg-orange-500">
        <ul className="grid h-full grid-cols-3">
          <Link href="/auction">
            <li className="flex items-center justify-center hover:bg-black">
              АУКЦИОНИ
            </li>
          </Link>
          <Link href="/parts">
            <li className="flex items-center justify-center hover:bg-black">
              ЧАСТИ
            </li>
          </Link>
          <Link href="/about">
            <li className="flex items-center justify-center hover:bg-black">
              КОНТАКТИ
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default StickyBottomNav;
