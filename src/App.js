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
        const productExist = cartItems.find((item) => item.id === product.id);
        if (productExist) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id
                        ? {
                              ...productExist,
                              quantity: productExist.quantity + 1,
                          }
                        : item
                )
            );
        } else {
          setCartItems([...cartItems, {...product, quantity: 1}])
        }
    };

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route
                        path="/shop"
                        element={<Shop productItems={productItems} handleAddProduct={handleAddProduct}/>}
                    ></Route>
                    <Route
                        path="/shoppingcart"
                        element={<ShoppingCart cartItems={cartItems} handleAddProduct={handleAddProduct}/>}
                    ></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
