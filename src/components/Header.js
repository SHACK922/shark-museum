
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="#home" style={{ fontFamily: 'Bebas Neue', fontSize: '2rem' }}>SHARK MUSEUM</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">ホーム</Nav.Link>
          <Nav.Link href="#gallery">ギャラリー</Nav.Link>
          <Nav.Link href="#trivia">豆知識</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
