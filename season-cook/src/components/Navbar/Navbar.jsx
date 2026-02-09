import React from "react";
import { Navbar as RBNavbar, Nav, Container, Button } from "react-bootstrap";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";

function Navbar() {
  return (
    <RBNavbar
      expand="lg"
      style={{
        backgroundColor: "#ffffff",
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        height: "64px",
      }}
    >
      <Container>
        {/* Logo */}
        <RBNavbar.Brand>
          <Logo />
        </RBNavbar.Brand>

        {/* Botão para mobile */}
        <RBNavbar.Toggle aria-controls="basic-navbar-nav" />

        <RBNavbar.Collapse id="basic-navbar-nav">
          {/* Links */}
          <Nav className="me-auto">
            <NavLinks />
          </Nav>

          {/* Botões Login/Register */}
          <div className="d-flex gap-2">
            <Button
              variant="success"
              style={{ backgroundColor: "#16a34a", borderColor: "#16a34a" }}
            >
              <LoginButton />
            </Button>
            <Button
              variant="warning"
              style={{ backgroundColor: "#f97316", borderColor: "#f97316" }}
            >
              <RegisterButton />
            </Button>
          </div>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
}

export default Navbar;
