import React from "react";
import {
  Navbar as RBNavbar,
  Nav,
  Container,
  Button,
  Offcanvas,
} from "react-bootstrap";
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
      className="mb-3"
    >
      <Container>
        {/* Logo */}
        <RBNavbar.Brand>
          <Logo />
        </RBNavbar.Brand>

        {/* Botão para mobile */}
        <RBNavbar.Toggle aria-controls="offcanvasNavbar" />

        {/* Offcanvas para mobile */}
        <RBNavbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body
            style={{ backgroundColor: "rgba(253, 250, 246, 0.95)" }}
          >
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLinks />
            </Nav>
            <div className="d-flex gap-2 mt-3">
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
          </Offcanvas.Body>
        </RBNavbar.Offcanvas>
      </Container>
    </RBNavbar>
  );
}

export default Navbar;
