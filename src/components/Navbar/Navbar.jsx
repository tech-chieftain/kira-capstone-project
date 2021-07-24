import React from "react";
import NavLogo from "./Logo";
import { Container, Btn } from "./Navbar.styled";

const Navbar = () => (
  <Container>
    <div className="logo-container">
      <NavLogo />
    </div>
    <Btn>
      <button type="button" className="join">
        Join
      </button>
      <button type="button" className="login">
        Log In
      </button>
    </Btn>
  </Container>
);

export default Navbar;
