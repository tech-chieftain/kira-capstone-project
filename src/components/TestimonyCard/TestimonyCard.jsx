import PropTypes from "prop-types";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Rating from "react-rating";

import { FaStar, FaRegStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const TestimonyCard = ({ imgSrc, quote, rating, color, name, job }) => (
  <Card>
    <Row>
      <Col>
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
                  emptySymbol={<FaRegStar />}
                  fullSymbol={<FaStar />}
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
  imgSrc: "https://picsum.photos/900/700",
  quote: "",
  rating: 0,
  color: "#008080",
  name: "",
  job: "",
};

export default TestimonyCard;
