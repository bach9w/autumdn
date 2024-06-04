"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";

import CustomButton from "@components/CustomButton";
import { useEffect, useRef } from "react";

const Hero = () => {
	const handleScroll = () => {
		const nextSection = document.getElementById("discover");

		if (nextSection) {
			nextSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	const ref = useRef(null);
	const IsInView = useInView(ref);

	useEffect(() => {
		console.log("Element is in view: ", IsInView);
	}, [IsInView]);

	return (
		<div className="hero relative" ref={ref}>
			<div className="flex-1 pt-36 padding-x">
				<h1 className="hero__title">Нови аукциони</h1>

				<p className="hero__subtitle">
					Доставяме всяка седмица нови аукциони на най-добри цени.
				</p>

				<CustomButton
					title="Към новите аукциони"
					containerStyles="bg-orange-500 hover:bg-red-700 text-white rounded-full mt-10"
					handleClick={handleScroll}
				/>
			</div>
			<div className="hero__image-container relative mb-[-350px] bottom-[300px] md:bottom-0 md:mb-[0px]  xl:bottom-[100px]">
				<div className="hero__image">
					<motion.div
						className="bottom-[200px] absolute"
						whileInView={{
							opacity: 100,
							y: 10,
							scale: 1,
							transition: {
								type: "spring",
								stiffness: 10,
								damping: 2,
								duration: 2,
							},
						}}
						exit={{ opacity: 0, y: 0, scale: 0.6 }}
					>
						<Image src="/hero.png" height="4000" width="4000" alt="thumbnail" />
						<section ref={ref}></section>
					</motion.div>
				</div>

				<div className=" hero__image-overlay" />
			</div>
		</div>
	);
};

export default Hero;
