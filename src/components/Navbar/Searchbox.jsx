import { useState } from "react";
import { useRouter } from "next/router";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import { IoSearch } from "react-icons/io5";
import { SearchForm } from "./Navbar.styled";

const Searchbox = () => {
  const [input, setInput] = useState("");
  const [searchForFreelancers, setSearchForFreelancers] = useState(true);
  const [searchPlaceholder, setSearchPlaceholder] = useState("Serach For Freelancers");
  const setdropdowntrue = () => {
    setSearchForFreelancers(true);
    setSearchPlaceholder("Search For freelancers");
  };
  const setdropdownfalse = () => {
    setSearchForFreelancers(false);
    setSearchPlaceholder("Search For Services");
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
    <>
      <SearchForm className="d-flex md-shadow mx-2" onSubmit={handleSubmit}>
        <InputGroup.Text id="basic-addon1">
          <IoSearch size="25px" />
        </InputGroup.Text>
        <input
          type="search"
          placeholder={searchPlaceholder}
          aria-label="Search"
          className="input"
          onChange={handleInput}
        />
      </SearchForm>
      <DropdownButton id="dropdown-basic-button">
        <Dropdown.Item onClick={setdropdowntrue}>Freelancers</Dropdown.Item>
        <Dropdown.Item onClick={setdropdownfalse}>Services</Dropdown.Item>
      </DropdownButton>
    </>
  );
};
export default Searchbox;
