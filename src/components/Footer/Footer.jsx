import { FaTwitter, FaLinkedinIn, FaInstagram, FaFacebookF, FaGlobe } from "react-icons/fa";
import { Container, Row, Col, Dropdown, Image } from "react-bootstrap";
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

  const [languages, setLanguages] = useState({
    arrayOfLanguage: ["English", "Arabic", "Kurdish"],
    chosenLanguage: "English",
  });

  const links = {
    catagories: [
      "footer.design",
      "Digital Marketing",
      "Writing & Translation",
      "Video & Animation",
      "Programming & Tech",
      "Music & Audio",
      "Business",
    ],
    Communities: ["Events", "Blog", "Forum"],
    Supports: ["Terms and Conditions", "Privacy and cookies", "Accessability"],
  };

  // const { pathname, query, asPath } = useRouter();

  const changeLanguage = (language) => {
    if (language === "English") {
      return "en";
    }
    if (language === "Arabic") {
      return "ar";
    }
    if (language === "Kurdish") {
      return "ku";
    }
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
                      <a>{catagorie}</a>
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
                      <a>{Community}</a>
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
                      <a>{Support}</a>
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
            <Dropdown>
              <Dropdown.Toggle
                variant="Info"
                id="dropdown-basic-button"
                className="text-white btn-lg"
              >
                <FaGlobe /> {languages.chosenLanguage}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {languages.arrayOfLanguage
                  .filter((language) => language !== languages.chosenLanguage)
                  .map((language) => (
                    <Dropdown.Item
                      className="dropdown-item"
                      onClick={() => {
                        setLanguages({
                          ...languages,
                          chosenLanguage: language,
                        });
                      }}
                    >
                      <Link href={asPath} locale={changeLanguage(language)}>
                        {language}
                      </Link>
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </MainContainer>
    </FooterContainer>
  );
};

export default Footer;
