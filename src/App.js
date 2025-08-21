import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // Importing Header component
import Footer from "./components/Footer";
import Body from "./components/Body"; // Importing Body component
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact"; // Importing Contact component
import Error from "./components/Error"; // Importing Error component
import RestaurantMenu from "./components/RestaurantMenu"; // Importing RestaurantMenu component

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

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
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")); //creating a root element

root.render(<RouterProvider router={appRouter} />); //rendering react component
