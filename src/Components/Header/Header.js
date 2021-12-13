import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Offcanvas, Nav } from "react-bootstrap";
import Top from "../Top/Top";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <Navbar bg="dark" variant="dark" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">
            <Top />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                React Tutorial
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">
                  <Link to="/">What is React ?</Link>
                </Nav.Link>
                <Nav.Link href="#action2">
                  <Link to="/install">Getting Started</Link>
                </Nav.Link>
                <Nav.Link href="#action1">
                  <Link to="/es6">What is ES6 ?</Link>
                </Nav.Link>
                <Nav.Link href="#action2">
                  <Link to="/render">Render HTML</Link>
                </Nav.Link>
                <Nav.Link href="#action1">
                  <Link to="/jsx">JSX</Link>
                </Nav.Link>
                <Nav.Link href="#action2">
                  <Link to="/component">Components</Link>
                </Nav.Link>
                <Nav.Link href="#action2">
                  <Link to="/class">Class</Link>
                </Nav.Link>
                <Nav.Link href="#action2">
                  <Link to="/props">Props</Link>
                </Nav.Link>
                <Nav.Link href="#action2">
                  <Link to="/events">Events</Link>
                </Nav.Link>
                <Nav.Link href="#action2">
                  <Link to="/condition">Conditionals</Link>
                </Nav.Link>
                <Nav.Link href="#action2">
                  <Link to="/list">Lists</Link>
                </Nav.Link>
                <Nav.Link href="#action2">
                  <Link to="/hook">Hooks</Link>
                </Nav.Link>
                <Nav.Link href="#action2">
                  <Link to="/form">Forms</Link>
                </Nav.Link>
                <Nav.Link href="#action2">
                  <Link to="/router">Router</Link>
                </Nav.Link>
                <Nav.Link href="#action2">
                  {" "}
                  <Link to="/memo">Memo</Link>
                </Nav.Link>
                <Nav.Link href="#action2">
                  <Link to="/style">Styling</Link>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
