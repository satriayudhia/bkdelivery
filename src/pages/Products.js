import React, { useContext, useState } from "react";
import { formatNumber } from "../helpers/formatNumbers";
import Categories from "../components/Categories";
import Extras from "../components/Extras";
import { AppContext } from "../context/AppContext";
import { Helmet } from "react-helmet";

const productDetail = {
  id: 17634,
  name: "2 For 39 Cheeseburger",
  description: "2 Cheeseburger",
  image:
    "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/7/31/olqwqdixryiwehupvzf23j_product_details.jpg",
  price: 39545,
  discount_price: 72272,
  extras: [
    {
      id: 1,
      name: "Vanilla Sundae",
      image:
        "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/1/24/l2su3jcrupfrq5m6vwx26c_add_ons.jpg",
      price: 9545,
    },
    {
      id: 2,
      name: "Chocolate Sundae",
      image:
        "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/1/24/ugdtxgfmirdsrbypnuks5y_add_ons.jpg",
      price: 17272,
    },
    {
      id: 3,
      name: "Burger Patty",
      image:
        "https://media-order.bkdelivery.co.id/thumb/product_photo/2019/4/3/mwgvjmwunu5s95j5iygcnc_add_ons.jpg",
      price: 16364,
    },
    {
      id: 4,
      name: "King fusion Cookies and Cream",
      image:
        "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/2/7/cub8dy8xwugeg7ngpunk8e_add_ons.jpg",
      price: 12727,
    },
    {
      id: 5,
      name: "Double Choco Pie",
      image:
        "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/3/20/a6rdershku6eykcuienknv_add_ons.jpg",
      price: 12727,
    },
    {
      id: 6,
      name: "Milo Cookies & Cream",
      image:
        "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/3/20/mbxlukfsi9rixexddhamvk_add_ons.jpg",
      price: 12727,
    },
  ],
};

const Products = () => {
  const [state, dispatch] = useContext(AppContext);
  const [productCart, setProductCart] = useState({
    id: productDetail.id,
    name: productDetail.name,
    image: productDetail.image,
    qty: 1,
    extras: [],
    price: productDetail.price,
    discount_price: productDetail.discount_price,
    total_price: productDetail.price,
  });

  const addToCart = () => {
    let payload = state.carts;
    payload.push(productCart);
    dispatch({
      type: "SET_CART",
      payload: payload,
    });
  };

  const addQty = () => {
    setProductCart({ ...productCart, qty: productCart.qty + 1 });
  };

  const minQty = () => {
    setProductCart({ ...productCart, qty: productCart.qty - 1 });
  };

  const changeExtras = (operator, product) => {
    let currentExtras = productCart.extras;
    let totalPrice;
    let discountPrice;
    const find = currentExtras.find((item) => item.id === product.id);
    if (find) {
      const objIndex = currentExtras.findIndex((obj) => obj.id === product.id);
      if (operator === "add") {
        currentExtras[objIndex].qty = currentExtras[objIndex].qty + 1;
        totalPrice = productCart.total_price + product.price;
        discountPrice = productCart.discount_price + product.price;
      } else {
        if (currentExtras[objIndex].qty - 1 === 0) {
          currentExtras = currentExtras.filter(
            (item) => item.id !== product.id
          );

          totalPrice = productCart.total_price - product.price;
          discountPrice = productCart.discount_price - product.price;
        } else {
          totalPrice = productCart.total_price - product.price;
          discountPrice = productCart.discount_price - product.price;

          currentExtras[objIndex].qty = currentExtras[objIndex].qty - 1;
        }
      }
    } else {
      currentExtras.push(product);
      totalPrice = productCart.total_price + product.price;
      discountPrice = productCart.discount_price + product.price;
    }
    setProductCart({
      ...productCart,
      total_price: totalPrice,
      discount_price: discountPrice,
      extras: currentExtras,
    });
  };

  return (
    <>
      <Helmet>
        <title>{productDetail.name} - Burger King</title>
      </Helmet>

      <div className="bg-peach-2">
        <div className="container-content">
          <div className="row py-4 gx-5">
            <div className="col-3">
              <Categories />
            </div>
            <div className="col-9">
              <div className="product-home-card p-0 ps-4">
                <div className="row w-100 h-100">
                  <div className="col-8 border-right pe-4">
                    <h1 className="text-center color-dark font-regular text-3xl mt-4">
                      {productDetail.name}
                    </h1>
                    <div className="text-center color-black">
                      {productDetail.description}
                    </div>

                    <img
                      src={productDetail.image}
                      alt={productDetail.name}
                      title={productDetail.name}
                      className="d-block w-100 mt-3"
                    />

                    {productDetail.extras.length > 0 && (
                      <>
                        <div className="text-xl color-chocolate font-regular fw-bold mt-4 mb-2">
                          Add Extras
                        </div>

                        {productDetail.extras.map((item) => (
                          <Extras
                            key={item.id}
                            data={item}
                            changeExtras={changeExtras}
                          />
                        ))}
                      </>
                    )}
                  </div>
                  <div className="col-4 ps-4 pe-0">
                    <h1 className="color-discount font-regular text-2xl mt-4 mb-3">
                      {formatNumber(productCart.total_price)}{" "}
                      <small className="ms-1 text-sm color-dark text-decoration-line-through opacity-50">
                        {formatNumber(productCart.discount_price)}
                      </small>
                    </h1>

                    <table className="info">
                      <tbody>
                        <tr>
                          <th>ADD ONN</th>
                          <td className="ps-2">
                            {productCart.extras.length === 0 && "-"}
                            {productCart.extras.map((item) => (
                              <div key={item.id}>
                                {item.qty} {item.name}
                              </div>
                            ))}
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="border rounded d-flex justify-content-between align-items-center py-1 px-4">
                      <div
                        className="text-xl font-bold color-primary cursor-pointer"
                        onClick={minQty}
                      >
                        -
                      </div>
                      <div className="font-regular">{productCart.qty}</div>
                      <div
                        className="text-xl font-bold color-primary cursor-pointer"
                        onClick={addQty}
                      >
                        +
                      </div>
                    </div>

                    <button
                      className="btn btn-primary w-100 mt-4 font-regular"
                      onClick={addToCart}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
