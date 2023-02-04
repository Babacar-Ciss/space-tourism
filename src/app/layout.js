"use client";

import { GlobalStyle } from "@/styles/globalStyle";
import StyledComponentsRegistry from "./lib/registry";
import Header from "@/components/Header";
import styled from "styled-components";
import OverlayMenu from "@/components/OverlayMenu";
import Store from "store";

const LayoutContainer = styled.div`
	position: relative;
	padding-inline: 2.4rem;
	padding-top: 2.4rem;
	background-color: var(--black);
	min-height: 100vh;
	background-image: url("assets/home/background-home-mobile.jpg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export default function RootLayout({ children }) {
	const isHamburgerButtonClicked = Store(
		(state) => state.isHamburgerButtonClicked
	);

	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>
				<StyledComponentsRegistry>
					<GlobalStyle />
					<LayoutContainer>
						<Header />
						{children}
						{isHamburgerButtonClicked && <OverlayMenu />}
					</LayoutContainer>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
