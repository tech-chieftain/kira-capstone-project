import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from "react-bootstrap/Dropdown"
import React, { useState } from "react";
import { Navbar, Nav, Container,FormControl } from "react-bootstrap";
import { LoginBtn, JoinBtn, Img, ProfileImg, DropDown, SearchForm } from "./Navbar.styled";
import InputGroup from "react-bootstrap/InputGroup";

import { IoSearch } from "react-icons/io5";
import {useRouter} from "next/router"
const Searchbox = ({href})=>{
    const [searchInput, setSearchInput] = useState("");
    const [searchForFreelancers, setSearchForFreelancers] = useState(true);
    const [SearchPlacehilder, setSearchPlacehilder] = useState("Serach For Freelancers");
  const setdropdowntrue= ()=>{
    setSearchForFreelancers(true);
    setSearchPlacehilder("Search For freelancers");
    console.log(searchForFreelancers);
  }
  const setdropdownfalse=()=>{
    setSearchForFreelancers(false);
    setSearchPlacehilder("Search For Services");
    console.log(searchForFreelancers);

  }
  const router = useRouter();
  const onSubmit=(e)=>{
   e.preventDefault();
   if (searchForFreelancers){
     href = `/freelancers_search?q=${searchInput}`
   }
   else{
       href = `/services_search?q=${searchInput}`;
   }
   
  console.log(href);
  router.push(href);
  }
  const handleInput=(e)=>{
    setSearchInput(e.target.value);
   
  }
    return (
       <> <SearchForm className="d-flex md-shadow mx-2">
       <InputGroup.Text id="basic-addon1">
         <IoSearch size="25px" onClick={onSubmit}/>
       </InputGroup.Text>
       <input
         type="search"
         placeholder={SearchPlacehilder}
         aria-label="Search"
         className="input"
         onChange={handleInput}
       />
     </SearchForm>
       <DropdownButton id="dropdown-basic-button" >
         <Dropdown.Item  onClick={setdropdowntrue}>Freelancers</Dropdown.Item>
         <Dropdown.Item  onClick={setdropdownfalse}>Services</Dropdown.Item>
      </DropdownButton>
       </>
    );
}
export default Searchbox;