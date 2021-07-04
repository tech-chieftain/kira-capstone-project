import React, { Component } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Header } from "./Navbar.styled";

const Navobar = () => (
  <div>
    <Container>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Kira</Navbar.Brand>
        <Button>Log in</Button>
        <Button>Join</Button>
      </Navbar>
    </Container>
  </div>
);

export default Navobar;
