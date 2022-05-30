import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/browse">Browse</Link>
        <Link to="/words">Words</Link>
      </header>
    </>
  );
};

export default Header;
