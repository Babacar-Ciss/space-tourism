import styled from "styled-components";
import Link from "next/link";
import { Barlow_Condensed } from "@next/font/google";
import Store from "store";

const LIST_ITEMS = [
	{ number: "00", title: "home", path: "/" },
	{ number: "01", title: "destination", path: "/destination" },
	{ number: "02", title: "crew", path: "/crew" },
	{ number: "03", title: "technology", path: "/technology" },
];

const barlowCondensed = Barlow_Condensed({
	weight: ["400", "700"],
	subsets: ["latin"],
});

const LinkMenu = styled(Link)`
	font-family: ${barlowCondensed.style.fontFamily};
	font-size: 1.6rem;
	line-height: 1.9rem;
	letter-spacing: 2.7px;
	text-transform: uppercase;

	:focus,
	:active {
		outline: none;
	}

	:link,
	:visited {
		text-decoration: none;
		color: var(--white);
	}
`;

const Wrapper = styled.div`
	display: flex;
	margin-bottom: 3.2rem;
	padding: 0.6rem 0;
	border-right: ${({ isSelected }) =>
		isSelected ? "4px solid var(--white)" : "0"};
`;

const NumberMenu = styled.span`
	font-weight: 700;
	margin-right: 1.1rem;
`;

const TitleMenu = styled.span`
	font-size: 1.6rem;
`;

const MenuList = () => {
	const isSelected = Store((state) => state.isSelected);
	const setIsSelected = Store((state) => state.setIsSelected);

	const toggleIsSelectedHandler = (index) => {
		if (index === isSelected) {
			setIsSelected(null);
		}
		setIsSelected(index);
	};

	return (
		<>
			{LIST_ITEMS.map((item, index) => (
				<LinkMenu
					key={index}
					href={item.path}
					onClick={() => {
						toggleIsSelectedHandler(index);
					}}
				>
					<Wrapper isSelected={isSelected === index}>
						<NumberMenu>{item.number}</NumberMenu>
						<TitleMenu>{item.title}</TitleMenu>
					</Wrapper>
				</LinkMenu>
			))}
		</>
	);
};

export default MenuList;
