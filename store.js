import { create } from "zustand";

const Store = create((set) => ({
	isHamburgerButtonClicked: false,
	isHamburgerButtonClickedHandler: () =>
		set((state) => ({
			isHamburgerButtonClicked: !state.isHamburgerButtonClicked,
		})),
	closeMenuSideNavHandler: () => set({ isHamburgerButtonClicked: false }),

	isSelected: 0,
	setIsSelected: (index) => set({ isSelected: index }),

	selectedPlanet: "moon",
	setSelectedPlanet: (activePlanet) => set({ selectedPlanet: activePlanet }),
}));

export default Store;
