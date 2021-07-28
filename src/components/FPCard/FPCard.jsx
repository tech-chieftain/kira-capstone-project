import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

import SmallProfileCard from "../SmallProfileCard/SmallProfileCard";

const FPCard = ({ overlay, width, imgSrc, title, subtitle, profilePicture, imgHeight }) => {
  if (overlay)
    return (
      <Card className="text-white" style={{ width: `${width}rem` }}>
        <Card.Img
          variant="top"
          src={imgSrc}
          alt=""
          style={{ height: `${imgHeight}rem`, objectFit: "cover" }}
        />
        <Card.ImgOverlay>
          <Card.Subtitle>{subtitle}</Card.Subtitle>
          <Card.Title>{title}</Card.Title>
        </Card.ImgOverlay>
      </Card>
    );

  return (
    <Card style={{ maxWidth: `${width}rem` }}>
      <Card.Img
        variant="top"
        src={imgSrc}
        alt=""
        style={{ height: `${imgHeight}rem`, objectFit: "cover" }}
      />
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
  imgHeight: PropTypes.number,
  profilePicture: PropTypes.string,
};

FPCard.defaultProps = {
  overlay: false,
  width: 18,
  title: "",
  subtitle: "",
  imgSrc: "https://picsum.photos/200/300",
  imgHeight: 20,
};

export default FPCard;
