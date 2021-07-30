import PropTypes from "prop-types";
import styled from "styled-components";
import { FaUserCircle, FaStar } from "react-icons/fa";
import { Card, Col, Row, Image } from "react-bootstrap";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const Img = styled(Image)`
  width: 30px;
  height: 30px;
  overflow: hidden;
`;

const Container = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-right: 0;
  border-left: 0;
  margin: 50px;
  width: 720px;

  .username {
    margin: 5px 0 0 -15px;
  }
`;

const StarIcon = styled(FaStar)`
  margin-right: 5px;
  width: 16px;
  height: 16px;
`;
const Button = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin-right: 5px;
`;

const Reviews = ({ profilePic, name, rating, description, date }) => (
  <Container style={{ width: "45rem" }}>
    <Card.Body style={{ width: "43rem" }}>
      <Row className="my-2">
        <Col md={1}>
          {profilePic ? <Img src={profilePic} roundedCircle fluid /> : <FaUserCircle size="30px" />}
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
      <Card.Text className="mx-3">{description}</Card.Text>
      <small className="mx-3 text-muted">Published {date} ago</small>

      <Row className="mt-3 mx-1">
        <Col md={4}>
          <Button>
            <AiOutlineLike size="20px" />
          </Button>
          <small>Helpful</small>
        </Col>
        <Col>
          <Button>
            <AiOutlineDislike size="20px" />
          </Button>
          <small>Not Helpful</small>
        </Col>
      </Row>
    </Card.Body>
  </Container>
);

Reviews.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  profilePic: PropTypes.string,
  rating: PropTypes.number,
  date: PropTypes.string,
};

Reviews.defaultProps = {
  name: "",
  description: "",
  rating: 10,
  date: "",
  profilePic: "",
};

export default Reviews;
