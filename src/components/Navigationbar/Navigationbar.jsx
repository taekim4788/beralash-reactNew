import React from "react";

import { Nav, Navbar, Container } from "react-bootstrap";
import images from "../../constants/images";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigationbar.css";

const Navigationbar = () => {
  return (
    <Navbar
      className="custom-navbar"
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="light"
      fixed="top"
    >
      <Container className="nav-container" fluid="md">
        <Navbar.Brand href="/" className="navbar-brand">
          <img src={images.logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav className="navbar-nav">
            <Nav.Link href="/">Services</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
