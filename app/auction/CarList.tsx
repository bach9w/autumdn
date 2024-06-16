"use client";
import React, { useEffect, useState } from "react";

import CarCard from "./CarCard";

import Loading from "@components/loading";

function Cars({ filters }: { filters: any }) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const query = new URLSearchParams(filters).toString();
      try {
        const response = await fetch(`/api/cars?${query}`, {
          next: { revalidate: 30 },
        });
        const result = await response.json();
        console.log(result);
        if (!response.ok) {
          throw new Error(result.error);
        }
        setData(result.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [filters]);

  return (
    <>
      {loading && <Loading />}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
        {data &&
          Array.isArray(data) &&
          data.map(
            (car: any) =>
              car.lots &&
              car.lots[0] &&
              car.lots[0].images &&
              car.lots[0].sale_date !== null &&
              car.lots[0].images?.normal && (
                <div className="-ml-5 -mr-5 overflow-x-hidden" key={car.id}>
                  <CarCard car={car} />
                </div>
              ),
          )}
      </div>
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
