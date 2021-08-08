import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Col, Row } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { FaHeart, FaUserCircle } from "react-icons/fa";
import { StarIcon, Button, CardBody, Img } from "./ServicesCard.styled";

const ServicesCard = ({
  person,
  width,
  photo,
  profilePic,
  title,
  description,
  rating,
  price,
  name,
}) => {
  const [favorate, setFavorate] = useState(false);

  const favorated = () => {
    setFavorate(!favorate);
  };

  const { t } = useTranslation("card");

  return (
    <Card style={{ width: `${width}rem` }} className="shadow z-depth-5">
      <Card.Img variant="top" src={photo} alt="" />
      <CardBody>
        {person && (
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
        )}
        <Card.Text>{title}</Card.Text>
        <Card.Text>{description}</Card.Text>
      </CardBody>
      <Card.Footer className="bg-white d-flex align-items-center justify-content-between">
        <small className="text-muted">
          {t("card.startingAt")} <span className="h6">${price}</span>
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
  title: PropTypes.string,
  name: PropTypes.string,
  profilePic: PropTypes.string,
};

export default ServicesCard;
