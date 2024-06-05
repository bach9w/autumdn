import React from "react";
import Cars from "./CarList";

export default async function Home() {
	return (
		<div className="h-full grid grid-cols-1 md:grid-cols-2">
			<Cars />
		</div>
	);
}
