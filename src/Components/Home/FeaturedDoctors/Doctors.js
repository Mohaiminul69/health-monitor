import React, { Fragment } from "react";
import Slider from "react-slick";
import { Col, Row } from "react-bootstrap";

const Doctors = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Fragment>
      <h1 className="display-2 mb-4 text-center text-uppercase">
        <span className="fw-bold textBlue">FAQS</span>
      </h1>
      <Slider {...settings} className="mt-5">
        <div>
          <div className="paymentCard bg-warning">
            <i class="far fa-clock"></i>
            <h3>Select Your Preferred Specialist & Time Slot</h3>
          </div>
        </div>
        <div>
          <div className="paymentCard bg-warning">
            <i class="far fa-clock"></i>
            <h3>Select Your Preferred Specialist & Time Slot</h3>
          </div>
        </div>
        <div>
          <div className="paymentCard bg-warning">
            <i class="far fa-clock"></i>
            <h3>Select Your Preferred Specialist & Time Slot</h3>
          </div>
        </div>
        <div>
          <div className="paymentCard bg-warning">
            <i class="far fa-clock"></i>
            <h3>Select Your Preferred Specialist & Time Slot</h3>
          </div>
        </div>
      </Slider>
    </Fragment>
  );
};

export default Doctors;
