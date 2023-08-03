import React, { Component } from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


// component Compositions
const Applayout = () => {
return <div className="app">
    <Header />
</div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);

// time 18.34 seesion 3 rd
 