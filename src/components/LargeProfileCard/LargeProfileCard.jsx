import PropTypes from "prop-types";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import { FaUserCircle, FaStar } from "react-icons/fa";

const LargeProfileCard = ({
  profilePicture,
  name,
  job,
  location,
  about,
  tags,
  rate,
  topRated,
}) => (
  <Card className="shadow" style={{ width: "18rem" }}>
    <Card.Body>
      <Row className="align-items-center">
        <Col xs={4}>
          {profilePicture ? (
            <Image src={profilePicture} alt="" roundedCircle fluid />
          ) : (
            <div className="d-flex justify-content-end">
              <FaUserCircle size="4em" />
            </div>
          )}
        </Col>
        <Col>
          <Card.Title className="text-primary">{name}</Card.Title>
          <Card.Subtitle>{job}</Card.Subtitle>
          <Card.Text className="fw-light">{location}</Card.Text>
        </Col>
      </Row>
      <Row>
        <Col className="my-3">
          <Card.Text>{about}</Card.Text>
        </Col>
      </Row>
      <Row>
        <Col>
          {tags.map((tag) => (
            <Button variant="outline-primary me-2 mb-2">{tag}</Button>
          ))}
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Card.Text>${rate}/hr</Card.Text>
        </Col>
        <Col className="text-end">
          {topRated && (
            <Card.Text className="d-flex">
              <FaStar size="1rem" className="align-self-center m-1" /> Top Rated
            </Card.Text>
          )}
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

LargeProfileCard.propTypes = {
  profilePicture: PropTypes.string,
  name: PropTypes.string.isRequired,
  job: PropTypes.string,
  location: PropTypes.string,
  about: PropTypes.string,
  tags: PropTypes.array,
  rate: PropTypes.number,
  topRated: PropTypes.bool,
};

LargeProfileCard.defaultProps = {
  profilePicture: "https://picsum.photos/100/100",
  name: "John Doe",
  job: "Web dev",
  location: "Toronto",
  about:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quidem.",
  tags: ["wordpress", "front end dev", "gaming", "catering"],
  rate: 50,
  topRated: true,
};

export default LargeProfileCard;
