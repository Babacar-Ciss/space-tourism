"use client";

import { GlobalStyle } from "@/styles/globalStyle";
import StyledComponentsRegistry from "./lib/registry";
import Header from "@/components/Header";
import styled from "styled-components";
import OverlayMenu from "@/components/OverlayMenu";
import Store from "@/store";

const LayoutContainer = styled.div`
	padding-inline: 2.4rem;
	padding-top: 2.4rem;
	background-color: var(--black);
	min-height: 100vh;
	background-image: url(${({ routeName }) =>
		`assets/${routeName}/background-${routeName}-mobile.jpg`});

	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	@media (min-width: 768px) {
		padding-inline: 0;
		padding-top: 0;

		background-image: url(${({ routeName }) =>
			`assets/${routeName}/background-${routeName}-tablet.jpg`});
	}

	@media (min-width: 1440px) {
		padding-top: 4rem;
		background-image: url(${({ routeName }) =>
			`assets/${routeName}/background-${routeName}-desktop.jpg`});
	}
`;

export default function RootLayout({ children }) {
	const isHamburgerButtonClicked = Store(
		(state) => state.isHamburgerButtonClicked
	);
	const isSelected = Store((state) => state.isSelected);
	const closeMenuSideNavHandler = Store(
		(state) => state.closeMenuSideNavHandler
	);

	const SelectBackgroundBasedOnRoutesHandler = (index) => {
		switch (index) {
			case 0: {
				return "home";
			}
			case 1: {
				return "destination";
			}
			case 2: {
				return "crew";
			}
			case 3: {
				return "technology";
			}
		}
	};

	return (
		<html lang="en">
			<head />
			<body>
				<StyledComponentsRegistry>
					<GlobalStyle />
					<LayoutContainer
						routeName={SelectBackgroundBasedOnRoutesHandler(isSelected)}
						// onClick={() => closeMenuSideNavHandler()}
					>
						<Header />
						{children}
						{isHamburgerButtonClicked && <OverlayMenu />}
					</LayoutContainer>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
