import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
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

const ServieceCardData = ({ services }) => (
  <Container className="shadow">
    <div className="serviece-cards">
      {services &&
        services.map((service) => (
          <span className="m-3">
            <ServicesCard
              name={service.name}
              title={service.title}
              description={service.description}
              photo={service.images[0]}
              width={15}
              price={service.price}
            />
          </span>
        ))}
    </div>
  </Container>
);

ServieceCardData.propTypes = {
  services: PropTypes.array,
};

export default ServieceCardData;
