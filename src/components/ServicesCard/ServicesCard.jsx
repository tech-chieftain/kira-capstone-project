import React from "react";
import PropTypes from "prop-types";

import Link from "next/link";

import { Card, Col, Row } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { FaUserCircle } from "react-icons/fa";
import { CardBody, Img } from "./ServicesCard.styled";

const ServicesCard = ({
  uid,
  freelancerUID,
  person,
  width,
  photo,
  profilePic,
  title,
  description,
  price,
  name,
}) => {
  const { t } = useTranslation("card");

  return (
    <Card style={{ width: `${width}rem` }} className="shadow z-depth-5">
      <Link href="/service/[]" as={`/service/${uid}`}>
        <a className="text-decoration-none text-reset">
          <Card.Img variant="top" src={photo} alt="" />
        </a>
      </Link>
      <CardBody>
        {person && (
          <Row md={2} className="d-flex align-items-center mb-2">
            <Col>
              <Link href="/profile/[]" as={`/profile/${freelancerUID}`}>
                <a>
                  {profilePic ? (
                    <Img src={profilePic} roundedCircle fluid />
                  ) : (
                    <FaUserCircle size="28px" className="text-secondary" />
                  )}
                </a>
              </Link>
            </Col>
            <Col className="username">
              <Link href="/profile/[]" as={`/profile/${freelancerUID}`}>
                <a className="text-decoration-none text-reset">
                  <Card.Subtitle>{name}</Card.Subtitle>
                </a>
              </Link>
            </Col>
          </Row>
        )}
        <Link href="/service/[]" as={`/service/${uid}`}>
          <a className="text-decoration-none text-reset">
            <Card.Text>{title}</Card.Text>
          </a>
        </Link>
        <Link href="/service/[]" as={`/service/${uid}`}>
          <a className="text-decoration-none text-reset">
            <Card.Text>{description}</Card.Text>
          </a>
        </Link>
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
  uid: PropTypes.string,
  freelancerUID: PropTypes.string,
  person: PropTypes.bool,
  width: PropTypes.number,
  price: PropTypes.number,
  photo: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  profilePic: PropTypes.string,
};

export default ServicesCard;
