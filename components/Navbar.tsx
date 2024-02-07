import Link from "next/link";
import Image from "next/image";
import Logo from "/public/opt1.png";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";

const NavBar = () => {
	return (
		<>
			<header className="bg-[#890c1c] bg-opacity-95 w-full sticky top-0 opacity-100  z-40">
				<div className="h-5 sm:h-10 bg-[#890c1c] text-white w-full sticky z-50"></div>
				<nav className=" max-w-[1440px] mx-auto flex justify-between items-center  px-0 py-0 bg-transparent">
					<CustomButton
						title="За нас"
						btnType="button"
						containerStyles="absolute top-20 left-3 text-white rounded-bl bg-black hover:bg-gray-800 hover:bg-opacity:20 min-w-[100px]"
					/>
					<div className="flex justify-center items-center   ">
						<Image src={Logo} width={250} height={250} alt="logo" />
					</div>

					<CustomButton
						title="Контакти"
						btnType="button"
						containerStyles="absolute top-20 right-3 text-white rounded-bl bg-black hover:bg-gray-800 hover:bg-opacity:20 min-w-[100px]"
					/>
				</nav>
			</header>
		</>
	);
};

export default NavBar;
