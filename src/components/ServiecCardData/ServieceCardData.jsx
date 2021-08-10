import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ServicesCard from "../ServicesCard/ServicesCard";

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

  @media (max-width: 1200px) {
    margin: 2rem auto;
    height: 400px;
    width: 30rem;
  }
`;

const ServieceCardData = ({ services }) => (
  <Container className="shadow">
    <div className="serviece-cards">
      {services &&
        services.map((service) => (
          <span className="m-3">
            <ServicesCard
              uid={service.uid}
              name={service.name}
              title={service.title}
              description={service.description}
              photo={service.images && service.images[0]}
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
