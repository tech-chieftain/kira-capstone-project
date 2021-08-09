/* eslint-disable arrow-body-style */
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { AiOutlineHistory } from "react-icons/ai";
import { FcCheckmark } from "react-icons/fc";
import { VscRefresh } from "react-icons/vsc";
import styled from "styled-components";
import { useTranslation } from "next-i18next";

const Container = styled(Card)`
  position: fixed;
  @media (max-width: 1200px) {
    position: static;
  }
`;

const PricePage = ({ price, perks, duration, revisions, description }) => {
  const { t } = useTranslation("service");

  return (
    <Card className="mx-auto my-5 p-4" style={{ height: "auto", maxWidth: "25rem" }}>
      <Card.Body>
        <Card.Title className="mb-5">
          <h2>{t("service.price")}</h2>
          <div className="text-end">${price}</div>
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

        <Button variant="outline-primary" className="w-100 mb-2">
          {t("service.continue")} (${price})
        </Button>

        <Button variant="outline-primary" className="w-100">
          {t("service.contactSeller")}
        </Button>
      </Card.Body>
    </Card>
  );
};

PricePage.propTypes = {
  perks: PropTypes.array,
  price: PropTypes.number,
  revisions: PropTypes.number,
  duration: PropTypes.number,
  description: PropTypes.string,
};

export default PricePage;
