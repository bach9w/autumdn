import "./globals.css";

import Footer from "@components/Footer";
import NavBar from "@components/Navbar";
import { cn } from "@lib/utils";
import { ConvexClientProvider } from "@providers/convex-client-provider";
import { Viewport } from "next";
import { Montserrat } from "next/font/google";
import StickyBottomNav from "@/components/bottom/sticky-bottom";

export const metadata = {
  title: "MYRIDE",
  description: "MYRIDE IMPORT",
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
            <StickyBottomNav />
            <div className="bg-black">
              <Footer />
            </div>
          </ConvexClientProvider>
        </main>
      </body>
    </html>
  );
}
