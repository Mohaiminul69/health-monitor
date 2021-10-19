import React from "react";
import { Container, Row } from "react-bootstrap";
import useHealthServices from "../../Hooks/useHealthServices";
import Service from "./Service";

const Services = () => {
  const [services] = useHealthServices();
  return (
    <Container className="py-4">
      <h1 className="display-2 mb-3 text-center text-uppercase">
        Available <span className="fw-bold textBlue fw-light">Services</span>
      </h1>
      <Row xs={1} sm={2} md={3} className="g-3">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </Row>
    </Container>
  );
};

export default Services;
