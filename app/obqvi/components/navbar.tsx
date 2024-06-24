import { Package2 } from "lucide-react";
import Link from "next/link";
import Logo from "public/myride_logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 flex h-[10%] w-full items-center justify-between bg-black text-white">
      <Link
        href="#"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Image alt="logo" src={Logo} width={100} height={100} />
        <span className="sr-only">MYRIDE</span>
      </Link>
      <nav className="mr-10 flex flex-row items-center gap-6 text-lg font-medium md:gap-5 lg:gap-6">
        <Link
          href="/obqvi/all"
          className="text-muted-foreground transition-colors hover:text-white"
        >
          Обяви
        </Link>
        <Link
          href="/obqvi/dobavi"
          className="text-muted-foreground transition-colors hover:text-white"
        >
          Добави обява
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
