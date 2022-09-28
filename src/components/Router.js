import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Cart from "./Cart";
import Home from "./Home";
import Shop from "./Shop";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
