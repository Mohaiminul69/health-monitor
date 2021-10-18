import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./service.css";

const Service = ({ service }) => {
  const { serviceTitle, img, id } = service;
  return (
    <Col>
      <div className="customCard">
        <img className="serviceImg" src={img} alt="" />
        <div className="d-flex align-items-center h-100">
          <h3 className="my-3">{serviceTitle}</h3>
        </div>
        <Link to={`/service/${id}`}>
          <button className="btn btn-danger m-4 w-75 mt-0">Details</button>
        </Link>
      </div>
    </Col>
  );
};

export default Service;
