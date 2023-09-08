import { Component, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

 // When is the useEffect call ? 
 // basically is called after every render of that Component
 // but because we have put dependency array changes the behavior of it render

// if no dependency array =>  useEffect is called on every render
// if dependency array is empty = [] => useEffect is called on initial render(just once)
// if dependency array id [btnNameReact] => called everytime btnNameReact is Updated
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
            //   setBtnNameReact("Logout");
            btnNameReact === "login"
            ? setBtnNameReact("logout")
            : setBtnNameReact("login")
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
