import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
