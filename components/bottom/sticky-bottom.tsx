// components/StickyBottomNav.js
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const StickyBottomNav = ({ inView }: { inView: boolean }) => {
  const [showNav, setShowNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const percent = 80;

  // Функция за получаване на височината на документа
  const getDocumentHeight = () => {
    const body = document.body;
    const html = document.documentElement;

    return Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight,
    );
  };

  // Изчисляваме пикселите въз основа на височината на документа
  const pixels = (percent / 100) * getDocumentHeight();

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY >= 500) {
        // Скрива се при скрол надолу, ако е над 500 пиксела
        if (currentScrollY > lastScrollY) {
          setShowNav(false);
        } else {
          if (inView) {
            setShowNav(false);
          } else {
            setShowNav(true);
          }
        }
      } else {
        // Покажи навигацията, когато скролът е по-малък от 500 пиксела
        if (currentScrollY > lastScrollY) {
          setShowNav(false);
        } else {
          setShowNav(true);
        }
      }

      setLastScrollY(currentScrollY);
    }
  };

  // Добавяне на event listener за скрол
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Премахване на event listener при размонтиране
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, pixels]); // Добавяме зависимостите
  return (
    <div className={`stickyNav ${showNav ? "show" : "hide"}`}>
      {/* Съдържание на навигационното меню */}
      <nav className="group h-full bg-[#2f3ccf]">
        <ul className="text-md grid h-full grid-cols-3 font-bold xl:text-xl">
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
          <Link href="/uslugi">
            <li className="flex items-center justify-center hover:bg-black">
              УСЛУГИ
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default StickyBottomNav;
