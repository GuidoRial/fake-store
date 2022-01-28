import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import ShoppingCart from "./ShoppingCart";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shoppingcart" element={<ShoppingCart />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;
