import React from "react";

const ShoppingCart = ({ cartItems, handleAddProducts }) => {
    return (
        <div className="cart-items">
            {cartItems.length === 0 && (
                <div className="cart-items-empty">
                    There are no items in the cart
                </div>
            )}
            <div>
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item-list">
                        <img
                            className="cart-item-image"
                            src={item.image}
                            alt={item.name}
                        />
                        <div className="cart-item-name">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShoppingCart;
