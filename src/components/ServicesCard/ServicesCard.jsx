import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { FaHeart, FaUserCircle } from "react-icons/fa";
import { StarIcon, Button } from "./ServicesCard.styled";

const ServicesCard = ({ person, width, photo, profilePic, description, rating, price, name }) => {
  if (person)
    return (
      <Card style={{ width: `${width}rem` }} className="shadow z-depth-5">
        <Card.Img variant="top" src={photo} alt="" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <small className="text-warning d-flex align-items-center mx-3 my-1">
          <StarIcon /> {rating}
        </small>
        <Card.Footer className="bg-white d-flex align-items-center justify-content-between">
          <Button>
            <FaHeart />
          </Button>
          <small className="text-muted">
            STARTING AT <span className="h6">${price}</span>
          </small>
        </Card.Footer>
      </Card>
    );
  return (
    <Card style={{ width: `${width}rem` }} className="shadow z-depth-5">
      <Card.Img variant="top" src={photo} alt="" />
      <Card.Body>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <small className="text-warning d-flex align-items-center mx-3 my-1">
        <StarIcon /> {rating}
      </small>
      <Card.Footer className="bg-white d-flex align-items-center justify-content-between">
        <Button>
          <FaHeart />
        </Button>
        <small className="text-muted">
          STARTING AT <span className="h6">${price}</span>
        </small>
      </Card.Footer>
    </Card>
  );
};

ServicesCard.propTypes = {
  person: PropTypes.bool,
  width: PropTypes.number,
  price: PropTypes.number,
  rating: PropTypes.number,
  photo: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
};

ServicesCard.defaultProps = {
  person: true,
  width: 18,
  photo: "https://picsum.photos/307/186",
  name: "",
  description: "",
  rating: 10,
  price: 8,
};

export default ServicesCard;
