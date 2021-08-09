import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import SmallProfileCard from "../SmallProfileCard/SmallProfileCard";

const FPCard = ({ overlay, imgSrc, title, subtitle, profilePicture }) => {
  if (overlay)
    return (
      <Container className="text-white container border-0">
        <Card.Img variant="top" src={imgSrc} alt="" className="img-container" />
        <Card.ImgOverlay className="mx-2">
          <Card.Subtitle>{subtitle}</Card.Subtitle>
          <Card.Title className="title">{title}</Card.Title>
        </Card.ImgOverlay>
      </Container>
    );

  return (
    <Main>
      <div className="main-container">
        <Card.Img variant="top" src={imgSrc} alt="" className="img" />
      </div>
      <Card.Body className="body">
        <SmallProfileCard profilePicture={profilePicture} name={title} job={subtitle} />
      </Card.Body>
    </Main>
  );
};

FPCard.propTypes = {
  overlay: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imgSrc: PropTypes.string,
  profilePicture: PropTypes.string,
};

FPCard.defaultProps = {
  overlay: false,
  title: "",
  subtitle: "",
  imgSrc: "https://picsum.photos/200/300",
};

const Container = styled(Card)`
  height: 415px;
  width: 292px;
  padding: 0;
  border-radius: 0;

  .img-container {
    height: 415px;
    width: 292px;
    object-fit: cover;
  }

  .title {
    margin-top: -22.5rem;
    font-size: 26px;
  }

  @media (max-width: 576px) {
    padding: 0 10px;
  }
`;

const Main = styled(Card)`
  height: 390px;
  width: 300px;
  padding: 0;
  border-radius: 0;

  .body {
    margin-left: -3px;
  }
  .main-container,
  .img {
    height: 300px;
    width: 300px;
    object-fit: cover;
  }

  @media (max-width: 576px) {
    border: 0;
    padding: 0 10px;
  }
`;

export default FPCard;
