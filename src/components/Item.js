import "../styles/Shop.css";

const Item = (props) => {
  return (
    <div className="Item">
      <img src={props.img} id="carImg" />
      <h3>{props.brand}</h3>
      <span>Horse Power: {props.HP}</span>
      <span>Year: {props.year}</span>
      <span>{props.price}</span>
      <button>Add To Cart</button>
    </div>
  );
};

export default Item;
