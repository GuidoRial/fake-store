import React from "react";
import Home from "./Home";
import Shop from "./Shop";
import { Link } from "react-router-dom";
const NavBar = () => {
    const navStyle = {
        color: "white",
        textDecoration: "none",
    }
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <li>
                    <Link style={navStyle} to="/" label="Home">
                        Home
                    </Link>
                </li>

                <li>
                    <Link style={navStyle} to="/shop" label="Shop">
                        Shop
                    </Link>
                </li>
                <li>
                    <Link style={navStyle} to="/shoppingcart" label="Shoppingcart">
                        Cart
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
