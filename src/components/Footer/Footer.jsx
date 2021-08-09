import { FaTwitter, FaLinkedinIn, FaInstagram, FaFacebookF, FaGlobe } from "react-icons/fa";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { FooterContainer, MainContainer } from "./Footer.styled";

// eslint-disable-next-line arrow-body-style
const Footer = () => {
  const { t } = useTranslation("footer");
  const router = useRouter();
  const { asPath } = useRouter();

  const links = {
    catagories: [
      "footer.design",
      "footer.marketing",
      "footer.translation",
      "footer.animation",
      "footer.tech",
      "footer.audio",
      "footer.business",
    ],
    Communities: ["footer.events", "footer.blog", "footer.forum"],
    Supports: ["footer.conditions", "footer.cookies", "footer.accessability"],
  };

  return (
    <FooterContainer>
      <MainContainer>
        <Container>
          <Row md={2} xs={2}>
            <Col lg={3}>
              <h5>{t("footer.catagories")}</h5>
              <ul className="list-unstyled ">
                {links.catagories.map((catagorie) => (
                  <li>
                    <Link href="/">
                      <a>{t(catagorie)} </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg={2}>
              <h5>{t("footer.community")}</h5>
              <ul className="list-unstyled">
                {links.Communities.map((Community) => (
                  <li>
                    <Link href="/">
                      <a>{t(Community)}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg={3}>
              <h5>{t("footer.support")} </h5>
              <ul className="list-unstyled">
                {links.Supports.map((Support) => (
                  <li>
                    <Link href="/">
                      <a>{t(Support)}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="social-media-section">
          <div className="d-flex justify-content-center">
            <ul className="list-unstyled d-flex flex-row">
              <li>
                <Link href="/">
                  <a>
                    <FaTwitter size="28px" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <FaLinkedinIn size="28px" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <FaInstagram size="28px" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <FaFacebookF size="28px" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="logo-container d-flex justify-content-md-end">
            <Image src="/FooterLogo.png" alt="" />
          </div>
        </div>
        <div className="border-top border-white py-3">
          <p className="text-center small align-self-center">
            {t("footer.kira")} &copy;{new Date().getFullYear()}
            {t("footer.copyRight")}
          </p>
          <div className="dropdown-container d-flex justify-content-md-end">
            <Link href={asPath} locale={router.locale === "en" ? "ku" : "en"}>
              <Button className="border-0" variant="primary language">
                <FaGlobe /> {t("footer.Language")}
              </Button>
            </Link>
          </div>
        </div>
      </MainContainer>
    </FooterContainer>
  );
};

export default Footer;
