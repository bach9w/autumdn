"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/myride_logo.jpg";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Menu, Package2 } from "lucide-react";

const NavBar = () => {
	const router = useRouter();
	return (
		<>
			<nav className="sticky top-0 bg-[#000000] w-full h-[10%] z-50 p-2">
				<div className="flex w-full items-center justify-between">
					<Image
						style={{ filter: "brightness(0.3)" }}
						src={Logo}
						width={100}
						height={250}
						alt="logo"
						onClick={() => router.push("/")}
					/>
					<div className="p-2 hidden md:flex md:relative w-[300px] ">
						<Input
							placeholder="Tърсене на автомобил"
							className="rounded-r-none"
						/>

						<Button className="bg-red-500 rounded-l-none">Търси</Button>
					</div>
					<div className="text-black">
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
										href="#"
										className="flex items-center gap-2 text-lg font-semibold"
									>
										<Image src={Logo} width={70} height={30} alt="logo" />
										<span className="sr-only">Acme Inc</span>
									</Link>
									<Link
										href="#"
										className="text-muted-foreground hover:text-foreground"
									>
										Начало
									</Link>
									<Link
										href="#"
										className="text-muted-foreground hover:text-foreground"
									>
										Аукциони
									</Link>
									<Link
										href="#"
										className="text-muted-foreground hover:text-foreground"
									>
										Наскоро добавени - Канада
									</Link>
									<Link
										href="#"
										className="text-muted-foreground hover:text-foreground"
									>
										Наскоро добавени - Америка
									</Link>
									<Link
										href="#"
										className="text-muted-foreground hover:text-foreground"
									>
										За нас
									</Link>
								</nav>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
