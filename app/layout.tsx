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

export const metadata = {
  title: "MYRIDE",
  description: "MYRIDE IMPORT",
  metadataBase: new URL("https://myride.bg"),
  openGraph: {
    title: "MYRIDE.BG",
    description: "Внос на автомобили от Америка и Канада",
    url: "https://myride.bg",
    type: "website",

    images: [
      {
        url: "https://myride.bg/myride_logo.jpg",
        secureUrl: "https://myride.bg/myride_logo.jpg",
        width: 1200,
        height: 630,
        alt: "MYRIDE.BG",
      },
    ],
  },
  other: {
    fb: [
      {
        app_id: "157594147428347",
      },
    ],
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
      <body className="relative">
        <main className={cn(montserrat.className, "bg-orange-700")}>
          <ConvexClientProvider>
            <NavBar />

            <div className="">{children}</div>
            <Cookie />
            <div className="bg-black">
              <Footer />
            </div>
            <Analytics />
          </ConvexClientProvider>
        </main>
      </body>
    </html>
  );
}
