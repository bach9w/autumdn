"use client";

import { CookieIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CookieConsent({
  demo = false,
  onAcceptCallback = () => {},
  onDeclineCallback = () => {},
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const accept = () => {
    setIsOpen(false);
    document.cookie =
      "cookieConsent=true; expires=Fri, 31 Dec 2024 23:59:59 GMT";
    setTimeout(() => {
      setHide(true);
    }, 700);
    onAcceptCallback();
  };

  const decline = () => {
    setIsOpen(false);
    setTimeout(() => {
      setHide(true);
    }, 700);
    onDeclineCallback();
  };

  useEffect(() => {
    try {
      setIsOpen(true);
      if (document.cookie.includes("cookieConsent=true")) {
        if (!demo) {
          setIsOpen(false);
          setTimeout(() => {
            setHide(true);
          }, 700);
        }
      }
    } catch (e) {
      console.log("Error: ", e);
    }
  }, []);

  return (
    <motion.div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-[200] w-full duration-700",
        !isOpen
          ? "translate-y-8 opacity-0 transition-[opacity,transform]"
          : "translate-y-0 opacity-100 transition-[opacity,transform]",
        hide && "hidden",
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.9, ease: "easeInOut" }}
        className="m-3 rounded-md border border-border bg-card/90 text-orange-500 shadow-lg drop-shadow-lg dark:bg-secondary dark:shadow-none"
      >
        <div className="grid gap-2">
          <div className="flex h-14 items-center justify-between border-b border-border p-4 dark:border-background/20">
            <h1 className="flex items-center justify-center gap-2 text-lg font-medium">
              Ние използваме бисквитки
              <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
            </h1>

            <Image src="/myride_logo.png" width={70} height={70} alt="logo" />
          </div>
          <div className="p-4">
            <p className="text-start text-sm font-normal">
              Ние използваме бисквитки за да сме сигурни, че получавате
              най-добрия престои на нашия сайт. За повече информация как
              използваме бисквитки, моля прочетете нашата политика за
              бисквитките.
              <br />
              <br />
              <span className="text-xs">
                С кликване{" "}
                <span className="font-medium opacity-80">Приемам</span>, вие се
                съгласявате, това че използваме бисквитките.
              </span>
              <br />
              <Link href="/biskvitki" className="text-xs underline">
                Научи повече.
              </Link>
            </p>
          </div>
          <div className="flex gap-2 border-t border-border p-4 py-5 dark:bg-background/20">
            <Button
              onClick={accept}
              className="w-full bg-orange-500 text-white"
            >
              Приеми
            </Button>
            <Button onClick={decline} className="w-full bg-red-700">
              Откажи
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
