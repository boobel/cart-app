import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Cart from "./Cart";
import Home from "./Home";
import Shop from "./Shop";
import { useState } from "react";
import uniqid from "uniqid";

const Router = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevArr) => [...prevArr, item]);
    console.log(cart);
  };

  const handleDelete = (id) => {
    let newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    console.log(cart);
  };

  const handleCart = (item) => {
    if (!cart.includes(item)) {
      addToCart(item);
      item.id = uniqid();
    } else {
      item.amount += 1;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/shop" element={<Shop handleCart={handleCart} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={
            <Cart cart={cart} setCart={setCart} handleDelete={handleDelete} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
