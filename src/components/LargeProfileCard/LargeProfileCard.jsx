import PropTypes from "prop-types";

import Link from "next/link";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import { FaUserCircle } from "react-icons/fa";

const LargeProfileCard = ({ uid, photoURL, displayName, job, location, about, skills }) => (
  <Card className="shadow">
    <Card.Body>
      <Row className="align-items-center">
        <Col xs={4}>
          <Link href="/profile/[]" as={`/profile/${uid}`}>
            <a>
              {photoURL ? (
                <Image src={photoURL} alt="" roundedCircle fluid />
              ) : (
                <div className="d-flex justify-content-end">
                  <FaUserCircle size="4em" />
                </div>
              )}
            </a>
          </Link>
        </Col>
        <Col>
          <Link href="/profile/[]" as={`/profile/${uid}`}>
            <a className="text-decoration-none text-reset">
              <Card.Title className="text-primary">{displayName}</Card.Title>
            </a>
          </Link>
          <Link href={`/freelancers_search?q=${job}`}>
            <a className="text-decoration-none text-reset">
              <Card.Subtitle>{job}</Card.Subtitle>
            </a>
          </Link>
          <Link href={`/freelancers_search?q=${location}`}>
            <a className="text-decoration-none text-reset">
              <Card.Text className="fw-light">{location}</Card.Text>
            </a>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="my-3">
          <Card.Text>{about}</Card.Text>
        </Col>
      </Row>
      <Row>
        <Col>
          {skills.slice(0, 5).map((tag) => (
            <Link href={`/freelancers_search?q=${tag}`}>
              <a className="text-decoration-none text-reset">
                <Button variant="outline-primary me-2 mb-2">{tag}</Button>
              </a>
            </Link>
          ))}
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

LargeProfileCard.propTypes = {
  uid: PropTypes.string.isRequired,
  photoURL: PropTypes.string,
  displayName: PropTypes.string.isRequired,
  job: PropTypes.string,
  location: PropTypes.string,
  about: PropTypes.string,
  skills: PropTypes.array,
};

LargeProfileCard.defaultProps = {
  photoURL: "",
  job: "",
  location: "",
  about: "",
  skills: [],
};

export default LargeProfileCard;
