import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react"
import Header from "../components/Header"
import Body from "../components/Body"
import About from "../components/About"
import { BrowserRouter, json } from "react-router-dom"
import { UserContextProvider } from "../utils/context-api/UserContext"
import { Provider } from "react-redux"
import appStore from "../utils/redux/appStore"
import MockData from "../utils/mocks/mockRestaurantList.json";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MockData);
        }
    })
})

it("Should update user name in Header and About Us Component when entered in Body Component", async () => {

    await act(() =>
			render(
				<BrowserRouter>
					<UserContextProvider>
						<Provider store={appStore}>
							<Header />
							<Body />
							<About />
						</Provider>
					</UserContextProvider>
				</BrowserRouter>
			)
    );
    
    const userNameTextBox = screen.getByTestId("userName");

    expect(userNameTextBox).toBeInTheDocument();

    fireEvent.change(userNameTextBox, {
        target: {
            value: "kammineni"
        }
    });

    const userNameInHeader = screen.getByTestId("headerUser");

    expect(userNameInHeader).toBeInTheDocument();

    const aboutUsButton = screen.getByRole("link", { name: "About us" });

    expect(aboutUsButton).toBeInTheDocument();

    fireEvent.click(aboutUsButton);

    const updateUserInAboutUs = screen.getByTestId("aboutUsUser");

    expect(updateUserInAboutUs).toBeInTheDocument();

})