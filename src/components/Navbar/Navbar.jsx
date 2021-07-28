import React from "react";

import Button from "react-bootstrap/Button";
import { getFreelancers } from "src/Utilities/FirebaseUtilities";
import { Header } from "./Navbar.styled";

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
      <button type="button" className="login" onClick={getFreelancers}>
        Log In
      </button>
    </Btn>
  </Container>

);

export default Navbar;
