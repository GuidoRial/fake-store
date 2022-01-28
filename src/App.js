import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Home from "./components/Home";
import ShoppingCart from "./components/ShoppingCart";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/shop" element={<Shop />}></Route>
                    <Route
                        path="/shoppingcart"
                        element={<ShoppingCart />}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
