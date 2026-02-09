import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <Nav className="me-auto">
      <Nav.Item>
        <Nav.Link as={Link} to="/" className="text-dark fw-medium">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/recipes" className="text-dark fw-medium">
          Receitas
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/foodstuff" className="text-dark fw-medium">
          Produtos da Época
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/blog" className="text-dark fw-medium">
          Blog
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/sobre" className="text-dark fw-medium">
          Sobre
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavLinks;
