import React from "react";
import { Button } from "antd";
import { Header } from "./Navbar.styled";

const Navbar = () => (
  <div>
    <p>This is an example of a component</p>
    <Button type="primary">Example of Antd button</Button>
    <Header>WELCOME</Header>
  </div>
);

export default Navbar;
