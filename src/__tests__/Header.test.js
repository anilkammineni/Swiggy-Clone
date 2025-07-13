import { fireEvent, render, screen } from "@testing-library/react"
import {BrowserRouter} from "react-router-dom"
import Header from "../components/Header"
import { Provider } from "react-redux";
import appStore from "../utils/redux/appStore";
import { UserContextProvider } from "../utils/context-api/UserContext";
import "@testing-library/jest-dom"


it("Should render Header Component with a login button", () => {

    render(
        <BrowserRouter>
            <UserContextProvider>
				<Provider store={appStore}>
					<Header />
                </Provider>
            </UserContextProvider>
			</BrowserRouter>
    );
    
    const loginButton = screen.getByRole("button", { name: "Login" });
    
    //const login = await screen.findByRole("button");

    //const loginButton = screen.getByText("Login");

    expect(loginButton).toBeInTheDocument();
})

it("Should render Header Component with a Cart items 0 ", () => {

    render(
			<BrowserRouter>
				<UserContextProvider>
					<Provider store={appStore}>
						<Header />
					</Provider>
				</UserContextProvider>
			</BrowserRouter>
    );
    
    const cartItem = screen.getByText("Cart - (0 Items)");

    expect(cartItem).toBeInTheDocument();
})

it("Should change Login Button to Logout on Click and display UserName", () => {
    render(
			<BrowserRouter>
				<UserContextProvider>
					<Provider store={appStore}>
						<Header />
					</Provider>
				</UserContextProvider>
			</BrowserRouter>
    );
    
    const loginButton = screen.getByRole("button", { name: "Login" });

    expect(loginButton).toBeInTheDocument();

    // Simulate Click Button

    const isClicked = fireEvent.click(loginButton);

    if (isClicked) {
        const logoutButton = screen.getByRole("button", { name: "Logout" });
		const userName = screen.getByText("Anil Kumar");
        
        expect(logoutButton).toBeInTheDocument();
        expect(userName).toBeInTheDocument();
    }
})