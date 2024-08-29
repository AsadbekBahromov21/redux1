import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Layout from "./layout/Layout";
import Wishlist from "./pages/wishlist/wishlist";
import Cart from "./pages/cart/cart";
import Auth from "./pages/auth/auth";
import Login from "./pages/login/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Auth />}>
            <Route path="" element={<Home />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Route>{" "}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
