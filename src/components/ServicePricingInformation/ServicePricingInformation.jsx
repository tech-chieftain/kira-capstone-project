/* eslint-disable arrow-body-style */
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { AiOutlineHistory } from "react-icons/ai";
import { FcCheckmark } from "react-icons/fc";
import { VscRefresh } from "react-icons/vsc";
import styled from "styled-components";
import { useTranslation } from "next-i18next";
import SellerContact from "../SellerContact/SellerContact";

const Container = styled(Card)`
  position: fixed;
  margin: 10.5rem 3rem 0;
  padding: 2rem;

  .price {
    margin: 5px 0 0 80px;
  }

  @media (max-width: 1200px) {
    position: static;
  }
`;

const PricePage = ({ price, perks, duration, revisions, description, email, phone }) => {
  const { t } = useTranslation("service");
  const [show, setShow] = useState(false);
  return (
    <Container className="shadow" style={{ height: "auto", maxWidth: "25rem" }}>
      <Card.Body>
        <Card.Title className="mb-5 d-flex flex-row">
          <h2>{t("service.price")}</h2>
          <span className="price h3">${price}</span>
        </Card.Title>

        <Card.Text>{description}</Card.Text>
        <small className="mx-2 text-muted">
          <AiOutlineHistory /> {duration} {t("service.dayDelivery")}
        </small>
        <small className="mx-5 text-muted">
          <VscRefresh /> {revisions} {t("service.revisions")}
        </small>
        <Card.Text className="mx-1 text-muted">
          {perks.map((line) => (
            <div>
              <FcCheckmark /> {line}
            </div>
          ))}
        </Card.Text>

        <Button
          variant="outline-primary"
          className="w-100"
          onClick={() => setShow((show) => !show)}
        >
          {t("service.contactSeller")}
        </Button>
        <SellerContact show={show} setShow={setShow} email={email} phone={phone} />
      </Card.Body>
    </Container>
  );
};

PricePage.propTypes = {
  perks: PropTypes.array,
  price: PropTypes.number,
  revisions: PropTypes.number,
  duration: PropTypes.number,
  description: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
};

export default PricePage;
