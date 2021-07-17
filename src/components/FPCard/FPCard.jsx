import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

import SmallProfileCard from "../SmallProfileCard/SmallProfileCard";

const FPCard = ({ overlay, width, imgSrc, title, subtitle, profilePicture }) => {
  if (overlay)
    return (
      <Card className="text-white" style={{ width: `${width}rem` }}>
        <Card.Img variant="top" src={imgSrc} alt="" />
        <Card.ImgOverlay>
          <Card.Subtitle>{subtitle}</Card.Subtitle>
          <Card.Title>{title}</Card.Title>
        </Card.ImgOverlay>
      </Card>
    );

  return (
    <Card style={{ width: `${width}rem` }}>
      <Card.Img variant="top" src={imgSrc} alt="" />
      <Card.Body>
        <SmallProfileCard profilePicture={profilePicture} name={title} job={subtitle} />
      </Card.Body>
    </Card>
  );
};

FPCard.propTypes = {
  overlay: PropTypes.bool,
  width: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imgSrc: PropTypes.string,
  profilePicture: PropTypes.string,
};

FPCard.defaultProps = {
  overlay: true,
  width: 18,
  title: "",
  subtitle: "",
  imgSrc: "https://picsum.photos/200/300",
};

export default FPCard;
