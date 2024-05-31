import React, { useEffect } from 'react';
import logo from './cordia.png';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar id="navbar" bg="light" expand="md">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="Cordia" height="30" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-responsive" />
        <Navbar.Collapse id="navbar-responsive">
          <Nav className="ms-auto">
            <Nav.Link href="#home">ΑΡΧΙΚΗ</Nav.Link>
            <Nav.Link href="#features">ΔΥΝΑΤΟΤΗΤΕΣ</Nav.Link>
            <Nav.Link href="#our-team">ΟΜΑΔΑ</Nav.Link>
            <Nav.Link href="#mission-vision-values">ΟΡΑΜΑ</Nav.Link>
            <Nav.Link href="#news">ΝΕΑ</Nav.Link>
            <Nav.Link href="#supporters">ΥΠΟΣΤΗΡΙΚΤΕΣ</Nav.Link>
            <Nav.Link href="#contact">ΕΠΙΚΟΙΝΩΝΙΑ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
