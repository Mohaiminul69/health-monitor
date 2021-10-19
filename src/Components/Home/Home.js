import React from "react";
import { Container, Row } from "react-bootstrap";
import useHealthServices from "../../Hooks/useHealthServices";
import Service from "../Services/Service";
import Banner from "./Banner/Banner";
import FAQ from "./FAQ/FAQ";
import Doctors from "./FeaturedDoctors/Doctors";
import "./home.css";

const Home = () => {
  const [services] = useHealthServices();
  const homeServices = services.filter((service) => service.id <= 6);
  return (
    <div>
      <Banner />
      <Container className="py-4">
        <h1 className="display-2 mb-4 text-center text-uppercase">
          Our <span className="fw-bold textBlue">Services</span>
        </h1>
        <Row xs={1} sm={2} md={3} className="g-3">
          {homeServices.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </Row>
        <Doctors />
        <FAQ />
      </Container>
    </div>
  );
};

export default Home;
