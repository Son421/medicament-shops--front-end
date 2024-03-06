import { Route, Routes } from "react-router-dom";
import Shop from "../pages/shop/Shop";
import ShoppingCart from "../pages/shoppingCart/ShoppingCart";

export default () => (
    <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/cart" element={<ShoppingCart/>}/>
    </Routes>
);