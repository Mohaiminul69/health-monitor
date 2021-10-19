import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../Images/880853.png";
import "./register.css";

const Register = () => {
  const {
    signInUsingGoogle,
    handleRegistration,
    handlePassword,
    handleEmail,
    error,
    handleName,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((res) => {
      history.push(redirect_uri);
    });
  };
  const handlePasswordVerification = (e) => {
    e.preventDefault();
    handleRegistration().then((res) => {
      history.push(redirect_uri);
    });
  };
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
            <Form className="mt-3" onSubmit={handlePasswordVerification}>
              <Form.Group as={Row} className="mb-3">
                <Col sm={12}>
                  <Form.Control
                    className="customInput"
                    onBlur={handleName}
                    type="text"
                    placeholder="Username"
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Col sm={12}>
                  <Form.Control
                    className="customInput"
                    onBlur={handleEmail}
                    type="email"
                    placeholder="Email"
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalPassword"
              >
                <Col sm={12}>
                  <Form.Control
                    className="customInput"
                    onBlur={handlePassword}
                    type="password"
                    placeholder="Password"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 12 }}>
                  <Button type="submit" variant="danger" className="w-100">
                    Submit
                  </Button>
                </Col>
              </Form.Group>
            </Form>
            {error && <p className="text-danger">{error}*</p>}
            <h6 className="mt-3">
              Already have an account ? <Link to="login">Login</Link>
            </h6>
            <h6 className="mt-3 text-center text-muted">or</h6>
            <button onClick={handleGoogleLogin} className="btn btn-dark mt-3">
              <img
                src="https://img.icons8.com/fluency/50/000000/google-logo.png"
                alt=""
                className="googleIcon"
              />
              <span className="ms-2">Sign In Using Google</span>
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
