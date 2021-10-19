import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./member.css";

const Membership = () => {
  return (
    <Container className="py-3">
      <div className="d-flex flex-column align-items-center">
        <h1 className="display-5 textBlue">Membership Packages</h1>
        <p className="text-muted fw-bold">
          Compare and choose best packages for you and your family
        </p>
      </div>
      <Row className="mt-3 mb-1">
        <h1 className="text-warning mb-3">Gold Packages</h1>
        <Col sm={12} md={6}>
          <div className="membershipPackages">
            <img src="https://i.ibb.co/4WQGQqG/gold1.png" alt="" />
            <div className="p-3 pb-0">
              <h1 className="text-warning">My Gold</h1>
              <h3 className="fw-light">3499 TK 12 Months Validity</h3>
              <h3 className="fw-light">
                Unlimited Doctor Call, Video Call & Chat
              </h3>
              <button className="btn btn-warning my-2">Subscribe</button>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className="membershipPackages">
            <img src="https://i.ibb.co/pJ3z1SK/gold2.png" alt="" />
            <div className="p-3 pb-0">
              <h1 className="text-warning">Our Gold</h1>
              <h3 className="fw-light">6999 TK 12 Months Validity</h3>
              <h3 className="fw-light">
                Unlimited Doctor Call, Video Call & Chat
              </h3>
              <button className="btn btn-warning my-2">Subscribe</button>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-3 mb-1">
        <h1 className="text-secondary mb-3">Silver Packages</h1>
        <Col sm={12} md={6}>
          <div className="membershipPackages">
            <img src="https://i.ibb.co/PgFNG3f/silver1.png" alt="" />
            <div className="p-3 pb-0">
              <h1 className="text-secondary">My Silver</h1>
              <h3 className="fw-light">1550 TK 12 Months Validity</h3>
              <h3 className="fw-light">
                Unlimited Doctor Call, Video Call & Chat
              </h3>
              <button className="btn btn-secondary my-2">Subscribe</button>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className="membershipPackages">
            <img src="https://i.ibb.co/rQxy8Y9/silver2.png" alt="" />
            <div className="p-3 pb-0">
              <h1 className="text-secondary">Our Silver</h1>
              <h3 className="fw-light">2900 TK 12 Months Validity</h3>
              <h3 className="fw-light">
                Unlimited Doctor Call, Video Call & Chat
              </h3>
              <button className="btn btn-secondary my-2">Subscribe</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Membership;
