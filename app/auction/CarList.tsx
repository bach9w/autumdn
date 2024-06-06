"use client";
import React, { useEffect, useState } from "react";
import { fetchAuction, fetchAuctionFilter } from "@app/api/cars";
import { AuctionProps } from "@types";
import CarCard from "./CarCard";
import cars from "./cars.json";

import Logo from "@/public/myride_logo.jpg";
import Image from "next/image";

const Loading = () => (
	<div className="w-full min-h-screen flex justify-center items-center text-black animate-pulse ">
		<Image src={Logo} width={300} height={300} alt="Logo" />
	</div>
);

function Cars({ filters }: { filters: any }) {
	const [allAuctions, setAllAuctions] = useState<AuctionProps>();
	const [data, setData] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!filters) {
			fetchAuction().then((res) => {
				setAllAuctions(res);
				setData(res.data);
				setLoading(false);
			});
		} else {
			fetchAuctionFilter(filters).then((res) => {
				setAllAuctions(res);
				setData(res.data);
				setLoading(false);
			});
		}
	}, [filters]);

	return (
		<>
			{loading && <Loading />}
			{data &&
				Array.isArray(data) &&
				data.map(
					(car: any) =>
						car.lots &&
						car.lots[0] &&
						car.lots[0].images &&
						car.lots[0].sale_date !== null &&
						car.lots[0].images?.normal && (
							<div key={car.id}>
								<CarCard car={car} />
							</div>
						),
				)}
		</>
	);
}

export default Cars;

/*
{car.lots &&
							car.lots.map((lot) => (
								<div key={lot.id}>
									<p>
										<strong>Odometer:</strong> {lot.odometer?.km || "Unknown"}{" "}
										km / {lot.odometer?.mi || "Unknown"} mi
									</p>
									<p>
										<strong>Main Damage:</strong>{" "}
										{lot.damage?.main?.name || "Unknown"}
									</p>
									<p>
										<strong>Secondary Damage:</strong>{" "}
										{lot.damage?.second?.name || "Unknown"}
									</p>
									<p>
										<strong>Keys Available:</strong>{" "}
										{lot.keys_available ? "Yes" : "No"}
									</p>
									<p>
										<strong>Airbags:</strong> {lot.airbags?.name || "Unknown"}
									</p>
									<p>
										<strong>Condition:</strong>{" "}
										{lot.condition?.name || "Unknown"}
									</p>
									<p>
										<strong>Location:</strong>{" "}
										{lot.location?.city?.name || "Unknown"},{" "}
										{lot.location?.state?.name || "Unknown"},{" "}
										{lot.location?.country?.name || "Unknown"}
									</p>

									<h2>Images</h2>
									<div style={{ display: "flex", flexWrap: "wrap" }}>
										{lot.images?.normal &&
											lot.images.normal.map((img, index) => (
												<img
													key={index}
													src={img}
													alt={`Car image ${index + 1}`}
													style={{
														width: "200px",
														height: "150px",
														margin: "5px",
													}}
												/>
											))}
									</div>

									<h2>Video</h2>
									{lot.images?.video && (
										<video controls width="500">
											<source src={lot.images.video} type="video/mp4" />
											Your browser does not support the video tag.
										</video>
									)}
								</div>
							))}*/
