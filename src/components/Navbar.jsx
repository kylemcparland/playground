import React from "react";
import Logo from "./Logo";
import Links from "./Links";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />
      <Links />
    </div>
  );
};

export default Navbar;
