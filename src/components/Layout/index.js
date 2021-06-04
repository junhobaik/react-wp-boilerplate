import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Link to="/">
        <h1>title</h1>
      </Link>
      {children}
    </div>
  );
};

export default Layout;
