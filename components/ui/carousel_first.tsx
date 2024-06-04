import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Label } from "@radix-ui/react-label";
import { Badge } from "./badge";
import { Button } from "./button";
import {
	CarIcon,
	DollarSign,
	FuelIcon,
	PowerIcon,
	PowerSquare,
	SettingsIcon,
	UsbIcon,
} from "lucide-react";

const imgs = [
	"https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0124/988e3d756b654d9da5448c431290f749_ful.jpg",
	"https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0124/988e3d756b654d9da5448c431290f749_ful.jpg",
	"https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0124/988e3d756b654d9da5448c431290f749_ful.jpg",
	"https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0124/988e3d756b654d9da5448c431290f749_ful.jpg",
	"https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0124/988e3d756b654d9da5448c431290f749_ful.jpg",
	"https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0124/988e3d756b654d9da5448c431290f749_ful.jpg",
	"https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0124/988e3d756b654d9da5448c431290f749_ful.jpg",
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
	type: "spring",
	mass: 3,
	stiffness: 400,
	damping: 50,
};

export const SwipeCarousel = () => {
	const [imgIndex, setImgIndex] = useState(0);

	const dragX = useMotionValue(0);

	useEffect(() => {
		const intervalRef = setInterval(() => {
			const x = dragX.get();

			if (x === 0) {
				setImgIndex((pv) => {
					if (pv === imgs.length - 1) {
						return 0;
					}
					return pv + 1;
				});
			}
		}, AUTO_DELAY);

		return () => clearInterval(intervalRef);
	}, []);

	const onDragEnd = () => {
		const x = dragX.get();

		if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
			setImgIndex((pv) => pv + 1);
		} else if (x >= DRAG_BUFFER && imgIndex > 0) {
			setImgIndex((pv) => pv - 1);
		}
	};

	return (
		<div className="relative bg-orange-500 overflow-hidden  py-8">
			<Label className="w-full items-center justify-center flex hover:bg-orange-500">
				<Badge className="relative bottom-2 bg-white h-[60px] w-[80%] hover:bg-orange-500  text-black font-bold  justify-center uppercase text-xl lg:text-3xl hover:text-white">
					Последно добавени автомобили
				</Badge>
			</Label>
			<motion.div
				drag="x"
				dragConstraints={{
					left: 0,
					right: 0,
				}}
				style={{
					x: dragX,
				}}
				animate={{
					translateX: `-${imgIndex * 100}%`,
				}}
				transition={SPRING_OPTIONS}
				onDragEnd={onDragEnd}
				className="flex  cursor-grab items-center active:cursor-grabbing"
			>
				<Images imgIndex={imgIndex} />
			</motion.div>

			<Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
			<GradientEdges />
		</div>
	);
};

const Images = ({ imgIndex }: { imgIndex: number }) => {
	return (
		<>
			{imgs.map((imgSrc, idx) => {
				return (
					<motion.div
						key={idx}
						style={{
							backgroundImage: `url(${imgSrc})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
						animate={{
							scale: imgIndex === idx ? 0.95 : 0.85,
						}}
						transition={SPRING_OPTIONS}
						className="aspect-video w-full max-h-[600px] shrink-0 rounded-xl bg-neutral-800 "
					>
						<Button
							variant="destructive"
							className="bg-orange-800 relative top-2 left-2"
						>
							Позвъни сега
						</Button>
						<div className="absolute w-full h-[80px] bg-orange-500 bottom-0">
							<div className="group flex justify-between">
								<Badge className="bg-white hover:bg-none h-[80px] w-full rounded-t text-black flex items-center relative top-2 justify-between">
									<div className="hidden sm:flex space-x-4 relative top-5 md:top-0 left-10">
										<Button className="gap-3 hover:bg-red-900">
											<CarIcon />
											200 000 км
										</Button>
										<Button className="gap-3 hover:bg-red-900">
											<DollarSign />
											20 000 лв
										</Button>
										<Button className="invisible sm:visible sm: gap-3 hover:bg-red-900">
											<SettingsIcon />
											4.0 л
										</Button>
										<Button className="invisible md:visible gap-3 hover:bg-red-900">
											<FuelIcon />
											Бензин
										</Button>
									</div>
									<Badge className="text-[16px] bg-red-900 drop-shadow-sm font-bold relative left-4 group-hover:bg-red-900">
										Обявена на : 30.05.2024
									</Badge>
								</Badge>
							</div>
						</div>
					</motion.div>
				);
			})}
		</>
	);
};

const Dots = ({
	imgIndex,
	setImgIndex,
}: {
	imgIndex: number;
	setImgIndex: Dispatch<SetStateAction<number>>;
}) => {
	return (
		<div className="mt-4 flex w-full justify-center gap-2">
			{imgs.map((_, idx) => {
				return (
					<button
						key={idx}
						onClick={() => setImgIndex(idx)}
						className={`h-3 w-3 rounded-full transition-colors ${
							idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
						}`}
					/>
				);
			})}
		</div>
	);
};

const GradientEdges = () => {
	return (
		<>
			<div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
			<div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
		</>
	);
};
