import Link from "next/link";
import Image from "next/image";
import Logo from "/public/opt1.png";

import CustomButton from "./CustomButton";

const NavBar = () => (
	<header className="bg-black w-full sticky top-0 z-40">
		<nav className=" max-w-[1440px] mx-auto flex justify-between items-center  px-0 py-0 bg-transparent">
			<CustomButton
				title="За нас"
				btnType="button"
				containerStyles="text-white rounded-bl bg-red-700 min-w-[100px]"
			/>
			<div className="flex justify-center items-center   ">
				<Image src={Logo} width={250} height={250} alt="logo" />
			</div>

			<CustomButton
				title="Контакти"
				btnType="button"
				containerStyles="text-white rounded-br bg-red-700 min-w-[100px]"
			/>
		</nav>
	</header>
);

export default NavBar;
