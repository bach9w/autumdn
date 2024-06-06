import React from "react";
import Cars from "./CarList";
import { fetchAuctionFilter } from "@app/api/cars";
import { HomeProps } from "@types";

export default async function Home({ searchParams }: HomeProps) {
	return (
		<div className="h-full grid grid-cols-1 md:grid-cols-2 gap-4">
			<Cars filters={""} />
		</div>
	);
}
