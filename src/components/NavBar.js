import React from "react";

import { Link } from "react-router-dom";
const NavBar = ({ cartItems }) => {
    const amountOfItems = cartItems.reduce((amount, item) => {
        return amount + item.quantity;
    }, 0);

    const navStyle = {
        color: "white",
        textDecoration: "none",
    };
    return (
        <nav>
            <h3>FAKE STORE</h3>
            <ul className="nav-links">
                <li>
                    <Link style={navStyle} to="/" label="Home">
                        HOME
                    </Link>
                </li>

                <li>
                    <Link style={navStyle} to="/shop" label="Shop">
                        SHOP
                    </Link>
                </li>
                <li>
                    <Link
                        style={navStyle}
                        to="/shoppingcart"
                        label="Shoppingcart"
                    >
                        <i className="fas fa-shopping-cart">
                            {cartItems.length > 0 && (
                                <div className="amount-of-items">
                                    {amountOfItems}
                                </div>
                            )}
                        </i>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
