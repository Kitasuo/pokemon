import React from "react";
import "./Layout.css";
import forest from "../assets/images/forest.png";

console.log(forest);

function Layout({ children }) {
  return (
    <>
      <div className="background">
        <img src={forest} alt="forest" className="forestImg" />
      </div>
      <div className="content">{children}</div>
    </>
  );
}

export default Layout;
