import React, { useState } from "react";
import { useRouter } from "next/router";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import { IoSearch } from "react-icons/io5";
import { useTranslation } from "next-i18next";
import { SearchForm } from "./Navbar.styled";

const Searchbox = () => {
  const [input, setInput] = useState("");
  const [searchForFreelancers, setSearchForFreelancers] = useState(true);
  const [searchPlaceholder, setSearchPlaceholder] = useState("navbar.findFreelancer");
  const setdropdowntrue = () => {
    setSearchForFreelancers(true);
    setSearchPlaceholder("navbar.findFreelancer");
  };
  const setdropdownfalse = () => {
    setSearchForFreelancers(false);
    setSearchPlaceholder("navbar.findService");
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

  const { t } = useTranslation("navbar");
  return (
    <>
      <SearchForm className="d-flex md-shadow mx-2" onSubmit={handleSubmit}>
        <InputGroup.Text id="basic-addon1">
          <IoSearch size="25px" />
        </InputGroup.Text>
        <input
          type="search"
          placeholder={t(searchPlaceholder)}
          aria-label="Search"
          className="input"
          onChange={handleInput}
        />
      </SearchForm>
      <DropdownButton id="dropdown-basic-button">
        <Dropdown.Item onClick={setdropdowntrue}>{t("navbar.freelancers")}</Dropdown.Item>
        <Dropdown.Item onClick={setdropdownfalse}>{t("navbar.services")}</Dropdown.Item>
      </DropdownButton>
    </>
  );
};
export default Searchbox;
