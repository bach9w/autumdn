import "./globals.css";

import Footer from "@components/Footer";
import NavBar from "@components/Navbar";
import { cn } from "@lib/utils";
import { ConvexClientProvider } from "@providers/convex-client-provider";
import { Viewport } from "next";
import { Montserrat } from "next/font/google";
import StickyBottomNav from "@/components/bottom/sticky-bottom";
import { Analytics } from "@vercel/analytics/react";
import Cookie from "@components/bottom/cookie/Cookie";
import CarbonBackgroundComponent from "@components/layout/carbon";
import LenisProvider from "@providers/lenis-client";
import { Hero } from "@components/components/hero/Hero";
import robots from "./robots";

export const metadata = {
  title: "MYRIDE",
  description: "MYRIDE IMPORT",
  metadataBase: new URL("https://myride.bg"),
  category: "Cars",
  openGraph: {
    title: "MYRIDE.BG",
    description: "Внос на автомобили от Америка и Канада",
    url: "https://myride.bg",
    type: "website",

    images: [
      {
        url: "https://myride.bg/myride_logo.png",
        secureUrl: "https://myride.bg/myride_logo.png",
        width: 1200,
        height: 630,
        alt: "MYRIDE.BG",
      },
    ],
  },
  generator: "ZASH",
  applicationName: "ZASH",
  referrer: "origin-when-cross-origin",
  keywords: ["Myride", "Import", "Внос", "автомобили", "Сащ", "Канада"],
  authors: [{ name: "ZASH" }, { name: "ZASH", url: "https://ZASH.ltd" }],
  creator: "ZASH",
  publisher: "ZASH",
  formatDetection: {
    email: false,
    address: false,
    telephone: "0897962266",
  },
  facebook: {
    appId: "157594147428347",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "black",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="fb:app_id" content="" />
      </head>
      <body className="relative">
        <CarbonBackgroundComponent>
          <main
            className={cn(
              montserrat.className,
              "bg-gradient-to-b from-gray-800/30 to-black",
            )}
          >
            <ConvexClientProvider>
              <LenisProvider>
                <NavBar />

                <div className="">{children}</div>
                <Cookie />
                <div className="">
                  <Footer />
                </div>
                <Analytics />
              </LenisProvider>
            </ConvexClientProvider>
          </main>
        </CarbonBackgroundComponent>
      </body>
    </html>
  );
}
