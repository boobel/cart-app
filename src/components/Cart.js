import Nav from "./Nav";
import Footer from "./Footer";
import "../styles/Cart.css";

const CartContent = (props) => {
  return (
    <div>
      <Nav />
      <div className="cart">
        {props.cart.map((item) => {
          return (
            <div id="cartItem">
              <img src={item.img} id="carImg" />
              <h3>{item.brand}</h3>
              <div id="itemAmount">
                <button className="amountBtn">-</button>
                <span>{item.amount}</span>
                <button className="amountBtn">+</button>
              </div>
              <span>
                $
                {String(item.priceInt * item.amount).replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ","
                )}
              </span>
              <button className="amountBtn">x</button>
            </div>
          );
        })}
        <span id="itemTotal">Total:</span>
        <button>Finalize Purchase</button>
      </div>
      <Footer />
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
          <p>Your Cart is Empty</p>
        </div>
      ) : (
        <CartContent cart={props.cart} />
      )}
    </div>
  );
};

export default Cart;
