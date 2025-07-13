import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import { UserContextProvider } from "../utils/context-api/UserContext";
import MockData from "../utils/mocks/mockRestaurantList.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => {
			return Promise.resolve(MockData);
		},
	});
});

it("Should Search Res List for burger text input", async () => {
	await act(() =>
		render(
			<BrowserRouter>
				<UserContextProvider>
					<Body />
				</UserContextProvider>
			</BrowserRouter>
		)
	);
	const cardsBeforeSearch = screen.getAllByTestId("resCard");

	expect(cardsBeforeSearch.length).toBe(102);

	const searchButton = screen.getByRole("button", { name: "Search" });

	const inputBox = screen.getByTestId("searchInput");

	fireEvent.change(inputBox, {
		target: {
			value: "burger",
		},
	});

	fireEvent.click(searchButton);

	// Screen Should load 2 cards since 2 has "burger" in the name
	const cardsAfterSearch = screen.getAllByTestId("resCard");

	expect(searchButton).toBeInTheDocument();
	expect(cardsAfterSearch.length).toBe(2);
});

it("Should filter top rated restaurants", async () => {
	await act(() =>
		render(
			<BrowserRouter>
				<UserContextProvider>
					<Body />
				</UserContextProvider>
			</BrowserRouter>
		)
    );
    
    const totalCardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(totalCardsBeforeFilter.length).toBe(102);

    const topRatedButton = screen.getByRole("button", { name: "Top Rated Restaurants" });

    expect(topRatedButton).toBeInTheDocument();

    fireEvent.click(topRatedButton);

    const topRatedRestaurants = screen.getAllByTestId("resCard");

    expect(topRatedRestaurants.length).toBe(48);
    
});
