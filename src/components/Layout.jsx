import React from "react";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="background">
      <div className="content">{children}</div>
    </div>
  );
}

export default Layout;
