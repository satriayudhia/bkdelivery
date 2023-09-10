import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Banner1 from "../assets/images/banner1.jpeg";
import Banner2 from "../assets/images/banner2.jpeg";
import Banner3 from "../assets/images/banner3.jpeg";
import { Link } from "react-router-dom";

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Link to="/">
          <img src={Banner1} alt="banner1" className="d-block w-100" />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/">
          <img src={Banner2} alt="banner2" className="d-block w-100" />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/">
          <img src={Banner3} alt="banner3" className="d-block w-100" />
        </Link>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
