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
import Head from "next/head";

export const metadata = {
  title: "MYRIDE",
  description: "MYRIDE IMPORT",
  openGraph: {
    images: "/myride_logo.jpg",
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
      <Head>
        <meta property="og:image" content="/myride_logo.jpg" />
        <meta property="og:title" content="MyRide.BG" />
        <meta
          property="og:description"
          content="Внос на автомобили от Америка и Канада"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://myride.bg" />
      </Head>
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
