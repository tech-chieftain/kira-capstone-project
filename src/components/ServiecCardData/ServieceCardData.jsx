import React from "react";
import styled from "styled-components";
import ServicesCard from "../ServicesCard/ServicesCard";
import { ProfileData } from "../MockData";
import ReviewsData from "../Reviews/ReviewsData";

const Container = styled.div`
  width: 882px;
  height: 100%;
  background: white;
  margin-top: -2rem;
  padding: 3rem 2rem;

  .serviece-cards {
    display: flex;
    flex-wrap: wrap;
  }
`;

const ServieceCardData = () => (
  <Container className="shadow">
    <div className="serviece-cards">
      {ProfileData.map((data) => (
        <span className="m-3">
          <ServicesCard
            person={data.person}
            name={data.name}
            rating={data.rating}
            description={data.service}
            profilePic={data.profilePic}
            photo={data.photo}
            width={data.width}
            price={data.price}
          />
        </span>
      ))}
      <div className="mx-3 my-5">
        <h4 className="mx-3">Reviews</h4>
        <div>
          <ReviewsData />
        </div>
      </div>
    </div>
  </Container>
);

export default ServieceCardData;
