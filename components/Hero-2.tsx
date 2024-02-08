"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import DrawerDialogDemo from "./DrawerC";

export function ThreeDCardDemo() {
	const [isPresed, setIsPresed] = React.useState(false);
	if (isPresed) {
		return <DrawerDialogDemo />;
	}
	return (
		<>
			<div className="bg-black absolute opacity-35 text-white text-center items-center flex text-3xl lg:text-4xl justify-between h-32">
				ИЗБЕРЕТЕ ПРАВИЛНИЯ АВТОМОБИЛ ЗА ВАС ОТ ИЗБРАНАТА ЛОКАЦИЯ
			</div>
			<div className="lg:flex">
				<CardContainer className="inter-var p-16 md:p-0 mt-20">
					<Button
						className="h-2/3 w-2/3 rounded-xl"
						onClick={() => setIsPresed(true)}
					>
						<CardBody className="bg-[#890c1c]  bg-opacity-100 hover:bg-[#890c1c] relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-screen sm:w-[30rem] h-auto rounded-xl p-6 border  ">
							<CardItem
								translateZ="50"
								className=" text-xl font-bold text-white uppercase "
							>
								Внос от сащ
							</CardItem>

							<CardItem translateZ="100" className="w-full mt-4">
								<Image
									src="https://wallpapercave.com/wp/wp4428299.jpg"
									height="1000"
									width="1000"
									className="h-30 w-full object-cover rounded-xl group-hover/card:shadow-xl"
									alt="thumbnail"
								/>
							</CardItem>
						</CardBody>
					</Button>
				</CardContainer>
				<CardContainer className="inter-var p-16 mt-20 md:p-0 xl:mt-12">
					<Button
						className="h-2/3 w-2/3 rounded-xl"
						onClick={() => setIsPresed(true)}
					>
						<CardBody className="bg-[#890c1c]  bg-opacity-60 hover:bg-[#890c1c] relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-screen sm:w-[30rem] h-auto rounded-xl p-6 border  ">
							<CardItem
								translateZ="50"
								className=" text-xl font-bold text-white uppercase "
							>
								внос от канада
							</CardItem>

							<CardItem translateZ="100" className="w-full mt-4">
								<Image
									src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg"
									height="500"
									width="500"
									className="h-30 w-full object-cover rounded-xl group-hover/card:shadow-xl"
									alt="thumbnail"
								/>
							</CardItem>
						</CardBody>
					</Button>
				</CardContainer>
			</div>
		</>
	);
}
