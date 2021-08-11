import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import { IoSearch } from "react-icons/io5";
import { useTranslation } from "next-i18next";
import Image from "react-bootstrap/Image";
import { Background, Container, SearchForm, Btn } from "./Landing.styled";

// eslint-disable-next-line arrow-body-style
const LandingHero = ({ search }) => {
  const { t } = useTranslation("home");

  const [input, setInput] = useState("");
  const [searchForFreelancers, setSearchForFreelancers] = useState(true);
  const [searchPlaceholder, setSearchPlaceholder] = useState("home.findFreelancer");
  const setdropdowntrue = () => {
    setSearchForFreelancers(true);
    setSearchPlaceholder("home.findFreelancer");
  };
  const setdropdownfalse = () => {
    setSearchForFreelancers(false);
    setSearchPlaceholder("home.findService");
  };
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const q = `/${searchForFreelancers ? "freelancers" : "services"}_search?q=${input}`;
    router.push(q);
  };
  const handleInput = (e) => {
    setInput(e.target.value);
  };

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
            <SearchForm className="d-flex md-shadow mx-2" onSubmit={handleSubmit}>
              <InputGroup.Text id="basic-addon">
                <IoSearch size="25px" />
                <DropdownButton id="dropdown-basic-button">
                  <Dropdown.Item onClick={setdropdowntrue}>{t("home.freelancers")}</Dropdown.Item>
                  <Dropdown.Item onClick={setdropdownfalse}>{t("home.services")}</Dropdown.Item>
                </DropdownButton>
              </InputGroup.Text>
              <input
                type="search"
                placeholder={t(searchPlaceholder)}
                aria-label="Search"
                className="input"
                onChange={handleInput}
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
