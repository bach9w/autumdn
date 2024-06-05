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

const CarCard = ({ car }: { car: any }) => {
	return (
		<Card className="overflow-hidden">
			<CardHeader>
				<CardTitle>
					{car.manufacturer.name} {car.model.name}{" "}
				</CardTitle>
				<CardDescription>{car.year}</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="grid gap-2">
					{car.lots &&
						car.lots.map((lot: any) => (
							<Carousel key={lot.id}>
								<CarouselContent>
									{lot.images?.normal &&
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
										))}
								</CarouselContent>
							</Carousel>
						))}
					<div className="grid grid-cols-3 gap-2">
						<div className="col-span-2 w-full flex-col items-center justify-center rounded-md border border-dashed">
							<div className="w-full flex flex-col justify-center items-center h-full">
								<h2>Детайли</h2>
								<h2>Пробег - {car.lots[0].odometer.km} км</h2>
								<h2>Двигател - {car.engine.name}</h2>
								<h2>Повреда - {car.lots[0].damage.main.name}</h2>
								<h2>
									Търг -{" "}
									{car.lots[0].sale_date ? car.lots[0].sale_date : "Няма данни"}
								</h2>
							</div>
						</div>

						<button className="flex aspect-square w-full flex-col items-center justify-center rounded-md border border-dashed text-white bg-red-500">
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
