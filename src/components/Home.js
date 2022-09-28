import "../styles/Home.css";
import Nav from "./Nav";
import car from "../images/car_main.jpeg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Nav />
      <div className="main">
        <img src={car} />
        <div>
          <h1>Your Favorite Vehicles All in One Place</h1>
          <p>Best Quality, Best Detail, Best Performance</p>
          <Link to="/shop">
            <button>Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
