import { Link } from "react-router-dom";

const Nav = () => {
  const Navstyle = {
    color: "white",
  };

  return (
    <nav className="navbar">
      <span className="storeName">Carrum</span>
      <ul className="links">
        <Link style={Navstyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={Navstyle} to="/shop">
          <li>Shop</li>
        </Link>
        <Link style={Navstyle} to="/about">
          <li>About Us</li>
        </Link>
        <Link style={Navstyle} to="/cart">
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
