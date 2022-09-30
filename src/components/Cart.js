import Nav from "./Nav";
import Footer from "./Footer";
import "../styles/Cart.css";
import { useReducer, useState } from "react";
import { Link } from "react-router-dom";

const CartContent = (props) => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  var total = 0;

  function handleClick() {
    forceUpdate();
  }
  return (
    <div>
      <Nav />
      <div className="cart">
        {props.cart.map((item) => {
          return (
            <div id="cartItem">
              <img src={item.img} id="carImg" />
              <h3 id="itemBrand">{item.brand}</h3>
              <div id="itemAmount">
                <button
                  className="amountBtn"
                  onClick={() => {
                    if (item.amount === 1) {
                      props.handleDelete(item.id);
                    } else if (item.amount > 0) {
                      item.amount--;
                    }
                    handleClick();
                  }}
                >
                  -
                </button>
                <span>{item.amount}</span>
                <button
                  className="amountBtn"
                  onClick={() => {
                    item.amount++;
                    handleClick();
                  }}
                >
                  +
                </button>
              </div>
              <span id="itemPrice">
                $
                {String(item.priceInt * item.amount).replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ","
                )}
              </span>
              <button
                className="cancelBtn"
                onClick={props.handleDelete.bind(this, item.id)}
              >
                x
              </button>
            </div>
          );
        })}
        <span id="itemTotal">
          {props.cart.forEach((element) => {
            total += element.priceInt * element.amount;
          })}
          Total: ${String(total).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
        <div className="cartButtons">
          <button className="cartButton">
            <Link to="/shop" style={{ textDecoration: "none", color: "black" }}>
              Continue shopping
            </Link>
          </button>
          <button className="cartButton">Finalize Purchase</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Empty = () => {
  return (
    <div className="cartEmpty">
      <span>Your Cart is Empty</span>
    </div>
  );
};

const Cart = (props) => {
  let isCartEmpty = props.cart.length === 0;

  return (
    <div>
      {isCartEmpty ? (
        <div>
          <Nav />
          <Empty />
        </div>
      ) : (
        <CartContent cart={props.cart} handleDelete={props.handleDelete} />
      )}
    </div>
  );
};

export default Cart;
