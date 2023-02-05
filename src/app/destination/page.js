"use client";

import styled from "styled-components";
import { Barlow_Condensed } from "@next/font/google";
import { Barlow } from "@next/font/google";
import Image from "next/image";
import PlanetsList from "@/components/PlanetsList";
import Store from "store";

const DESTINATION_DATAS = [
	{
		name: "Moon",
		images: {
			png: "./assets/destination/image-moon.png",
			webp: "./assets/destination/image-moon.webp",
		},
		description:
			"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
		distance: "384,400 km",
		travel: "3 days",
	},
	{
		name: "Mars",
		images: {
			png: "./assets/destination/image-mars.png",
			webp: "./assets/destination/image-mars.webp",
		},
		description:
			"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
		distance: "225 mil. km",
		travel: "9 months",
	},
	{
		name: "Europa",
		images: {
			png: "./assets/destination/image-europa.png",
			webp: "./assets/destination/image-europa.webp",
		},
		description:
			"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
		distance: "628 mil. km",
		travel: "3 years",
	},
	{
		name: "Titan",
		images: {
			png: "./assets/destination/image-titan.png",
			webp: "./assets/destination/image-titan.webp",
		},
		description:
			"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
		distance: "1.6 bil. km",
		travel: "7 years",
	},
];

const barlowCondensed = Barlow_Condensed({
	weight: ["400", "700"],
	subsets: ["latin"],
});

const barlow = Barlow({
	weight: "400",
	subsets: ["latin"],
});

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 2.4rem;
`;

const TitlePage = styled.p`
	font-family: ${barlowCondensed.style.fontFamily};
	font-size: 1.6rem;
	line-height: 1.9rem;
	letter-spacing: 2.7px;
	text-transform: uppercase;
	margin-bottom: 3.2rem;

	span {
		font-weight: 700;
		letter-spacing: 2.7px;
		opacity: 0.25;
		margin-right: 0.5rem;
		color: antiquewhite;
	}
`;

const WrapperPlanet = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 2.4rem;
`;

const MainInformations = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 2.6rem;
`;

const PlanetName = styled.p`
	font-size: 5.6rem;
	line-height: 6.4rem;
	margin-bottom: 0.2rem;
`;

const PlanetDescription = styled.p`
	font-family: ${barlow.style.fontFamily};
	color: var(--blue);
	font-size: 1.5rem;
	line-height: 2.5rem;
	text-align: center;
	padding-bottom: 3.2rem;
	border-bottom: 1px solid #383b4b;
	margin-bottom: 3.2rem;
`;

const MetaDataContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	:not(:last-child) {
		margin-bottom: 3.2rem;
	}

	:last-child {
		margin-bottom: 5.8rem;
	}

	p {
		font-family: ${barlowCondensed.style.fontFamily};
		font-size: 1.4rem;
		line-height: 1.7rem;
		letter-spacing: 2.3625px;
		text-transform: uppercase;
		margin-bottom: 1.2rem;
	}

	h2 {
		font-size: 2.8rem;
		line-height: 3.2rem;
		text-transform: uppercase;
	}
`;

export default function page() {
	const selectedPlanet = Store((state) => state.selectedPlanet);

	return (
		<Container>
			<TitlePage>
				<span>01</span> Pick your destination
			</TitlePage>

			{/* {console.log(
				DESTINATION_DATAS.filter(
					(planet) => planet.name.toLowerCase() === selectedPlanet
				)
			)} */}

			{DESTINATION_DATAS.filter(
				(planet) => planet.name.toLowerCase() === selectedPlanet
			).map((planetDisplay, index) => (
				<WrapperPlanet key={index}>
					<Image
						src={`/assets/destination/image-${selectedPlanet}.webp`}
						alt={selectedPlanet}
						width={170}
						height={170}
					/>
					<MainInformations>
						<PlanetsList />
						<PlanetName> {planetDisplay.name}</PlanetName>
						<PlanetDescription>{planetDisplay.description}</PlanetDescription>
						<MetaDataContainer>
							<p>avg. distance</p>
							<h2>{planetDisplay.distance}</h2>
						</MetaDataContainer>
						<MetaDataContainer>
							<p>Est. travel time</p>
							<h2>{planetDisplay.travel}</h2>
						</MetaDataContainer>
					</MainInformations>
				</WrapperPlanet>
			))}
		</Container>
	);
}
