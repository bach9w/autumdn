import DrawerDialogDemo from "@components/DrawerC";
import { ThreeDCard } from "@components/Hero-2";
import React from "react";

export default async function Home() {
	return (
		<>
			<div className="text-center bg-black text-white uppercase">За нас</div>
			<div className="h-screen">
				<div className="text-center text-black h-10">Тук ще има</div>
				<div className="aucInfo bg-black text-white">Аукциони от деня</div>
				<div className="last5auc h-full bg-white">
					<ThreeDCard />
				</div>
			</div>
		</>
	);
}
