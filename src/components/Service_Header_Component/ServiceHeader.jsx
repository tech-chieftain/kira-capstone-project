import PropTypes from "prop-types";
import { FaUserCircle } from "react-icons/fa";
import { Card, Col, Row } from "react-bootstrap";
import Rating from "react-rating";
import { VscStarFull, VscStarEmpty } from "react-icons/vsc";
import { Container, Img, MainContainer } from "./Header.styled";

const Header = ({ profilePic, serviceName, rating, reviews, queue, nameOfPerson }) => (
  <Container>
    <Card.Body style={{ width: "43rem" }}>
      <Row className="my-2">
        <Card.Title className="title">{serviceName}</Card.Title>
        <Col md={1} className="pic">
          {profilePic ? <Img src={profilePic} roundedCircle fluid /> : <FaUserCircle size="30px" />}
        </Col>
        <Col className="username" md={5}>
          <Col md>
            <MainContainer>
              <Card.Title className="info">
                {nameOfPerson} |
                <Rating
                  readonly
                  initialRating={rating}
                  emptySymbol={<VscStarEmpty size="15px" />}
                  fullSymbol={<VscStarFull size="15px" />}
                  fractions={2}
                />{" "}
                ({reviews}) | {queue} Orders in Queue
              </Card.Title>
            </MainContainer>
          </Col>
          <Col md />
        </Col>
      </Row>
    </Card.Body>
  </Container>
);

Header.propTypes = {
  reviews: PropTypes.number,
  serviceName: PropTypes.string,
  profilePic: PropTypes.string,
  rating: PropTypes.number,
  queue: PropTypes.number,
  nameOfPerson: PropTypes.string,
};

export default Header;
