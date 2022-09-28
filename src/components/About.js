import Nav from "./Nav";
import map from "../images/map.png";
import "../styles/About.css";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <Nav />
      <div className="about">
        <div className="hours">
          <h2>Hours</h2>
          <span>Weekdays 8AM - 9PM</span>
          <span>Weekends 12PM - 6PM</span>
        </div>
        <div className="contact">
          <h2>Contact Us</h2>
          <span>Write us at carr@rum.com</span>
          <span>Call us at 123-456-789</span>
        </div>
        <div className="location">
          <h2>Find Us</h2>
          <span>Johnsons Bayou 2337 Sarah Drive</span>
          <img src={map} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
