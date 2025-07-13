import { render } from "@testing-library/react"
import {BrowserRouter, RouterProvider} from "react-router"
import Header from "../components/Header"
import { Provider } from "react-redux";
import appStore from "../utils/redux/appStore";


it("Should load Header Component with a login button", () => {

    render(
			<RouterProvider>
				<Provider store={appStore}>
					<Header />
				</Provider>
			</RouterProvider>
		);

})