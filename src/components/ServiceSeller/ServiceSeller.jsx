import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

import { Styleimg, Styleimg2 } from "./ServiceSeller.styled";

const ServiceSeller = ({ Name, Location, Description, ProfilePic }) => (
  <Card className="p-4 my-5">
    <Row>
      <Card.Title as="h2">About Seller</Card.Title>
    </Row>
    <br />
    <br />

    <Row>
      <Styleimg>
        <div>
          <Image src={ProfilePic} roundedCircle width="80px" height="80px" />
        </div>
        <Styleimg2>
          <Card.Title>{Name}</Card.Title>
          <div>
            <Button variant="outline-primary">Contact Me</Button>
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
  </Card>
);
export default ServiceSeller;
