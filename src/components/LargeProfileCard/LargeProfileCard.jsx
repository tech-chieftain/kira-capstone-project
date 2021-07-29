import PropTypes from "prop-types";

import Link from "next/link";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import { FaUserCircle, FaStar } from "react-icons/fa";

const LargeProfileCard = ({
  username,
  profilePicture,
  name,
  job,
  location,
  about,
  tags,
  topRated,
}) => (
  <Card className="shadow" style={{ width: "18rem" }}>
    <Card.Body>
      <Row className="align-items-center">
        <Col xs={4}>
          <Link href="/user/[]" as={`/user/${username}`}>
            <a>
              {profilePicture ? (
                <Image src={profilePicture} alt="" roundedCircle fluid />
              ) : (
                <div className="d-flex justify-content-end">
                  <FaUserCircle size="4em" />
                </div>
              )}
            </a>
          </Link>
        </Col>
        <Col>
          <Link href="/user/[]" as={`/user/${username}`}>
            <a className="text-decoration-none text-reset">
              <Card.Title className="text-primary">{name}</Card.Title>
            </a>
          </Link>
          <Link href="/services_search?q=[]" as={`/services_search?q=${job}`}>
            <a className="text-decoration-none text-reset">
              <Card.Subtitle>{job}</Card.Subtitle>
            </a>
          </Link>
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
            <Link href="/services_search?q=[]" as={`/services_search?q=${tag}`}>
              <a className="text-decoration-none text-reset">
                <Button variant="outline-primary me-2 mb-2">{tag}</Button>
              </a>
            </Link>
          ))}
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className="text-end fluid">
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
  username: PropTypes.string.isRequired,
  profilePicture: PropTypes.string,
  name: PropTypes.string.isRequired,
  job: PropTypes.string,
  location: PropTypes.string,
  about: PropTypes.string,
  tags: PropTypes.array,
  topRated: PropTypes.bool,
};

LargeProfileCard.defaultProps = {
  profilePicture: "",
  job: "",
  location: "",
  about: "",
  tags: [],
  topRated: false,
};

export default LargeProfileCard;
