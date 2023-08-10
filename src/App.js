import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Body from "./Home/Body";
import Header from "./components/Navigation/Header";
// component Compositions
const Applayout = () => {
  return (
    <div className="app">
      
        <Header />
        <Body />
    
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);

// time 18.34 seesion 3 rd
