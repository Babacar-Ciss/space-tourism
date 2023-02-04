import { create } from "zustand";

const Store = create((set) => ({
	isHamburgerButtonClicked: false,
	isHamburgerButtonClickedHandler: () =>
		set((state) => ({
			isHamburgerButtonClicked: !state.isHamburgerButtonClicked,
		})),
	isSelected: 0,
	setIsSelected: (index) => set({ isSelected: index }),
}));

export default Store;
