import React from "react";

const ShoppingCart = ({
    cartItems,
    handleAddProduct,
    handleRemoveProduct,
}) => {
    const totalPrice = cartItems.reduce(
        (price, item) => price + item.quantity * item.price,
        0
    );
    return (
        <div className="cart-items">
            <div className="cart-items-header">Shopping Cart</div>
            {cartItems.length === 0 && (
                <div className="cart-items-empty">
                    There are no items in the cart
                </div>
            )}
            <div>
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item-list">
                        <img
                            className="cart-items-image"
                            src={item.image}
                            alt={item.name}
                        />
                        <div className="cart-item-name">{item.name}</div>
                        <div className="cart-item-function">
                            <button
                                className="cart-items-add"
                                onClick={() => handleAddProduct(item)}
                            >
                                +
                            </button>
                            <button
                                className="cart-items-remove"
                                onClick={() => handleRemoveProduct(item)}
                            >
                                -
                            </button>
                        </div>
                        <div className="cart-items-price">
                            {item.quantity} * {item.price}
                        </div>
                    </div>
                ))}
            </div>

            <div className="cart-items-total-price-name">
                Total price:
                <div className="cart-items-total-price">${totalPrice}</div>
            </div>
        </div>
    );
};

export default ShoppingCart;
