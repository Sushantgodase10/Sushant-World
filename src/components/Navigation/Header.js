import { useState, useContext } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
import logo from "../img/Restaurant Logo.png";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const OnlineStatus = useOnlineStatus();
  // When is the useEffect call ?
  // basically is called after every render of that Component
  // but because we have put dependency array changes the behavior of it render

  // if no dependency array =>  useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render(just once)
  // if dependency array id [btnNameReact] => called everytime btnNameReact is Updated

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  // Subscrbing to the store using to Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    // <div className="flex justify-between bg-pink-50 shadow-lg">
    //   <div className="logo-container mx-10">
    //     <img className="w-36" src={logo} />
    //   </div>
    //   <div className="flex items-csenter">
    //     <ul className="flex p-4 m-4">
    //       <li className="px-4">Online Status: {OnlineStatus ? "✅" : "🔴"}</li>
    //       <li className="px-4  lock lg:flex">
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li className="px-4">
    //         <Link to="/about">About Us</Link>
    //       </li>
    //       <li className="px-4">
    //         <Link to="/contact">Contact</Link>
    //       </li>
    //       <li className="px-4 font-bold text-xl">
    //         <Link to="/cart">Cart -({cartItems.length} items )</Link>
    //       </li>
    //       <button
    //            className="py-3 text-base font-medium px-7 text-dark hover:text-primary"
    //         onClick={() => {
    //           //   setBtnNameReact("Logout");
    //           btnNameReact === "login"
    //             ? setBtnNameReact("logout")
    //             : setBtnNameReact("login");
    //         }}
    //       >
    //         {btnNameReact}
    //       </button>
    //       <li className="px-4 font-bold">{loggedInUser}</li>
    //     </ul>

    //   </div>

    // </div>

    <div className=" top-0 left-0 right-0  bg-pink-50 shadow-lg p-fix">
      <div className="container mx-auto px-2">
        <nav className="flex justify-between items-center py-2">
         
          <div className="logo-container">
            <img className=" mx-40 h- 25 w-20" src={logo} alt="Restaurant Logo" />
          </div>
          <div className="flex items-center space-x-2">
            <ul className="flex space-x-7 text-base font-medium text-dark hover:text-primary">
            <li className="px-4">Online Status: {OnlineStatus ? "✅" : "🔴"}</li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li className=" flex px-4">
                <Link to="/cart">
                  <span className="text-lg font-bold relative">
                    {/* Cart Icon */}
                    <FaShoppingCart className="inline-block mr-2" />
                    Cart
                    {/* Display the number of items in the cart */}
                    <span className="mx-1 -top-1 -right-1 bg-red-500 text-white px-2 py-1 rounded-full">
                      {cartItems.length}
                    </span>
                  </span>
                </Link>
              </li>
            </ul>
            <button
              className="py-2  text-base font-medium text-dark hover:text-primary"
              onClick={() => {
                setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
              }}
            >
              {btnNameReact}
            </button>
            <div className="font-bold p-1">{loggedInUser}</div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
