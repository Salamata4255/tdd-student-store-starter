import * as React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <Logo />

        <div className="socials">
          <img src="./src/images/twitter.png" height="18" width="18" />
          <img src="./src/images/facebook.png" height="18" width="18" />
          <img src="./src/images/instagram.png" height="18" width="18" />
        </div>
        <div className="links">
          <Link style={{ textDecoration: "none" }} to="/home">
            Home{" "}
          </Link>
          <Link style={{ textDecoration: "none" }} to="/about">
            About Us
          </Link>
          <Link style={{ textDecoration: "none" }} to="/Contact">
            Contact Us
          </Link>
          <Link style={{ textDecoration: "none" }} to="/Buy">
            Buy Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
