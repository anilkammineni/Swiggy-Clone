import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../components/RestaurantMenu";
import Header from "../components/Header";
import Cart from "../components/Cart"
import Mock_Data from "../utils/mocks/mockRestaurantMenu.json";
import { Provider } from "react-redux";
import appStore from "../utils/redux/appStore";
import "@testing-library/jest-dom";
import {
	UserContext,
	UserContextProvider,
} from "../utils/context-api/UserContext";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => {
			return Promise.resolve(Mock_Data);
		},
	});
});

it("Should render Restaurant Menu Component", async () => {
	await act(() =>
		render(
			<BrowserRouter>
				<Provider store={appStore}>
					<UserContextProvider>
						<Header />
                        <RestaurantMenu />
                        <Cart />
					</UserContextProvider>
				</Provider>
			</BrowserRouter>
		)
	);

	const addButton = screen.getAllByText("Add");

	fireEvent.click(addButton[0]);

	const removeOneItem = screen.getByTestId("removeItem");
	const addOneItem = screen.getByTestId("addItem");

	expect(removeOneItem).toBeInTheDocument();
    expect(addOneItem).toBeInTheDocument();
    
    fireEvent.click(addOneItem);

    const cartItems = screen.getByRole("link", { name: "Cart - (2 Items)"});
    expect(cartItems).toBeInTheDocument();

    fireEvent.click(cartItems);

    const clearCart = screen.getByRole("button", { name: "Clear Cart" })
    expect(clearCart).toBeInTheDocument();

    fireEvent.click(clearCart);

    const cartZeroItems = screen.getByText("Cart - (0 Items)")
    expect(cartZeroItems).toBeInTheDocument();
    
});
