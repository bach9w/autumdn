"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";

import { CustomButton } from "@components";
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
		<div className="hero" ref={ref}>
			<div className="flex-1 pt-36 padding-x">
				<h1 className="hero__title">Нови аукциони</h1>

				<p className="hero__subtitle">
					Доставяме всяка седмица нови аукциони на най-добри цени.
				</p>

				<CustomButton
					title="Към новите аукциони"
					containerStyles="bg-red-500 hover:bg-red-700 text-white rounded-full mt-10"
					handleClick={handleScroll}
				/>
			</div>
			<div className="hero__image-container">
				<div className="hero__image">
					<motion.div
						whileInView={{
							opacity: 100,
							y: 120,
							scale: 1,
							transition: {
								type: "spring",
								stiffness: 260,
								damping: 10,
								duration: 2,
							},
						}}
						exit={{ opacity: 0, y: 20, scale: 0.6 }}
					>
						<Image
							src="/hero.png"
							height="2000"
							width="2000"
							className="absolute top-[-50px] font-bold text-2xl"
							style={{
								transform: IsInView ? "none" : "translateX(200px)",
								opacity: IsInView ? 1 : 1,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
							}}
							alt="thumbnail"
						/>
						<section ref={ref}></section>
					</motion.div>
				</div>

				<div className="hero__image-overlay" />
			</div>
		</div>
	);
};

export default Hero;
