"use client";
import React, { useEffect, useState } from "react";
import { fetchAuction } from "@app/api/cars";
import { AuctionProps } from "@types";
import CarCard from "./CarCard";
import cars from "./cars.json";

function Cars() {
	const [allAuctions, setAllAuctions] = useState<typeof cars | null>();
	const [data, setData] = useState<any[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			setAllAuctions(cars);
			setData(cars.data);
		};

		fetchData();
	}, []); // Empty array ensures this runs once on mount

	console.log(allAuctions);

	return (
		<div>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-1">
				{data &&
					Array.isArray(data) &&
					data.map((car: any) => (
						<div key={car.id}>
							<CarCard car={car} />
						</div>
					))}
			</div>
		</div>
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
