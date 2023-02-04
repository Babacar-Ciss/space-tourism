import { create } from "zustand";

const Store = create((set) => ({
	isHamburgerButtonClicked: false,
	isHamburgerButtonClickedHandler: () =>
		set((state) => ({
			isHamburgerButtonClicked: !state.isHamburgerButtonClicked,
		})),
}));

export default Store;
