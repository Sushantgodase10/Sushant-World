
import { Provider  } from "react-redux";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Body from "./Home/Body";
import Header from "./components/Navigation/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./Home/Contact";
import About from "./Home/About";
import Error from "./Home/Error";
import RestaurantMenu from "./Home/RestaurantMenu";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import Cart from "./Home/Cart";
// component Compositions

// const About = React.lazy(() => import("/about"));

const Applayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Sushant Godase",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider  store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
    <div className="app">
        <Header />
        <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
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
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      }
      ,
      {
        path: "/cart",
        element: <Cart/>,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
