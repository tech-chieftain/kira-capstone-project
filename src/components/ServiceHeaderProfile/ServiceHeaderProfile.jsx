import PropTypes from "prop-types";
import Link from "next/link";

import { FaUserCircle } from "react-icons/fa";
import { Card, Col, Row } from "react-bootstrap";
import { Container, Img, MainContainer } from "./HeaderProfile.styled";

const Header = ({ profilePic, serviceName, nameOfPerson, uid }) => (
  <Container>
    <Card.Body style={{ width: "49rem" }}>
      <Row className="my-2">
        <Card.Title className="title">{serviceName}</Card.Title>
        <Col md={1} className="pic">
          <Link href="/profile/[]" as={`/profile/${uid}`}>
            <a>
              {profilePic ? (
                <Img src={profilePic} roundedCircle fluid />
              ) : (
                <FaUserCircle size="30px" />
              )}
            </a>
          </Link>
        </Col>
        <Col className="username" md={5}>
          <Col md>
            <MainContainer>
              <Link href="/profile/[]" as={`/profile/${uid}`}>
                <a className="text-decoration-none text-reset">
                  <Card.Title className="info">{nameOfPerson}</Card.Title>
                </a>
              </Link>
            </MainContainer>
          </Col>
          <Col md />
        </Col>
      </Row>
    </Card.Body>
  </Container>
);

Header.propTypes = {
  serviceName: PropTypes.string,
  profilePic: PropTypes.string,
  nameOfPerson: PropTypes.string,
  uid: PropTypes.string,
};

export default Header;
