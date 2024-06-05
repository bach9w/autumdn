"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import Hero from "./Hero";

export function HeroParallaxDemo() {
	return (
		<div className="">
			<HeroParallax products={products} />
		</div>
	);
}
export const products = [
	{
		title: "GMC",
		link: "http://ferrari.com",
		thumbnail:
			"https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0124/988e3d756b654d9da5448c431290f749_ful.jpg",
	},
	{
		title: "2016 AUDI Q5 PREMIUM PLUS",
		link: "http://ferrari.com",
		thumbnail:
			"https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/1023/0d8eaf4360674fffab988cebde1eb810_ful.jpg",
	},
	{
		title: "2019 TOYOTA HIGHLANDER SE",
		link: "http://ferrari.com",
		thumbnail:
			"https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0124/1b7fdc5588104650b5f793145777e909_ful.jpg",
	},
	{
		title: "2023 MERCEDES-BENZ S 500 4MATIC",
		link: "http://ferrari.com",
		thumbnail:
			"https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0124/63259c0b3eac429d8f0aabbdf32c65e9_ful.jpg",
	},
	{
		title: "202 MERCEDES-BENZ S 500 4MATIC",
		link: "http://ferrari.com",
		thumbnail:
			"https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0124/63259c0b3eac429d8f0aabbdf32c65e9_ful.jpg",
	},
	{
		title: "2023 MERCEDES-BENZ S 500 4MATIC",
		link: "http://ferrari.com",
		thumbnail:
			"https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0124/63259c0b3eac429d8f0aabbdf32c65e9_ful.jpg",
	},
	{
		title: "2022 MERCEDES-BENZ GLE COUPE AMG 53 4MATIC",
		link: "http://ferrari.com",
		thumbnail:
			"https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/1223/3a868578ed434d21afe70faf2744364a_ful.jpg",
	},
	{
		title: "Ferarri",
		link: "http://ferrari.com",
		thumbnail:
			"https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/1223/5752181e5e5e4cbc8506757ddd211878_ful.jpg",
	},
];
