/* eslint-disable arrow-body-style */
import PropTypes from "prop-types";
import { FaUserCircle } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import { Card, Col, Row } from "react-bootstrap";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { Container, Img, StarIcon, Button } from "./Reviews.styles";

const Reviews = ({ profilePic, name, rating, description, date }) => {
  const { t } = useTranslation("card");

  return (
    <Container>
      <Card.Body style={{ width: "40rem" }}>
        <Row className="my-2">
          <Col md={1}>
            {profilePic ? (
              <Img src={profilePic} roundedCircle fluid />
            ) : (
              <FaUserCircle size="30px" />
            )}
          </Col>
          <Col className="username" md={2}>
            <Card.Title>{name}</Card.Title>
          </Col>
          <Col md={2}>
            <small className="text-warning d-flex align-self-center mx-4 my-2">
              <StarIcon /> {rating}
            </small>
          </Col>
        </Row>
        <Card.Text className="mx-3 small">{description}</Card.Text>
        <small className="mx-3 text-muted">
          {t("card.publish")} {date} {t("card.ago")}
        </small>
        <Row className="mt-3 mx-1">
          <Col md={4}>
            <Button>
              <AiOutlineLike size="18px" />
            </Button>
            <small>{t("card.helpful")}</small>
          </Col>
          <Col>
            <Button>
              <AiOutlineDislike size="18px" />
            </Button>
            <small>{t("card.notHelpful")}</small>
          </Col>
        </Row>
      </Card.Body>
    </Container>
  );
};

Reviews.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  profilePic: PropTypes.string,
  rating: PropTypes.number,
  date: PropTypes.string,
};

export default Reviews;
