import React from "react";

const ShoppingCart = ({
    cartItems,
    handleAddProduct,
    handleRemoveProduct,
    emptyCart,
}) => {
    const totalPrice = cartItems.reduce(
        (price, item) => price + item.quantity * item.price,
        0
    );

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            alert("The cart is empty");
        } else {
            alert("Thank you for your purchase!");
        }
    };
    return (
        <div className="cart-items">
            <h2 className="cart-items-header">Shopping Cart</h2>
            <div className="empty-cart">
                {cartItems.length > 0 && (
                    <button className="empty-cart-button" onClick={emptyCart}>
                        Empty Cart
                    </button>
                )}
            </div>
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
                        <div>
                            {item.quantity} * {item.price}
                        </div>
                    </div>
                ))}
            </div>

            <div className="cart-items-total-price-name">
                Total price:
                <div className="cart-items-total-price">${totalPrice}</div>
                <button className="checkout-button" onClick={handleCheckout}>
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default ShoppingCart;
