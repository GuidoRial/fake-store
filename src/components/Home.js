import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const buttonStyle = {
        color: "white",
        textDecoration: "none",
    };
    return (
        <div className="home">
            <h1>A fake store for your fake needs</h1>
            <button className="go-to-shop-button">
                <Link style={buttonStyle} to="/shop" label="Shop">
                    GO TO SHOP
                </Link>
            </button>
        </div>
    );
};

export default Home;
