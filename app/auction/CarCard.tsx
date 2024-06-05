import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import { PhoneCall, Upload } from "lucide-react";
import { Separator } from "@components/ui/separator";
import { Badge } from "@components/ui/badge";

interface CarCardProps {
	title: string;
	manufacturer: {
		name: string;
	};
	model: {
		name: string;
	};
	year: number;
	fuel: {
		name: string | null;
	};
	lots: {
		images: {
			id: number;
			small: null | string;
			normal: string[];
			big: string[];
			exterior: null | string;
			interior: null | string;
			video: string;
			video_youtube_id: string;
			external_panorama_url: null | string;
		};
	};
}

function splitDateAndTime(date: string) {
	const [datePart, timePart] = date.split("T");
	const [year, month, day] = datePart.split("-");
	return `${day}.${month}.${year}`;
}

const CarCard = ({ car }: { car: any }) => {
	return (
		<Card className="overflow-hidden h-full ">
			<CardHeader>
				<div className="w-full flex justify-end">
					{car.lots[0] &&
					car.lots[0].condition &&
					car.lots[0].condition.name === "run_and_drives" ? (
						<Badge>В движение</Badge>
					) : (
						<Badge>Неподвижен</Badge>
					)}
				</div>
				<CardTitle>
					{car.manufacturer && car.manufacturer.name}{" "}
					{car.model && car.model.name}
				</CardTitle>

				<CardDescription>{car.year}</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="grid gap-2">
					{car.lots &&
						car.lots.map((lot: any) => (
							<Carousel key={lot.id}>
								<CarouselContent>
									{lot.images?.normal !== "" ? (
										lot.images.normal.map((img: any, index: any) => (
											<CarouselItem key={index}>
												<img
													src={img}
													alt={`Car image ${index + 1}`}
													height={300}
													className="aspect-square w-full rounded-md object-cover"
													width="300"
												/>
											</CarouselItem>
										))
									) : (
										<CarouselItem>
											<div className="aspect-square w-[300px] h-[300px] rounded-md object-cover ">
												No Image
											</div>
										</CarouselItem>
									)}
								</CarouselContent>
							</Carousel>
						))}
					<div className="grid grid-cols-3 gap-2 uppercase">
						<div className="col-span-2 w-full flex-col items-center justify-center rounded-md border border-dashed">
							<div className="w-full flex flex-col justify-center items-center h-full">
								<h2>Детайли</h2>
								<Separator orientation="horizontal" />
								<h2>
									Пробег -{" "}
									{car.lots[0] &&
										car.lots[0].odometer &&
										car.lots[0].odometer.km}{" "}
									км
								</h2>
								<Separator orientation="horizontal" />

								<h2>Двигател - {car.engine && car.engine.name}</h2>
								<Separator orientation="horizontal" />

								<h2>Повреда - {car.lots[0] && car.lots[0].damage.main.name}</h2>
								<Separator orientation="horizontal" />

								<h2 className="w-full flex items-center justify-center">
									Търг -{" "}
									{car.lots[0] && car.lots[0].sale_date
										? splitDateAndTime(car.lots[0].sale_date)
										: "Очаква се дата"}
								</h2>
							</div>
						</div>

						<button className="flex aspect-square w-full min-h-full flex-col items-center justify-center rounded-md border border-dashed text-white bg-red-500 hover:bg-red-800">
							Направи запитване
							<PhoneCall color="white" />
						</button>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default CarCard;
