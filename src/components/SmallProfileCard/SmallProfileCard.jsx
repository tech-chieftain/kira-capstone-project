import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

const SmallProfileCard = ({ profilePicture, name, job }) => (
  <Container className="border-0">
    <Row md={1}>
      <Col xs={4}>
        {profilePicture ? (
          <Image src={profilePicture} alt="" roundedCircle fluid />
        ) : (
          <div>
            <FaUserCircle size="3em" />
          </div>
        )}
      </Col>
      <Col>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="subtitle">{job}</Card.Subtitle>
      </Col>
    </Row>
  </Container>
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

const Container = styled.div`
  .subtitle {
    margin-top: -25px;
  }
`;

export default SmallProfileCard;
