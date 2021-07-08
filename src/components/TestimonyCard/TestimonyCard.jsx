import React from "react";

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Rating from 'react-rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fasStar, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'


const TestimonyCard = ({imgSrc, quote, stars, color}) => (
  <Card>
    <Row>
      <Col>
        <Card.Img variant="top" src={imgSrc} />
      </Col>
      <Col>
        <Card.Body>
          <Container>
            <FontAwesomeIcon icon={faQuoteLeft} color={color} />
            <Card.Text className="text-center">{quote}</Card.Text>
            <div className="justify-content-end">
              <FontAwesomeIcon icon={faQuoteRight} color={color} />
            </div>
          </Container>
          <Rating
            readonly
            initialRating={stars}
            emptySymbol={<FontAwesomeIcon icon={farStar} />}
            fullSymbol={<FontAwesomeIcon icon={fasStar} />}
            fractions={2}
          />

        </Card.Body>
      </Col>
    </Row>
  </Card>
);

TestimonyCard.defaultProps = {
  imgSrc: "https://picsum.photos/300/200",
  quote: "To be, or not to be?",
  stars: 4,
}

export default TestimonyCard;
