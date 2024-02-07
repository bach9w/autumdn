"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCardDemo() {
	return (
		<div className=" items-start py-0 lg:flex lg:justify-around ">
			<CardContainer className="inter-var p-16 md:p-0">
				<CardBody className="bg-[#890c1c] bg-opacity-30 relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
					<CardItem translateZ="50" className=" text-xl font-bold text-black ">
						Внос от USA
					</CardItem>

					<CardItem translateZ="100" className="w-full mt-4">
						<Image
							src="https://wallpapercave.com/wp/wp4428299.jpg"
							height="1000"
							width="1000"
							className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
							alt="thumbnail"
						/>
					</CardItem>
				</CardBody>
			</CardContainer>
			<CardContainer className="inter-var p-16 md:p-0">
				<CardBody className="bg-gray-500 bg-opacity-10 relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
					<CardItem translateZ="50" className=" text-xl font-bold text-black ">
						Внос от CANADA
					</CardItem>

					<CardItem translateZ="100" className="w-full mt-4">
						<Image
							src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg"
							height="500"
							width="500"
							className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
							alt="thumbnail"
						/>
					</CardItem>
				</CardBody>
			</CardContainer>
		</div>
	);
}
