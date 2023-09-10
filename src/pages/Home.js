import React from "react";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    image:
      "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/7/31/eqd9boqisvqpdifbcrjo7f_product_list.jpg",
    name: "Double Mantul",
    link: "double-mantul",
  },
  {
    id: 2,
    image:
      "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/6/3/bzilpvmecz3gmmngfan9vg_product_list.jpg",
    name: "King's Chicken [ Rasa Baru ]",
    link: "king-chicken",
  },
  {
    id: 3,
    image:
      "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/7/17/7vsqwgbwhohuthx5pb7bfp_product_list.jpg",
    name: "3-Cheese [ Limited Time ]",
    link: "3-cheese",
  },
  {
    id: 4,
    image:
      "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/3/15/znilxvdnwuyurvfmej3lft_product_list.jpg",
    name: "BK APP EXCLUSIVE",
    link: "bk-app-exclusive",
  },
  {
    id: 5,
    image:
      "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/3/15/kyhwcbzvlkeiqyjncprjjg_product_list.jpg",
    name: "Cheese Burger Favorit",
    link: "cheese-burger-favorit",
  },
  {
    id: 6,
    image:
      "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/8/7/mny8dmgkus2elbf73ytk7m_product_list.jpg",
    name: "Cheese Whopper®",
    link: "cheese-whooper",
  },
];

const Home = () => {
  return (
    <div className="bg-image">
      <Carousel />

      <div className="container-content py-5">
        <h1 className="font-bold text-center color-chocolate mb-5">
          Our Menus
        </h1>

        <div className="row gx-3">
          {data.map((item) => (
            <Link
              to={`/menus/${item.link}`}
              className="col-sm-6 col-md-4 mb-3"
              key={`menu-${item.id}`}
            >
              <div className="product-home-card">
                <img
                  src={item.image}
                  alt={item.name}
                  title={item.name}
                  className="d-block w-100"
                />
                <div className="row py-3">
                  <div className="col">
                    <div className="font-bold text-xl color-chocolate">
                      {item.name}
                    </div>
                  </div>
                  <div className="col">
                    <button className="btn btn-primary w-100 font-bold">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
