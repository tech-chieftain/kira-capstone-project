/* eslint-disable arrow-body-style */
import Card from "react-bootstrap/Card";
import Link from "next/link";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { useTranslation } from "next-i18next";

import { Styleimg, Styleimg2 } from "./ServiceSeller.styled";

const ServiceSeller = ({ Name, Location, Description, ProfilePic, uid }) => {
  const { t } = useTranslation("service");

  return (
    <Card className="p-4 my-5">
      <Row>
        <Card.Title as="h2">{t("service.aboutSeller")}</Card.Title>
      </Row>
      <br />
      <br />

      <Row>
        <Styleimg>
          <Link href="/profile/[]" as={`/profile/${uid}`}>
            <a>
              <Image src={ProfilePic} roundedCircle width="80px" height="80px" />
            </a>
          </Link>
          <Styleimg2>
            <div>
              <Link href="/profile/[]" as={`/profile/${uid}`}>
                <a className="text-decoration-none text-reset">
                  <Card.Title>{Name}</Card.Title>
                </a>
              </Link>
              <Button variant="outline-primary">{t("service.contactMe")}</Button>
            </div>
          </Styleimg2>
        </Styleimg>
      </Row>
      <br />
      <br />
      <Row>
        <span>{t("service.from")}</span>
        <br />
        <span>{Location}</span>
      </Row>
      <br />
      <br />
      <Row>
        <p>{Description}</p>
      </Row>
    </Card>
  );
};
export default ServiceSeller;
