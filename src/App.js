import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
//import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import {
	Link,
	createBrowserRouter,
	RouterProvider,
	Outlet,
} from "react-router-dom";

import { Provider } from "react-redux";

// Lazy loading so we shouldn't import components
//mport About from "./components/About";
//import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext, { UserContextProvider } from "./utils/context-api/UserContext";
import appStore from "./utils/redux/appStore";
import Cart from "./components/Cart";
import app from "./utils/firebase";

const AppLayout = () => {

  return (
    <Provider store={appStore}>
      <UserContextProvider>
        <div className="App">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContextProvider>
    </Provider>
  );
};

const Contact = lazy(() => import("./components/Contact"));
const About = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);