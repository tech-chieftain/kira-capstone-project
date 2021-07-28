import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LoginBtn, JoinBtn, Img } from "./Navbar.styled";

// eslint-disable-next-line arrow-body-style
const NavBar = () => {
  return (
    <Navbar bg="primary">
      <Container>
        <Navbar.Brand href="#home">
          <Img
            src="/NavbarLogo.png"
            width="104px"
            height="52px"
            className="d-inline-block align-top"
            alt="Nabar logo"
          />
        </Navbar.Brand>
        <Nav>
          <LoginBtn> Log In </LoginBtn>
          <JoinBtn> Join </JoinBtn>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
