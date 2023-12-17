import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import "./nav-bar.css";

const NavBar = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResizer = () => setScreenSize(window.innerWidth); //update screen size
    window.addEventListener("resize", handleResizer); //update screen size whenever it resizer
    return () => window.addEventListener("resize", handleResizer); // Clean when it resisd for storage purposes
  }, []);

  return (
    <nav className="nav-bar">
      <ul className="nav-items">
        <li className="nav-item-list">
          <Link to="/all-products" className="nav-item-list-link">
            Products
          </Link>
        </li>
        <li className="nav-item-list">
          <Link to="/about-us" className="nav-item-list-link">
            About
          </Link>
        </li>
        <li className="nav-item-list">
          <Link to="/contact-us" className="nav-item-list-link">
            Contact
          </Link>
        </li>
      </ul>
      <Link to="/">
        <img className="logo" src="src/assets/freewatt.png" />
      </Link>
      <ul className="nav-items">
        <li className="nav-item-list">
          <Link to="/search" className="nav-item-list-link ">
            <FaSearch className="icon" />
            {screenSize > 900 ? "Search" : null}
          </Link>
        </li>
        <li className="nav-item-list">
          <Link to="/account" className="nav-item-list-link">
            <CgProfile className="icon" />
            {screenSize > 900 && "Account"}
          </Link>
        </li>
        <li className="nav-item-list">
          <Link to="/wishes" className="nav-item-list-link">
            <FaRegHeart className="icon" />
            {screenSize > 900 && "Wishlist"}
          </Link>
        </li>
        <li className="nav-item-list">
          <Link to="/cart" className="nav-item-list-link">
            <IoCartOutline className="icon" />
            {screenSize > 900 && "Cart"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
