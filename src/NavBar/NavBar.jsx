import React from "react";
import {  Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import './nav-bar.css'

const NavBar = () => {

    return(
        <nav className="nav-bar">
            <ul className="nav-items">
                <li className="nav-item-list"><Link to="/">Home</Link></li>
                <li className="nav-item-list"><Link  to="/all-products">All products</Link></li>
                <li className="nav-item-list"><Link  to="/about-us">About us</Link></li>
                <li className="nav-item-list"><Link  to="/contact-us">Contact us</Link></li>
            </ul>
            <div className="logo">
                <Link to="/">
                    <img src="src/assets/FREEWATTLOGOSMALL.png" />
                </Link>
            </div>
            <ul  className="nav-items">
                <li className="nav-item-list"><Link to="/search"><FaSearch />Search</Link></li>
                <li className="nav-item-list"><Link to="/account" ><CgProfile />Account</Link></li>
                <li className="nav-item-list"><Link to="/wishes" ><FaRegHeart />Wishlist</Link></li>
                <li className="nav-item-list"><Link to="/cart" ><IoCartOutline />Cart</Link></li>
            </ul>
        </nav>
    );
}
export default NavBar
