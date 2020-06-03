import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
    return (
        <div className="nav">
            <div className="navbar">
                <ul className="navbarMenu">
                    <li><NavLink to="/post">News</NavLink></li>
                    <li><NavLink to="/about-us">CLOGSAG Application Form</NavLink></li>
                    <li><NavLink to="/contact-us">Tier 2 and 3 Forms</NavLink></li>
                    <li><NavLink to="#">Contact Us</NavLink></li>
                    <li><NavLink to="#">Client Portal</NavLink></li>
                    <li><NavLink to="#">Gallery</NavLink></li>
                </ul>
            </div>

        </div>
    )

}

export default Navbar;