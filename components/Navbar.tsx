import Link from "next/link";
import Image from "next/image";
import Logo from "/public/myride_logo.jpg";

import ButtonWrapper from "./SpotlightButton";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const NavBar = () => {
	return (
		<>
			<header className="bg-[#8c6066] bg-opacity-95 w-full sticky top-0 opacity-100  z-40">
				<nav className=" max-w-[1440px] mx-auto flex justify-between items-start  px-0 py-0 bg-transparent">
					<div className="flex  justify-between  bg-black opacity-100 w-full h-40   items-end    ">
						<div className="relative  bottom-10 left-10">
							<ButtonWrapper text="Контакти" />
						</div>
						<div className="relative bottom-10">
							<ButtonWrapper text="За нас" />
						</div>
						<div className="hidden md:flex md:flex-col md:relative w-[300px] ">
							<Label className="text-white mb-2 uppercase font-bold">
								Намери желания автомобил
							</Label>

							<Input />
							<div className="relative bottom-2 left-[200px]">
								<Button className="w-[100px]">Търси</Button>
							</div>
						</div>
						<div className="relative  bottom-5 right-5">
							<Image
								style={{ filter: "brightness(0.3)" }}
								src={Logo}
								width={150}
								height={250}
								alt="logo"
							/>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};

export default NavBar;
