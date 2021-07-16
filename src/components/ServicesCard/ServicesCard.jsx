import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Col, Row } from "react-bootstrap";
import { FaHeart, FaUserCircle } from "react-icons/fa";
import { StarIcon, Button, CardBody, Img } from "./ServicesCard.styled";

const ServicesCard = ({ person, width, photo, profilePic, description, rating, price, name }) => {
  const [favorate, setFavorate] = useState(false);

  const favorated = () => {
    setFavorate(!favorate);
  };

  if (person)
    return (
      <Card style={{ width: `${width}rem` }} className="shadow z-depth-5">
        <Card.Img variant="top" src={photo} alt="" />
        <CardBody>
          <Row md={2} className="d-flex align-items-center mb-2">
            <Col>
              {profilePic ? (
                <Img src={profilePic} roundedCircle fluid />
              ) : (
                <FaUserCircle size="28px" className="text-secondary" />
              )}
            </Col>
            <Col className="username">
              <Card.Subtitle>{name}</Card.Subtitle>
            </Col>
          </Row>
          <Card.Text>{description}</Card.Text>
          <small className="text-warning d-flex align-items-center">
            <StarIcon /> {rating}
          </small>
        </CardBody>
        <Card.Footer className="bg-white d-flex align-items-center justify-content-between">
          <Button onClick={favorated} style={{ color: favorate ? "red" : "grey" }}>
            <FaHeart />
          </Button>
          <small className="text-muted">
            STARTING AT <span className="h6">${price}</span>
          </small>
        </Card.Footer>
      </Card>
    );
  return (
    <Card style={{ width: `${width}rem` }} className="shadow z-depth-5">
      <Card.Img variant="top" src={photo} alt="" />
      <CardBody>
        <Card.Text>{description}</Card.Text>
        <small className="text-warning d-flex align-items-center">
          <StarIcon /> {rating}
        </small>
      </CardBody>
      <Card.Footer className="bg-white d-flex align-items-center justify-content-between">
        <Button onClick={favorated} style={{ color: favorate ? "red" : "grey" }}>
          <FaHeart />
        </Button>
        <small className="text-muted">
          STARTING AT <span className="h6">${price}</span>
        </small>
      </Card.Footer>
    </Card>
  );
};

ServicesCard.propTypes = {
  person: PropTypes.bool,
  width: PropTypes.number,
  price: PropTypes.number,
  rating: PropTypes.number,
  photo: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  profilePic: PropTypes.string,
};

ServicesCard.defaultProps = {
  person: true,
  width: 18,
  photo: "https://picsum.photos/307/186",
  name: "Username",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  rating: 10,
  price: 8,
  profilePic: "https://picsum.photos/307/186",
};

export default ServicesCard;
