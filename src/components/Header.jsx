import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Store from "store";

const HeaderStyle = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const HamburgerIcon = styled(Image)`
	cursor: pointer;
`;

const Header = () => {
	const isHamburgerButtonClickedHandler = Store(
		(state) => state.isHamburgerButtonClickedHandler
	);

	const isHamburgerButtonClicked = Store(
		(state) => state.isHamburgerButtonClicked
	);

	return (
		<HeaderStyle>
			<Link href="/">
				<Image src="assets/shared/logo.svg" alt="logo" width="40" height="40" />
			</Link>

			<HamburgerIcon
				src="assets/shared/icon-hamburger.svg"
				alt="logo"
				width="24"
				height="21"
				onClick={() => isHamburgerButtonClickedHandler()}
			/>
		</HeaderStyle>
	);
};

export default Header;
