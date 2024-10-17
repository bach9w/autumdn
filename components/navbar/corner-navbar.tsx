"use client";
import { SiInstagram, SiLinkedin, SiTwitter, SiYoutube } from "react-icons/si";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, calcLength, motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@components/ui/button";
import { cn } from "@lib/utils";
import { useScrollBlock } from "@hooks/useScrollBlocks";
import FloatingAuction from "@app/auction/[slug]/FloatingBar";

const Nav = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <HamburgerButton active={active} setActive={setActive} />
      <AnimatePresence>{active && <LinksOverlay />}</AnimatePresence>
    </>
  );
};

const LinksOverlay = () => {
  return (
    <nav className="fixed right-4 top-4 z-40 h-[calc(100vh_-_40px)] w-[calc(100%_-_32px)]">
      <Logo />
      <LinksContainer />
      <FooterCTAs />
      <FloatingAuction />
    </nav>
  );
};

const LinksContainer = () => {
  const user = useUser();
  return (
    <motion.div className="space-y-4 p-12 pl-4 md:pl-20">
      {LINKS.map((l, idx) => {
        return (
          <NavLink key={l.title} href={l.href} idx={idx}>
            {l.title}
          </NavLink>
        );
      })}
      {user.isSignedIn && (
        <>
          <div className="flex items-center justify-center gap-2 bg-black text-white">
            <UserButton afterSignOutUrl="/" />
            {user.user.username}
          </div>

          <div className="flex w-full flex-col justify-center">
            <Link
              href="/obqvi/all"
              className="text-black hover:text-orange-700"
            >
              Всички автомобили
            </Link>

            <Link
              href="/obqvi/parts"
              className="text-black hover:text-orange-700"
            >
              Всички части
            </Link>

            <Link
              href="/obqvi/dobavi"
              className="text-black hover:text-orange-700"
            >
              Добави автомобил
            </Link>

            <Link
              href="/obqvi/parts/dobavi"
              className="text-black hover:text-orange-700"
            >
              Добави част
            </Link>

            <SignOutButton>
              <Button>Изход</Button>
            </SignOutButton>
          </div>
        </>
      )}
    </motion.div>
  );
};

const NavLink = ({
  children,
  href,
  idx,
}: {
  children: ReactNode;
  href: string;
  idx: number;
}) => {
  return (
    <motion.a
      initial={{ opacity: 0, y: -8 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.75 + idx * 0.125,
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      exit={{ opacity: 0, y: -8 }}
      href={href}
      className="block text-3xl font-semibold text-white transition-colors md:text-7xl"
    >
      {children}
    </motion.a>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <motion.a
      initial={{ opacity: 0, y: -12, height: 1000, width: 1000 }}
      animate={{
        opacity: 1,

        y: 0,
        height: 200,
        width: 250,
        transition: { delay: 0, duration: 1.5, ease: "easeInOut" },
      }}
      exit={{ opacity: 0, y: -12 }}
      href="#"
      className="m-2 flex h-full w-full items-center justify-center rounded-br-xl rounded-tl-xl bg-white transition-colors hover:bg-violet-50"
    >
      <img src="/LOGO-BLACK.png" className="" />
    </motion.a>
  );
};

const HamburgerButton = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <motion.div
        initial={false}
        animate={active ? "open" : "closed"}
        variants={UNDERLAY_VARIANTS}
        style={{ top: 16, right: 16 }}
        className={cn("fixed rounded-xl", active ? "bg-red-600/90" : "")}
      />

      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className={`group fixed right-4 top-2 z-50 h-10 w-10 transition-all hover:bg-white/20 ${
          active ? "rounded-bl-xl rounded-tr-xl bg-white" : "rounded-xl"
        }`}
      >
        <motion.span
          variants={HAMBURGER_VARIANTS.top}
          className={cn(
            "absolute block h-1 w-10",
            active ? "bg-black" : "bg-white",
          )}
          style={{ y: "-50%", left: "50%", x: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.middle}
          className={cn(
            "absolute block h-1 w-10",
            active ? "bg-black" : "bg-white",
          )}
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.bottom}
          className={cn(
            "absolute block h-1 w-5",
            active ? "bg-black" : "bg-white",
          )}
          style={{ x: "-50%", y: "50%" }}
        />
      </motion.button>
    </>
  );
};

const FooterCTAs = () => {
  return (
    <>
      <div className="absolute bottom-6 left-6 flex gap-4 md:flex-col">
        {SOCIAL_CTAS.map((l, idx) => {
          return (
            <motion.a
              key={idx}
              href={l.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1 + idx * 0.125,
                  duration: 0.5,
                  ease: "easeInOut",
                },
              }}
              exit={{ opacity: 0, y: -8 }}
            >
              <l.Component className="text-xl text-white transition-colors hover:text-violet-300" />
            </motion.a>
          );
        })}
      </div>

      <motion.button
        initial={{ opacity: 0, y: 8 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1.125,
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        exit={{ opacity: 0, y: 8 }}
        className="absolute bottom-2 right-2 flex items-center gap-2 rounded-full bg-violet-700 px-3 py-3 text-4xl uppercase text-violet-200 transition-colors hover:bg-white hover:text-violet-600 md:bottom-4 md:right-4 md:px-6 md:text-2xl"
      >
        <span className="hidden md:block">СВЪРЖИ СЕ С НАС</span>{" "}
        <FiArrowRight />
      </motion.button>
    </>
  );
};

const LINKS = [
  {
    title: "НАЧАЛО",
    href: "/",
  },
  {
    title: "МАРКИ",
    href: "/manufacturers",
  },
  {
    title: "АУКЦИОНИ",
    href: "/auction",
  },
  {
    title: "НАЛИЧНИ",
    href: "/nalichni",
  },
  {
    title: "ЧАСТИ",
    href: "/parts",
  },
  {
    title: "УСЛУГИ",
    href: "/uslugi",
  },

  {
    title: "ЗА НАС",
    href: "/about",
  },
];

/*
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
                    <SheetClose asChild>
                      <Link
                        href="/about"
                        className="text-black hover:text-orange-700"
                      >
                        За нас
                      </Link>
                    </SheetClose>
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
              </Sheet> */

const SOCIAL_CTAS = [
  {
    Component: SiTwitter,
    href: "#",
  },
  {
    Component: SiInstagram,
    href: "#",
  },
  {
    Component: SiLinkedin,
    href: "#",
  },
  {
    Component: SiYoutube,
    href: "#",
  },
];

const UNDERLAY_VARIANTS = {
  open: {
    width: "calc(100% - 32px)",
    height: "calc(100vh - 32px)",
    transition: { type: "spring", mass: 3, stiffness: 400, damping: 50 },
  },
  closed: {
    width: "80px",
    height: "80px",
    transition: {
      delay: 0.75,
      type: "spring",
      mass: 3,
      stiffness: 400,
      damping: 50,
    },
  },
};

const HAMBURGER_VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

export default Nav;
