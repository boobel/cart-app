import "../styles/Shop.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Item = (props) => {
  const notify = () => toast("Added to cart!");

  return (
    <div className="Item">
      <img src={props.img} id="carImg" />
      <h3>{props.brand}</h3>
      <span>Horse Power: {props.HP}</span>
      <span>Year: {props.year}</span>
      <span>{props.price}</span>
      <button
        onClick={() => {
          props.handleCart(props.item);
          notify();
        }}
      >
        Add To Cart
      </button>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Item;
