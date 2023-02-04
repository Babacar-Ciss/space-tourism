import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Store from "store";
import MenuList from "./MenuList";

const HeaderStyle = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;

	:active,
	:focus {
		outline: none;
	}
`;

const ImageLogoMobile = styled(Image)`
	@media (min-width: 768px) {
		align-self: flex-end;
		margin-top: 2.4rem;
		margin-left: 3.9rem;
	}

	@media (min-width: 768px) {
		display: none;
	}
`;

const ImageLogoTablet = styled(Image)`
	display: none;

	@media (min-width: 768px) {
		display: block;
		margin-left: 3.9rem;
	}
`;

const HamburgerIcon = styled(Image)`
	cursor: pointer;

	@media (min-width: 768px) {
		display: none;
	}
`;

const MenuContainer = styled.div`
	display: none;

	@media (min-width: 768px) {
		display: flex;
		background: rgba(255, 255, 255, 0.04);
		backdrop-filter: blur(40.7742px);
	}
`;

const LinePattern = styled.div`
	display: none;

	@media (min-width: 1440px) {
		display: block;
		min-width: calc(34%);
		height: 1px;
		background-color: var(--white);
		opacity: 0.25;
		margin-right: -15rem;
		z-index: 2;
	}
`;

const Header = () => {
	const isHamburgerButtonClickedHandler = Store(
		(state) => state.isHamburgerButtonClickedHandler
	);

	return (
		<HeaderStyle>
			<Link href="/">
				{/* Logo image for phone screen */}
				<ImageLogoMobile
					src="assets/shared/logo.svg"
					alt="logo"
					width="40"
					height="40"
				/>

				{/* Logo image for tablet screen */}
				<ImageLogoTablet
					src="/assets/shared/logo.svg"
					alt="logo"
					width="48"
					height="48"
				/>
			</Link>

			<LinePattern />

			{/* Logo image for phone screen */}
			<HamburgerIcon
				src="assets/shared/icon-hamburger.svg"
				alt="logo"
				width="24"
				height="21"
				onClick={() => isHamburgerButtonClickedHandler()}
			/>

			<MenuContainer>
				<MenuList />
			</MenuContainer>
		</HeaderStyle>
	);
};

export default Header;
