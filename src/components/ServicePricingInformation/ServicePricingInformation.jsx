import PropTypes from "prop-types";
import { Card, Col, Row } from "react-bootstrap";
import { AiOutlineHistory } from "react-icons/ai";
import { FcCheckmark } from "react-icons/fc";
import { VscRefresh } from "react-icons/vsc";
import { FaDollarSign } from "react-icons/fa";
import { ModalBubbles, MainContainer, Button, Container } from "./ServicePricingInformation.styled";

const PricePage = ({ price, data, duration, revisions, description }) => (
  <Container>
    <Card.Body style={{ width: "50rem" }}>
      <Row>
        <ModalBubbles>
          <Card.Title>
            <span className="text">Price</span>
            <small className="mx-3 price">
              <FaDollarSign /> {price}
            </small>
          </Card.Title>
        </ModalBubbles>
      </Row>
      <Card.Text className="mx-3">{description}</Card.Text>
      <small className="mx-2 text-muted">
        <AiOutlineHistory /> {duration} Day Delivery
      </small>
      <small className="mx-5 text-muted">
        <VscRefresh /> {revisions} Revisions
      </small>
      <MainContainer>
        {data.map((line) => (
          <Row>
            <small className="mx-1 text-muted">
              <FcCheckmark /> {line}
            </small>
          </Row>
        ))}
      </MainContainer>
      <Col>
        <Button>
          Continue( <FaDollarSign /> {price} )
        </Button>
      </Col>
      <Col>
        <Button>Contact Seller</Button>
      </Col>
    </Card.Body>
  </Container>
);

PricePage.propTypes = {
  data: PropTypes.string,
  price: PropTypes.number,
  revisions: PropTypes.number,
  duration: PropTypes.number,
  description: PropTypes.string,
};

export default PricePage;
