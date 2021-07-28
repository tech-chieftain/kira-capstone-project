import React from "react";
import Button from "react-bootstrap/Button";
import { getFreelancers } from "src/Utilities/FirebaseUtilities";
import { Header } from "./Navbar.styled";

const Navbar = () => (
  <div>
    <p>This is an example of a component</p>
    <Button variant="primary" onClick={getFreelancers}>Example of Antd button</Button>
    <Header>WELCOME</Header>
  </div>
);

export default Navbar;
