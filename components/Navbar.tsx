import Link from "next/link";
import Image from "next/image";
import Logo from "/public/opt1.png";

import ButtonWrapper from "./SpotlightButton";

const NavBar = () => {
	return (
		<>
			<header className="bg-[#890c1c] bg-opacity-95 w-full sticky top-0 opacity-100  z-40">
				<nav className=" max-w-[1440px] mx-auto flex justify-between items-center  px-0 py-0 bg-transparent">
					<div className="flex absolute bg-black opacity-90 w-full h-40  justify-center items-end   ">
						<Image src={Logo} width={150} height={250} alt="logo" />
					</div>
				</nav>
			</header>
			<div className="w-40 absolute z-40 xl:left-[200px] sm:w-[220px] top-[100px] sm:top-3  left-0 md:right-10  items-center flex ml-[50px]">
				<ButtonWrapper text="Контакти" />
			</div>
			<div className="w-40 absolute z-40  sm:w-[220px] top-[100px] sm:top-3  right-4 md:right-10  items-center flex ml-[50px]">
				<ButtonWrapper text="За нас" />
			</div>
		</>
	);
};

export default NavBar;
