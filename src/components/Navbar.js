import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import Alert from "./Alert";

const Navbar = () => {
  const [state, dispatch] = useContext(AppContext);

  const { carts } = state;

  return (
    <>
      <div className="container-fluid navbar-bg">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center gap-5 position-relative">
              <Link to="/" className="navbar-logo">
                <img
                  src="https://bkdelivery.co.id/static/website/img/logo_2022_x2.6bb6d972f0a5.png"
                  alt="burger king"
                />
              </Link>
              <Link to="/menus">
                <div className="color-orange text-sm line-height-sm font-regular">
                  Delivery
                </div>
                <div className="text-white text-2xl font-bold">Order</div>
              </Link>
              <Link to="/">
                <div className="color-orange text-sm line-height-sm font-regular">
                  Get Fresh
                </div>
                <div className="text-white text-2xl font-bold">Promotions</div>
              </Link>
              <Link to="/">
                <div className="color-orange text-sm line-height-sm font-regular">
                  Exclusive
                </div>
                <div className="text-white text-2xl font-bold">Large Order</div>
              </Link>
            </div>
            <div className="d-flex justify-content-end align-items-center">
              <div className="fw-bold text-white text-xl cursor-pointer font-regular px-4">
                LOGIN
              </div>
              <div className="d-flex justify-content-center align-items-center py-4 px-3 bg-default position-relative cursor-pointer">
                <FaShoppingCart color="#fff" size={30} />
                {carts?.length > 0 && (
                  <div className="badge-cart">{carts.length}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Alert />
    </>
  );
};

export default Navbar;
