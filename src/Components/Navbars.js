import React from "react";
import { Navbar, Nav, Container, Row, Col, NavDropdown, Image } from "react-bootstrap";
import { AiFillCaretDown } from "react-icons/ai";

const Navbars = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Navbar.Brand href="#home">E1 Doc Extractor</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto me-2" variant="light">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <NavDropdown
            title={
              <span>
                <Image
                  src={require("../assets/image/836.jpg")}
                  alt="User Avatar"
                  roundedCircle
                  width={30}
                  height={30}
                  className="me-2"
                />
                John Doe
              </span>
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbars;
