import { FormControl, InputGroup, Image } from "react-bootstrap";
import { IoSearch } from "react-icons/io5";
import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";
import { Background, Container, SearchForm, Btn } from "./Landing.styled";

// eslint-disable-next-line arrow-body-style
const LandingHero = ({ search }) => {
  const { t } = useTranslation("home");

  return (
    <Background>
      <div className="d-flex flex-row justify-content-end align-items-center">
        <Container>
          <div className="freelance">
            <p>
              {t("home.find")} <span> {t("home.freelance")} </span>
              {t("home.service")}
            </p>
          </div>
          {search && (
            <SearchForm className="d-flex shadow ">
              <InputGroup.Text id="basic-addon">
                <IoSearch size="34px" />
              </InputGroup.Text>
              <FormControl
                type="search"
                placeholder={t("home.findService")}
                aria-label="Search"
                className="input"
                onChange=""
              />
              <Btn>{t("home.search")}</Btn>
            </SearchForm>
          )}
        </Container>
        <div className="img">
          <Image src="/image1.png" alt="" />
        </div>
      </div>
    </Background>
  );
};

LandingHero.propTypes = {
  search: PropTypes.bool,
};

LandingHero.defaultProps = {
  search: true,
};

export default LandingHero;
