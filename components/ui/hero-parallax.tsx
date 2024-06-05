"use client";
import React from "react";
import {
	motion,
	useScroll,
	useTransform,
	useSpring,
	MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SwipeCarousel } from "./carousel_first";
import Hero from "@components/Hero";

export const HeroParallax = ({
	products,
}: {
	products: {
		title: string;
		link: string;
		thumbnail: string;
	}[];
}) => {
	const firstRow = products.slice(0, 4);
	const secondRow = products.slice(4, 8);
	const thirdRow = products.slice(8, 12);
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end start", "start start"],
	});

	const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

	const translateX = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, 1000]),
		springConfig,
	);
	const translateXReverse = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, -1000]),
		springConfig,
	);
	const rotateX = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [15, 0]),
		springConfig,
	);
	const opacity = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
		springConfig,
	);
	const rotateZ = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [20, 0]),
		springConfig,
	);
	const translateY = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [-700, 0]),
		springConfig,
	);
	return (
		<>
			<Header />
			<div
				ref={ref}
				className=" md:h-full py-10 md:py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:200px] [transform-style:preserve-3d]"
			>
				<motion.div
					style={{
						rotateX,
						rotateZ,
						translateY,
						opacity,
					}}
					className=""
				>
					<motion.div className="flex bg-orange-400 font-bold text-white justify-center mb-4">
						<h1>MYRIDE</h1>
					</motion.div>
					<motion.div className="flex flex-row  mb-20 space-x-20 ">
						{secondRow.map((product) => (
							<ProductCard
								product={product}
								translate={translateXReverse}
								key={product.title}
							/>
						))}
					</motion.div>
				</motion.div>
				<div className="">
					<SwipeCarousel />
				</div>
			</div>
		</>
	);
};

export const Header = () => {
	return (
		<div className="relative bottom-24">
			<Hero />
		</div>
	);
};

export const ProductCard = ({
	product,
	translate,
}: {
	product: {
		title: string;
		link: string;
		thumbnail: string;
	};
	translate: MotionValue<number>;
}) => {
	return (
		<motion.div
			style={{
				x: translate,
			}}
			whileHover={{
				y: -20,
			}}
			key={product.title}
			className="group/product h-96 w-[30rem] relative flex-shrink-0"
		>
			<Link
				href={product.link}
				className="block group-hover/product:shadow-2xl "
			>
				<Image
					src={product.thumbnail}
					height="600"
					width="600"
					className="object-cover object-left-top absolute h-full w-full inset-0"
					alt={product.title}
				/>
			</Link>
			<div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
			<h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
				{product.title}
			</h2>
		</motion.div>
	);
};
