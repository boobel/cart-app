import "../styles/Shop.css";

const Item = (props) => {
  return (
    <div className="Item">
      <img src={props.img} id="carImg" />
      <h3>{props.brand}</h3>
      <span>Horse Power: {props.HP}</span>
      <span>Year: {props.year}</span>
      <span>{props.price}</span>
      <button onClick={props.handleCart.bind(this, props.item)}>
        Add To Cart
      </button>
    </div>
  );
};

export default Item;
