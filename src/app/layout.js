"use client";

import { GlobalStyle } from "@/styles/globalStyle";
import StyledComponentsRegistry from "./lib/registry";
import Header from "@/components/Header";
import styled from "styled-components";
import OverlayMenu from "@/components/OverlayMenu";

const LayoutContainer = styled.div`
	padding-inline: 2.4rem;
	padding-top: 2.4rem;
	background-color: var(--black);
	min-height: 100vh;
	background-image: url("assets/home/background-home-mobile.jpg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	@media (min-width: 768px) {
		padding-inline: 0;
		padding-top: 0;
	}
`;

export default function RootLayout({ children }) {
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
						<OverlayMenu />
					</LayoutContainer>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
