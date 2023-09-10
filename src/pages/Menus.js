import React from "react";
import { formatNumber } from "../helpers/formatNumbers";
import Categories from "../components/Categories";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const products = [
  {
    id: 17634,
    image:
      "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/7/31/jxkhbinzh3g7ygsbyxd4q3_product_list.jpg",
    name: "2 For 39 Cheeseburger",
    price: 39545,
    discount_price: 72272,
  },
  {
    id: 17633,
    image:
      "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/7/31/mafyt2xshtkyx4wsxzsvac_product_list.jpg",
    name: "2 For 39 Cheeseburger + Mozzarella Cheeseburger",
    price: 39545,
    discount_price: 72272,
  },
  {
    id: 17637,
    image:
      "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/7/31/meqw3vqwfjlhupsvpxdfyg_product_list.jpg",
    name: "2 For 39 Cheeseburger + Royal Chicken Burger",
    price: 39545,
    discount_price: 72272,
  },
  {
    id: 17640,
    image:
      "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/7/31/s6udprbjbmkht6jqumywk4_product_list.jpg",
    name: "2 For 39 Cheese Whopper® Jr",
    price: 39545,
    discount_price: 72272,
  },
];

const Menus = () => {
  const params = useParams();

  const { menu } = params;

  return (
    <>
      <div className="bg-image">
        <div className="container-content">
          <div className="row py-4 gx-5">
            <div className="col-3">
              <Categories />
            </div>
            <div className="col-9">
              <div className="row">
                {products.map((item) => (
                  <Link
                    to={`/products/${menu}/${item.id}`}
                    className="col-md-6 mb-3"
                    key={`menu-${item.id}`}
                  >
                    <div className="product-home-card">
                      <img
                        src={item.image}
                        alt={item.name}
                        title={item.name}
                        className="d-block w-100"
                      />
                      <div className="pt-3">
                        <div className="text-2xl color-dark font-regular">
                          {item.name}
                        </div>
                        <div className="font-regular fw-bold">
                          <span
                            className={
                              item.discount_price > 0
                                ? "color-discount"
                                : "color-dark"
                            }
                          >
                            {formatNumber(item.price)}
                          </span>{" "}
                          {item.discount_price > 0 && (
                            <small className="ms-1 color-dark text-decoration-line-through opacity-50">
                              {formatNumber(item.discount_price)}
                            </small>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menus;
