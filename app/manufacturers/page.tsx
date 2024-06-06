"use client";
import React, { useEffect, useState, Suspense, lazy } from "react";

import { fetchManufacturers } from "@app/api/cars";
import { Card, CardDescription, CardHeader } from "@components/ui/card";
import { cn } from "@lib/utils";
import Logo from "@/public/myride_logo.jpg";
import Image from "next/image";

const Loading = () => (
	<div className="w-full min-h-screen flex justify-center items-center text-black animate-pulse ">
		<Image src={Logo} width={300} height={300} alt="Logo" />
	</div>
);

const Manufacturers = () => {
	const [manufacturers, setManufacturers] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchManufacturers().then((res) => {
			setManufacturers(res.data);
			setLoading(false);
		});
	}, []);

	return (
		<div className="w-full min-h-screen">
			{loading && <Loading />}
			<div className="text-2xl uppercase font-bold flex justify-center bg-[#D07B20] rounded-b-xl fixed w-full bg-opacity-100 text-black">
				Марки автомобили
			</div>
			<Suspense fallback={<Loading />}>
				<div className="grid grid-cols-2 md:grid-cols-3">
					{manufacturers.map((manufacturer: any) => (
						<div
							key={manufacturer.id}
							className={cn(manufacturer.image ? "flex p-1 " : "hidden")}
						>
							<Card className="w-full h-[200px] justify-center items-center flex flex-col">
								<CardHeader>
									<p>{manufacturer.name}</p>
								</CardHeader>
								<CardDescription>
									<img
										width={100}
										height={100}
										src={manufacturer.image}
										alt={manufacturer.name}
									/>
								</CardDescription>
							</Card>
						</div>
					))}
				</div>
			</Suspense>
		</div>
	);
};

export default Manufacturers;
