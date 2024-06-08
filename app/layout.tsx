import "./globals.css";

import Footer from "@components/Footer";
import NavBar from "@components/Navbar";
import { cn } from "@lib/utils";
import { Montserrat } from "next/font/google";

export const metadata = {
  title: "MYRIDE",
  description: "MYRIDE IMPORT",
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
          <NavBar />

          <div className="">{children}</div>
          <div className="bg-black">
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
