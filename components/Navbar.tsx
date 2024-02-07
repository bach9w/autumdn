import Link from "next/link";
import Image from "next/image";
import Logo from "/public/opt1.png";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";

const NavBar = () => {
	return (
		<>
			<header className="bg-black w-full sticky top-0 opacity-100  z-40">
				<div className="h-10 bg-[#890c1c] text-white w-full sticky z-50"></div>
				<nav className=" max-w-[1440px] mx-auto flex justify-between items-center  px-0 py-0 bg-transparent">
					<div className="grid min-h-[200px] place-content-center bg-red-900 p-4"></div>
					<CustomButton
						title="За нас"
						btnType="button"
						containerStyles="text-white rounded-bl bg-red-700 hover:bg-orange-800 hover:bg-opacity:20 min-w-[100px]"
					/>
					<div className="flex justify-center items-center   ">
						<Image src={Logo} width={250} height={250} alt="logo" />
					</div>

					<CustomButton
						title="Контакти"
						btnType="button"
						containerStyles="text-white rounded-bl bg-red-700 hover:bg-orange-800 hover:bg-opacity:20 min-w-[100px]"
					/>
					<div className="grid min-h-[200px] place-content-center bg-red-900 p-4"></div>
				</nav>
			</header>
		</>
	);
};

export default NavBar;
