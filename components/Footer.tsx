"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { footerLinks } from "@constants";
import StickyBottomNav from "./bottom/sticky-bottom";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <StickyBottomNav inView={isInView} />
      <footer ref={ref} className="mt-5 flex flex-col text-gray-100">
        <div className="flex flex-wrap justify-between gap-5 px-6 py-10 max-md:flex-col sm:px-16">
          <div className="flex flex-col items-center justify-start gap-6 sm:flex-none">
            <img
              src="/myride_logo.png"
              alt="logo"
              width={450}
              height={30}
              className="object-contain shadow-orange-500 drop-shadow-[5px_5px_5px_rgba(223,0,0,0.5)] filter hover:drop-shadow-[5px_5px_5px_rgba(223,0,0,2.5)]"
            />
            <p className="text-base text-gray-400">
              <br />
              Всички права запазени &copy;
            </p>
          </div>

          <div className="footer__links">
            {footerLinks.map((item) => (
              <div key={item.title} className="footer__link">
                <h3 className="font-bold">{item.title}</h3>
                <div className="flex flex-col gap-5">
                  {item.links.map((link) => (
                    <Link
                      key={link.title}
                      href={link.url}
                      className="text-gray-200 transition-colors duration-300 hover:bg-orange-500 hover:text-center"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col flex-wrap items-center justify-between border-t border-orange-500 px-6 py-10 sm:px-16">
          <div className="mt-4 grid grid-cols-2 gap-4 xl:grid-cols-4">
            <Link
              href="/pravila"
              className="text-center text-gray-500 hover:bg-orange-500 hover:text-white"
            >
              Правила за ползване
            </Link>
            <Link
              href="/politika"
              className="text-center text-gray-500 hover:bg-orange-500 hover:text-white"
            >
              Политика за поверителост
            </Link>
            <Link
              href="/otgovornost"
              className="text-center text-gray-500 hover:bg-orange-500 hover:text-white"
            >
              Отговорност
            </Link>
            <Link
              href="/biskvitki"
              className="text-center text-gray-500 hover:bg-orange-500 hover:text-white"
            >
              Бисквитки
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
