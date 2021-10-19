import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./serviceDetailsView.css";

const ServiceDetailsView = ({ service }) => {
  const { serviceTitle, img, description } = service;

  return (
    <Row className="py-5">
      <Col
        sm={12}
        md={6}
        className="d-flex align-items-start justify-content-center"
      >
        <img className="detailImg rounded-3 mb-4" src={img} alt="" />
      </Col>
      <Col sm={12} md={6}>
        <div>
          <h3 className="display-2 pb-2 detailsTitle">{serviceTitle}</h3>
          <h4 className="text-muted mt-4 pt-3 text-capitalize">
            {description}
          </h4>
          <Link to="/videoCall">
            <button className="btn btn-danger mt-3">Consult Now</button>
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default ServiceDetailsView;
