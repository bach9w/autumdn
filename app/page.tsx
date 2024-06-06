import { fetchAuctionFilter } from "@/app/api/cars";
import { HomeProps } from "@types";
import { fuels, yearsOfProduction } from "@constants";
import Hero from "@components/Hero";
import CarCard from "@components/CarCard";
import SearchBar from "@components/Searchbar";
import CustomFilter from "@components/CustomFilter";

import ShowMore from "@components/ShowMore";
import { HeroParallaxDemo } from "@components/Parallax";
import { ThreeDCard } from "@components/Hero-2";
import Cars from "./auction/CarList";
import { Button } from "@components/ui/button";
import Link from "next/link";

export default async function Home({ searchParams }: HomeProps) {
	const filters = {
		year: searchParams.year || "",
		fuel: searchParams.fuel || "",
	};

	return (
		<main className="overflow-hidden">
			<HeroParallaxDemo />

			<ThreeDCard />

			<div className="mt-12 padding-x padding-y max-width" id="discover">
				<div className="home__text-container">
					<h1 className="text-4xl font-extrabold">Каталог аукциони</h1>
					<p>Наскоро добавени аукциони</p>
				</div>

				<section id="auctions" className="home__filters">
					{/*<SearchBar />*/}

					<div className="home__filter-container">
						<CustomFilter title="fuel" options={fuels} />
						<CustomFilter title="year" options={yearsOfProduction} />
					</div>
				</section>
			</div>
			<div className="h-full grid grid-cols-1 md:grid-cols-2 ">
				<Cars filters={filters} />
			</div>
			<div className="w-full flex items-start justify-center mt-6">
				<Link href="/auction">
					<Button>Разгледай всички аукциони</Button>
				</Link>
			</div>
		</main>
	);
}
