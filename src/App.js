import React from "react";
import * as React from 'react';

import ReactDOM from "react-dom/client";
import {ChakraProvider } from '@chakra-ui/react'
import Body from "./Home/Body";
import Header from "./components/Navigation/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./Home/Contact";
import About from "./Home/About";
import Error from "./Home/Error";
import RestaurantMenu from "./Home/RestaurantMenu";
// component Compositions

const Applayout = () => {
  return (
    <ChakraProvider>
      <Header />
    <Outlet/>
    </ChakraProvider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children:[
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
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      },
    ],
    errorElement: <Error/>,
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
