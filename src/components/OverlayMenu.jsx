import styled from "styled-components";
import Store from "store";
import Image from "next/image";
import MenuList from "./MenuList";

const OverLayMenuStyle = styled.div`
	min-width: 25.4rem;
	height: 100%;
	position: absolute;
	top: 0;
	right: 0;
	background: rgba(255, 255, 255, 0.04);
	backdrop-filter: blur(40.7742px);
	padding-top: 3.4rem;
	padding-left: 3.2rem;
	display: flex;
	flex-direction: column;
`;

const CloseIcon = styled(Image)`
	margin-right: 2.65rem;
	margin-left: auto;
	margin-bottom: 6.5rem;
	cursor: pointer;
`;

const ListContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const OverlayMenu = () => {
	const isHamburgerButtonClickedHandler = Store(
		(state) => state.isHamburgerButtonClickedHandler
	);

	return (
		<OverLayMenuStyle>
			<CloseIcon
				src="assets/shared/icon-close.svg"
				width="19"
				height="19"
				alt="close logo"
				onClick={() => isHamburgerButtonClickedHandler()}
			/>
			<ListContainer>
				<MenuList />
			</ListContainer>
		</OverLayMenuStyle>
	);
};

export default OverlayMenu;
