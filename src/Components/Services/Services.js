import React from "react";
import { Row } from "react-bootstrap";
import useHealthServices from "../../Hooks/useHealthServices";
import Service from "./Service";

const Services = () => {
  const [services] = useHealthServices();
  return (
    <Row sm={1} md={2} lg={3} className="g-3">
      {services.map((service) => (
        <Service key={service.id} service={service} />
      ))}
    </Row>
  );
};

export default Services;
