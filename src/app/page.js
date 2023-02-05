"use client";

import styled from "styled-components";
import { Barlow, Barlow_Condensed } from "@next/font/google";
import Link from "next/link";

import Store from "store";

const barlow = Barlow({ weight: "400", subsets: ["latin"] });
const barlowCondensed = Barlow_Condensed({ weight: "400", subsets: ["latin"] });

const Container = styled.div`
	margin-top: 5.8rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 768px) {
		margin-top: 10.6rem;
		padding-inline: 16.2rem;
	}

	@media (min-width: 1440px) {
		margin-top: 25.1rem;
		padding-inline: 16.5rem;
		flex-direction: row;
		justify-content: space-between;
	}

	p {
		font-family: ${barlow.style.fontFamily};
		text-align: center;
		color: var(--blue);
	}

	p:first-of-type {
		font-size: 1.6rem;
		line-height: 1.9rem;
		letter-spacing: 2.7px;
		margin-bottom: 1.6rem;

		@media (min-width: 768px) {
			font-size: 2rem;
			line-height: 2.4rem;
			letter-spacing: 3.375px;
			margin-bottom: 2.4rem;
		}

		@media (min-width: 1440px) {
			font-size: 2.8rem;
			line-height: 3.4rem;
			letter-spacing: 4.725px;
			text-align: left;
		}
	}

	p:last-of-type {
		font-size: 1.5rem;
		line-height: 2.5rem;
		margin-bottom: 8.1rem;

		@media (min-width: 768px) {
			font-size: 1.6rem;
			line-height: 2.8rem;
			margin-bottom: 15.6rem;
		}

		@media (min-width: 1440px) {
			margin-bottom: 2.4rem;
			font-size: 1.8rem;
			line-height: 3.2rem;
			text-align: left;
		}
	}

	h1 {
		font-size: 8rem;
		line-height: 100px;
		text-align: center;
		margin-bottom: 1.6rem;

		@media (min-width: 768px) {
			margin-bottom: 2.4rem;
			font-size: 15rem;
			line-height: 15rem;
		}

		@media (min-width: 1440px) {
			margin-bottom: 2.4rem;
			font-size: 15rem;
			line-height: 17.2rem;
			text-align: left;
		}
	}
`;

const ExploreAnchorBtn = styled(Link)`
	display: block;
	width: 15rem;
	height: 15rem;
	border-radius: 50%;
	background-color: var(--white);
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--black);
	font-size: 2rem;
	line-height: 2.3rem;
	text-align: center;
	letter-spacing: 1.25px;
	/* margin-bottom: 4.8rem; */

	@media (min-width: 768px) {
		width: 24.2rem;
		height: 24.2rem;
		font-size: 3.2rem;
		line-height: 3.7rem;
		letter-spacing: 2px;
	}

	@media (min-width: 1440px) {
		max-width: 27.4rem;
		max-height: 27.4rem;
		font-size: 3.2rem;
		line-height: 3.7rem;
		letter-spacing: 2px;
		margin-bottom: 0;
	}

	:visited,
	:link {
		text-decoration: none;
	}
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (min-width: 1440px) {
		align-items: flex-start;
		max-width: 48rem;
	}
`;

export default function Home() {
	const setIsSelected = Store((state) => state.setIsSelected);

	return (
		<Container>
			<TextWrapper>
				<p>SO, YOU WANT TO TRAVEL TO</p>
				<h1>SPACE</h1>
				<p>
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</p>
			</TextWrapper>

			<ExploreAnchorBtn href="/destination" onClick={() => setIsSelected(1)}>
				EXPLORE
			</ExploreAnchorBtn>
		</Container>
	);
}
