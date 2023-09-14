import { useState, useContext } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

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
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <div className="logo-container">
        <img className="w-36" src={LOGO_URL} />
      </div>
      <div className="flex items-csenter">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {OnlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart -({cartItems.length} items )</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              //   setBtnNameReact("Logout");
              btnNameReact === "login"
                ? setBtnNameReact("logout")
                : setBtnNameReact("login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
