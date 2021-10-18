import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../Images/880853.png";
import "./register.css";

const Register = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <Container>
      <Row className="py-5">
        <Col
          sm={12}
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <img className="loginLogo" src={logo} alt="" />
        </Col>
        <Col sm={12} md={6}>
          <div className="d-flex flex-column mt-4">
            <h2>Create an Account</h2>
            <input
              className="customInput mt-3"
              placeholder="Name"
              type="text"
            />
            <input
              className="customInput mt-3"
              placeholder="Email"
              type="email"
            />
            <input
              className="customInput mt-3"
              placeholder="Password"
              type="password"
            />
            <input
              className="customInput mt-3"
              placeholder="Confirm Password"
              type="password"
            />
            <button className="btn btn-danger mt-3">Submit</button>
            <h6 className="mt-3">
              Already have an account ? <Link to="login">Login</Link>
            </h6>
            <h6 className="mt-3 text-center text-muted">or</h6>
            <button
              onClick={signInUsingGoogle}
              className="btn btn-warning mt-3"
            >
              Sign In Using Google
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
