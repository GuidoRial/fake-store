import React from "react";

const Shop = ({ productItems, handleAddProduct }) => {
    return (
        <div className="products">
            {productItems.map((productItem) => (
                <div className="card" id={productItem.id}>
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
                        <button className="add-to-cart" onClick={() => handleAddProduct(productItem)}>Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Shop;
