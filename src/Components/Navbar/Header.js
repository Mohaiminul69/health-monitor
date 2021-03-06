import React, { Fragment } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Images/880853.png";
import "./header.css";
import useAuth from "./../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Fragment>
      <Navbar
        sticky="top"
        className="customNav"
        variant="light"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img className="logo" src={logo} alt="" />
            <p className="ms-2 mb-2 fw-bold text-white">Health Monitor</p>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <NavLink className="navLink" to="/home">
              Home
            </NavLink>
            <NavLink className="navLink" to="/videoCall">
              Video Call
            </NavLink>
            <NavLink className="navLink" to="/membership">
              Membership
            </NavLink>
            {/* 
<----------------- Showing Logout Button If the user is logged in ----------------->
 */}
            {user?.email ? (
              <Button className="ms-3" onClick={logOut} variant="danger">
                Logout
              </Button>
            ) : (
              <Fragment>
                <NavLink className="navLink" to="/login">
                  Login
                </NavLink>
                <NavLink className="navLink" to="/register">
                  Register
                </NavLink>
              </Fragment>
            )}
            {/* 
<----------------------- Showing Display Name of User ----------------------->
 */}
            {user?.displayName && (
              <Navbar.Text className="ms-3 text-white">
                <span>{user.displayName}</span>
              </Navbar.Text>
            )}
            {/* 
<----------------------- Showing User Display Picture ----------------------->
 */}
            {user?.photoURL && (
              <img className="displayPic ms-3" src={user.photoURL} alt="" />
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
