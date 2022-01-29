import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Home from "./components/Home";
import ShoppingCart from "./components/ShoppingCart";
import data from "./components/Data";
import Footer from "./components/Footer";

function App() {
    const { productItems } = data;
    const [cartItems, setCartItems] = useState([]);

    const handleAddProduct = (product) => {
        let updatedProductList;

        if (getProductFromCart(product)) {
            updatedProductList = updateCartQuantity('add', product)
        } else {
            updatedProductList = [...cartItems, { ...product, quantity: 1 }];
        }

        setCartItems(updatedProductList)
    };

    const handleRemoveProduct = (product) => {
        let updatedProductList;

        if (getProductFromCart(product).quantity > 1) {
            updatedProductList = updateCartQuantity('subtract', product)
        } else {
            updatedProductList = cartItems.filter((item) => item.id !== product.id);
        }
        
        setCartItems(updatedProductList)
    };

    function getProductFromCart(product) {
        return cartItems.find((item) => item.id === product.id);
    }

    function updateCartQuantity(operation, product) {
        const indexOfProduct = cartItems.findIndex(item => item.id === product.id);
        const products = [...cartItems]

        if (operation == 'add') {
            products[indexOfProduct].quantity += 1;
        } else {
            products[indexOfProduct].quantity -= 1;
        }

        return products;
    }

        const emptyCart = () => {
            setCartItems([]);
        };

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar cartItems={cartItems} />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route
                        path="/shop"
                        element={
                            <Shop
                                productItems={productItems}
                                handleAddProduct={handleAddProduct}
                            />
                        }
                    ></Route>
                    <Route
                        path="/shopping-cart"
                        element={
                            <ShoppingCart
                                cartItems={cartItems}
                                handleAddProduct={handleAddProduct}
                                handleRemoveProduct={handleRemoveProduct}
                                emptyCart={emptyCart}
                            />
                        }
                    ></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
