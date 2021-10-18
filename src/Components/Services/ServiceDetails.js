import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import ServiceDetailsView from "./ServiceDetailsView";

const ServiceDetails = () => {
  const params = useParams();
  const { serviceDetails } = params;
  const [healthService, setHealthService] = useState([]);
  useEffect(() => {
    fetch("../healthService.json")
      .then((res) => res.json())
      .then((data) => setHealthService(data));
  }, []);
  const selectedService = healthService.filter(
    (service) => service.id == serviceDetails
  );
  return (
    <Container>
      {selectedService.map((service) => (
        <ServiceDetailsView key={service.id} service={service} />
      ))}
    </Container>
  );
};

export default ServiceDetails;
