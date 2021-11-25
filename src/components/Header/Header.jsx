import React from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";

import "./Header.css";
// TODO Mettre logo + lien vers pages
function Header() {
  return (
    <div>
      <Navbar expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">
            <h1>WildVibes</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="text-white" id="offcanvasNavbarLabel">
                WildVibes
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 text-white">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Player</Nav.Link>
                <Nav.Link href="#action2">Search</Nav.Link>
                <Nav.Link href="#action2">Favorites</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
