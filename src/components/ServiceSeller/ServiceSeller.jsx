import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { useState, useEffect } from "react";
import Firebase from "../../Firebase";
import { Btndiv, Styleimg, Styleimg2 } from "./ServiceSeller.styled";

const ServiceSeller = ({ Name, Location, Description, ProfilePic }) => (
  <Container>
    <Row>
      <h2>About The Seller</h2>
    </Row>
    <br />
    <br />

    <Row>
      <Styleimg>
        <div>
          <Image src={ProfilePic} roundedCircle width="80px" height="80px" />
        </div>
        <Styleimg2>
          <span>{Name}</span>
          <div>
            <Btndiv>Contact Me</Btndiv>
          </div>
        </Styleimg2>
      </Styleimg>
    </Row>
    <br />
    <br />
    <Row>
      <span>From</span>
      <br />
      <span>{Location}</span>
    </Row>
    <br />
    <br />
    <Row>
      <p>{Description}</p>
    </Row>
  </Container>
);
export default ServiceSeller;
