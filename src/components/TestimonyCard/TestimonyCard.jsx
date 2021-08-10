import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Rating from "react-rating";
import { VscStarFull, VscStarEmpty } from "react-icons/vsc";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const TestimonyCard = ({ imgSrc, quote, rating, color, name, job }) => (
  <Card className="shadow w-100 d-flex justify-content-start">
    <Row className="p-0 m-0">
      <Col className="p-0 m-0">
        <Card.Img variant="top" src={imgSrc} />
      </Col>
      <Col className="align-self-center">
        <Card.Body>
          <Card.Text className="text-center">
            <blockquote className="blockquote">
              <div className="text-start">
                <FaQuoteLeft color={color} size="2rem" />
              </div>
              <p>{quote}</p>
              <div className="text-end">
                <FaQuoteRight color={color} size="2rem" />
              </div>
            </blockquote>
            <footer className="blockquote-footer">
              <small className="text-muted">
                {name} <span className="fst-italic fw-light">{job}</span>
              </small>
              <div>
                <Rating
                  readonly
                  initialRating={rating}
                  emptySymbol={<VscStarEmpty size="28px" />}
                  fullSymbol={<VscStarFull size="28px" />}
                  fractions={2}
                />
              </div>
            </footer>
          </Card.Text>
        </Card.Body>
        <Card.Body className="text-center" />
      </Col>
    </Row>
  </Card>
);

TestimonyCard.propTypes = {
  imgSrc: PropTypes.string,
  quote: PropTypes.string,
  rating: PropTypes.number,
  color: PropTypes.string,
  name: PropTypes.string,
  job: PropTypes.string,
};

TestimonyCard.defaultProps = {
  imgSrc: "https://picsum.photos/700/300",
  quote: "",
  rating: 4,
  color: "#008080",
  name: "",
  job: "",
};

export default TestimonyCard;
