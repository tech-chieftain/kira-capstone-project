import PropTypes from "prop-types";
import { Card, Col, Row } from "react-bootstrap";
import { AiOutlineHistory } from "react-icons/ai";
import {
  ModalBubbles,
  MainContainer,
  Button,
  Container,
} from "./Pricepage.styled";
import { FcCheckmark } from "react-icons/fc";
import { VscRefresh } from "react-icons/vsc";

const PricePage = ({ price, data, date, revisions }) => (
  <Container>
    <Card.Body style={{ width: "50rem" }}>
      <Row>
        <ModalBubbles>
          <Card.Title>
            <span>Price</span>
            <small className="mx-3" className="price">
              <b>$</b> {price}
            </small>
          </Card.Title>
        </ModalBubbles>
      </Row>
      <Card.Text className="mx-3">{data}</Card.Text>
      <small className="mx-2 text-muted">
        {" "}
        <AiOutlineHistory /> {date} Day Delivery{" "}
      </small>
      <small className="mx-5 text-muted">
        {" "}
        <VscRefresh /> {revisions} Revisions{" "}
      </small>
      <MainContainer>
        <Row>
          <small className="mx-1 text-muted">
            {" "}
            <FcCheckmark /> {data}{" "}
          </small>
        </Row>
        <Row>
          <small className="mx-1 text-muted">
            {" "}
            <FcCheckmark /> {data}{" "}
          </small>
        </Row>
        <small className="mx-1 text-muted">
          {" "}
          <FcCheckmark /> {data}
        </small>
      </MainContainer>
      <Col>
        <Button>Continue( $ {price} )</Button>
      </Col>
      <Col>
        <Button className="seller">Contact Seller</Button>
      </Col>
    </Card.Body>
  </Container>
);

PricePage.propTypes = {
  data: PropTypes.string,
  price: PropTypes.number,
  revisions: PropTypes.number,
  date: PropTypes.string,
};

export default PricePage;
