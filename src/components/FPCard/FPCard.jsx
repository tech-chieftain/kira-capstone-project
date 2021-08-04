import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import SmallProfileCard from "../SmallProfileCard/SmallProfileCard";

const Container = styled(Card)`
  height: 415px;
  width: 292px;
  border: none:
  padding: 0;
  margin: 20px 5px;

  .img-container {
    height: 415px;
    width: 292px;
    object-fit: cover;
  }

  .title {
    margin-top: -22.5rem;
    font-size: 26px;
  }

`;

const FPCard = ({ overlay, width, imgSrc, title, subtitle, profilePicture, imgHeight }) => {
  if (overlay)
    return (
      <Container className="text-white container border-0 ">
        <Card.Img variant="top" src={imgSrc} alt="" className="img-container" />
        <Card.ImgOverlay className="mx-2">
          <Card.Subtitle>{subtitle}</Card.Subtitle>
          <Card.Title className="title">{title}</Card.Title>
        </Card.ImgOverlay>
      </Container>
    );

  return (
    <Card className="second-container">
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
  imgHeight: PropTypes.number,
  profilePicture: PropTypes.string,
};

FPCard.defaultProps = {
  overlay: false,
  // width: 18,
  title: "",
  subtitle: "",
  imgSrc: "https://picsum.photos/200/300",
  // imgHeight: 20,
};

export default FPCard;
