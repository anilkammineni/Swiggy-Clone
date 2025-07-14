import { render, screen } from "@testing-library/react"
import { act } from "react"
import { Provider } from "react-redux"
import { BrowserRouter, json } from "react-router-dom"
import { UserContextProvider } from "../utils/context-api/UserContext"
import Header from "../components/Header"
import appStore from "../utils/redux/appStore";
import Body from "../components/Body";
import MockData from "../utils/mocks/mockRestaurantList.json";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MockData);
        }
    })
})

it("Should display Online/Offline Status", async () => {
    await act(() => 
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <UserContextProvider>
                        <Header />
                        <Body />
                    </UserContextProvider>
                </Provider>
            </BrowserRouter>
        ))
    
    const onlineStatus = screen.getByText("Online Status: ✅");
    
    expect(onlineStatus).toBeInTheDocument();

    act(() => {
        window.dispatchEvent(new Event("offline"));
    })

    const offLineTextMsg = screen.getByRole("heading", { name: /offline!!/ })
    
    expect(offLineTextMsg).toBeInTheDocument();
})