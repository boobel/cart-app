import Item from "./Item";
import Nav from "./Nav";
import car1 from "../images/car_shop_1.jpeg";
import car2 from "../images/car_shop_2.webp";
import car3 from "../images/car_shop_3.jpeg";
import car4 from "../images/car_shop_4.jpeg";
import car5 from "../images/car_shop_5.jpeg";
import car6 from "../images/car_shop_6.jpeg";
import Footer from "./Footer";

const Items = [
  {
    brand: "Nissan S15",
    year: "2001",
    img: car1,
    HP: "238",
    price: "$25,000",
  },
  {
    brand: "Mercedes Benz G Class",
    year: "2020",
    img: car2,
    HP: "172",
    price: "$324,000",
  },
  {
    brand: "MacLaren P1",
    year: "2017",
    img: car3,
    HP: "325",
    price: "$1,200,000",
  },
  {
    brand: "Lamboginhi Huracan",
    year: "2022",
    img: car4,
    HP: "276",
    price: "$760,000",
  },
  {
    brand: "Porsche 911",
    year: "1988",
    img: car5,
    HP: "238",
    price: "$250,000",
  },
  {
    brand: "Aston Martin DB9",
    year: "2014",
    img: car6,
    HP: "276",
    price: "$545,000",
  },
];

const Shop = () => {
  return (
    <div>
      <Nav />
      <div className="Items">
        {Items.map((item) => {
          return (
            <Item
              brand={item.brand}
              year={item.year}
              HP={item.HP}
              price={item.price}
              img={item.img}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
