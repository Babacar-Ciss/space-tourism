import styled from "styled-components";
import { Barlow_Condensed } from "@next/font/google";
import Store from "../store";

const barlow = Barlow_Condensed({
	weight: ["400", "700"],
	subsets: ["latin"],
});

const PLANETS_ITEMS = [
	{ id: "00", title: "moon" },
	{ id: "01", title: "mars" },
	{ id: "02", title: "europa" },
	{ id: "03", title: "titan" },
];

const PlanetsListStyle = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 2rem;
`;

const P = styled.p`
	font-family: ${barlow.style.fontFamily};
	font-size: 1.4rem;
	line-height: 1.7rem;
	letter-spacing: 2.3625px;
	margin-right: 2.8rem;
	text-transform: uppercase;
	padding-bottom: 0.8rem;
	border-bottom: ${({ isPlanetActive }) =>
		isPlanetActive ? "3px solid var(--white)" : "0"};
	cursor: pointer;
	:last-child {
		margin-right: 0;
	}
`;

const PlanetsList = () => {
	const selectedPlanet = Store((state) => state.selectedPlanet);
	const setSelectedPlanet = Store((state) => state.setSelectedPlanet);

	const toggleSelectedPlanetPlanetHandler = (activePlanet) => {
		if (activePlanet === selectedPlanet) {
			setSelectedPlanet(null);
		}
		setSelectedPlanet(activePlanet);
	};

	return (
		<PlanetsListStyle>
			{PLANETS_ITEMS.map((planet, index) => (
				<P
					key={planet.id}
					onClick={() => toggleSelectedPlanetPlanetHandler(planet.title)}
					isPlanetActive={selectedPlanet === planet.title}
				>
					{planet.title}
				</P>
			))}
		</PlanetsListStyle>
	);
};

export default PlanetsList;
