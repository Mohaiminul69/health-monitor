import React from "react";
import { Accordion, Col, Row } from "react-bootstrap";
import "./faq.css";

const FAQ = () => {
  return (
    <Row className="mt-2 mb-1 g-3">
      <h1 className="display-2 mb-4 text-center text-uppercase">
        <span className="fw-bold textBlue">FAQS</span>
      </h1>
      <Col sm={12} md={6} className="imgFlex">
        <img
          className="faqImg"
          src="https://i.ibb.co/1sN2t0L/faq-card-hands-medical-doctor-384017-256.jpg"
          alt=""
        />
      </Col>
      <Col sm={12} md={6}>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How treatment works on online?</Accordion.Header>
            <Accordion.Body>
              Your treatment consists of attending therapeutic groups,
              individual sessions with therapists and medication your
              psychiatrist prescribes. Group therapy is compulsory: we see it as
              an indication of your commitment to your recovery.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Do I need medical records?</Accordion.Header>
            <Accordion.Body>
              In such a case, we request you to elaborate on your present
              symptoms and conditions along with past medical history, if any,
              following which, we will recommend the right path to you.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Why should i wash hands?</Accordion.Header>
            <Accordion.Body>
              The hands are one of the most important contributors to
              cross-contamination and cross-infection – in the home and in
              hospital.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Is online treatment secure?</Accordion.Header>
            <Accordion.Body>
              We value your privacy. So we can ensure you that none of our calls
              are recorded. and we do not keep any pictures or video clips that
              you may provide unless you give us proper permission.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Row>
  );
};

export default FAQ;
