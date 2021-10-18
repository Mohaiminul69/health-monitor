import React from "react";
import { Carousel } from "react-bootstrap";
import "./banner.css";

const Banner = () => {
  return (
    <div className="sliderContainer">
      <Carousel className="customSlider">
        <Carousel.Item className="sliderItem">
          <img
            className="d-block w-100"
            src="https://i.ibb.co/xJwKFm1/pexels-negative-space-48604.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="sliderItem">
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Xp2JkLb/pexels-karolina-grabowska-4386466.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <h1 className="bannerSlogan text-center text-white text-capitalize display-6">
        <span className="text-danger display-1">Health Monitor</span>
        <br />
        We are always here for you.
      </h1>
    </div>
  );
};

export default Banner;
