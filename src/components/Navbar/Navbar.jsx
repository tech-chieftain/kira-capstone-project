import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LoginBtn, JoinBtn, Img } from "./Navbar.styled";
import LoginModal from "../Modals/LoginModal";
import SignupModal from "../Modals/SignupModal";

// eslint-disable-next-line arrow-body-style
const NavBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const openLoginModal = () => {
    setShowLogin((show) => !show);
  };

  const openSignupModal = () => {
    setShowSignup((show) => !show);
  };

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
          <LoginBtn onClick={openLoginModal}> Log In </LoginBtn>
          <LoginModal
            showLogin={showLogin}
            setShowLogin={setShowLogin}
            setShowSignup={setShowSignup}
          />

          <JoinBtn onClick={openSignupModal}> Join </JoinBtn>
          <SignupModal
            showSignup={showSignup}
            setShowSignup={setShowSignup}
            setShowLogin={setShowLogin}
          />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
