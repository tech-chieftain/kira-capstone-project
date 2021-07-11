import React, { Component } from "react";
import NavLogo from "./Logo";
import { Container, Btn } from "./Navbar.styled";

const Navobar = () => (
  <Container>
    <div className="logo-container">
      <NavLogo />
    </div>
    <Btn>
      <button className="join">Join</button>
      <button className="login">Log In</button>
    </Btn>
  </Container>
);

export default Navobar;
