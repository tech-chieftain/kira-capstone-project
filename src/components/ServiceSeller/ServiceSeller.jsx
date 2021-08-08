import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Firebase from "src/Firebase";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { Btndiv, Styleimg, Styleimg2 } from "./Serviceseller.styled";

const ServiceSeller = ({ Name, Location, Description, ProfilePic }) => {
  const { t } = useTranslation("service");

  return (
    <Container>
      <Row>
        <h2>{t("sevice.about")} </h2>
      </Row>
      <br />
      <br />

      <Row>
        <Styleimg>
          <div>
            <Image src="/profilepic.jpg" roundedCircle width="80px" height="80px" />
          </div>
          <Styleimg2>
            <span>{Name}</span>
            <div>
              <Btndiv>{t("sevice.contactMe")}</Btndiv>
            </div>
          </Styleimg2>
        </Styleimg>
      </Row>
      <br />
      <br />
      <Row>
        <span>{t("sevice.from")}</span>
        <br />
        <span>{Location}</span>
      </Row>
      <br />
      <br />
      <Row>
        <p>{Description}</p>
      </Row>
    </Container>
  );
};
export default ServiceSeller;
