import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./video.css";

const VideoCall = () => {
  return (
    <Container className="py-3">
      <div className="d-flex flex-column align-items-center">
        <h1 className="display-5 textBlue">DOCTOR</h1>
        <h1 className="display-3 text-danger">VIDEO CALL</h1>
        <p className="text-muted fw-bold">
          Video Call with our trusted Doctors in just 3 easy steps. Its fast,
          secure & convenient!
        </p>
      </div>
      <Row className="mt-4">
        <Col sm={12} md={4}>
          <div className="paymentCard bg-warning">
            <i className="far fa-clock"></i>
            <h3>Select Your Preferred Specialist & Time Slot</h3>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className="paymentCard bg-primary">
            <i className="fas fa-mobile-alt"></i>
            <h3>Provide Mobile Number, Info and Payment</h3>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className="paymentCard bg-success">
            <i className="fas fa-laptop-medical"></i>
            <h3>Start Your Consultation & Get A Digital Prescription</h3>
          </div>
        </Col>
      </Row>
      <Row className="mt-3 mb-1">
        <Col sm={12} md={6} className="mb-3">
          <div className="bookCall">
            <div>
              <h1 className="fw-light textBlue">Specialist Doctors</h1>
              <h3 className="fw-light text-danger">Book a Video Call</h3>
              <button className="btn btn-danger">Book Now</button>
            </div>
            <img
              src="https://i.ibb.co/7zFrBzH/toppng-com-doctors-582x600.png"
              alt=""
            />
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className="bookCall">
            <div>
              <h1 className="fw-light textBlue">Experienced MBBS Doctors</h1>
              <h3 className="fw-light text-danger">Start a Video Call</h3>
              <button className="btn btn-danger">Call Now</button>
            </div>
            <img
              src="https://i.ibb.co/fnb3ZTJ/toppng-com-doctor-png-432x593.png"
              alt=""
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoCall;
