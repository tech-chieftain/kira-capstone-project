import PropTypes from "prop-types";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const SmallProfileCard = ({ profilePicture, name, job }) => (
  <Card>
    <Card.Body>
      <Row>
        <Col xs={4} className="align-self-center">
          {profilePicture ? (
            <Image src={profilePicture} roundedCircle fluid />
          ) : (
            <FontAwesomeIcon icon={faUserCircle} size="2x" />
          )}
        </Col>
        <Col>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{job}</Card.Subtitle>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

SmallProfileCard.propTypes = {
  profilePicture: PropTypes.string,
  name: PropTypes.string,
  job: PropTypes.string,
};

SmallProfileCard.defaultProps = {
  profilePicture: "",
  name: "",
  job: "",
};

export default SmallProfileCard;
