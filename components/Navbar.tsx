import Link from "next/link";
import Image from "next/image";
import Logo from "/public/opt1.png";

import ButtonWrapper from "./SpotlightButton";

const NavBar = () => {
	return (
		<>
			<header className="bg-[#890c1c] bg-opacity-95 w-full sticky top-0 opacity-100  z-40">
				<nav className=" max-w-[1440px] mx-auto flex justify-between items-center  px-0 py-0 bg-transparent">
					<div className="w-[140px] ml-[50px]">
						<ButtonWrapper text="За нас" />
					</div>
					<div className="flex justify-center items-center   ">
						<Image src={Logo} width={150} height={250} alt="logo" />
					</div>
					<div className="w-[140px] mr-[50px]">
						<ButtonWrapper text="Контакти" />
					</div>
				</nav>
			</header>
		</>
	);
};

export default NavBar;
