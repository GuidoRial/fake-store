import React from "react";

const Shop = ({ productItems, handleAddProduct }) => {
    return (
        <div className="products">
            {productItems.map((productItem) => (
                //Never forget, it's key={}, not id={}, React won't stop screaming it at you if you forget
                <div className="card" key={productItem.id}>
                    <img
                        className="product-image"
                        src={productItem.image}
                        alt={productItem.name}
                    />
                    <div className="product-name">
                        <h3>{productItem.name}</h3>
                    </div>
                    <div className="product-price">
                        <h4>${productItem.price}</h4>
                    </div>
                    <div>
                        <button
                            className="add-to-cart"
                            onClick={() => handleAddProduct(productItem)}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Shop;
