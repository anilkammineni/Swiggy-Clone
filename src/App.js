import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

// Lazy loading so we shouldn't import components
//mport About from "./components/About"; 
//import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";


const AppLayout = () => {

  const [userName, setUserName] = useState();

  useEffect(() => {
    
    // Authentication logic;

    const user = {
      loggedInUser: "Anil Kumar"
    }

    setUserName(user.loggedInUser);
  }, [])

  return (
    // Updating context API and making it available to all components by wrapping whole application inside Provider
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

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
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);