import styled from "styled-components";
import { Button, Image, Dropdown, Form } from "react-bootstrap";

export const JoinBtn = styled(Button)`
  height: 32px;
  width: 112px;
  color: #006767;
  background: #fff;
  border-radius: 5px;
  border: none;
`;

export const LoginBtn = styled(Button)`
  height: 32px;
  width: 112px;
  color: #fff;
  background: #008080;
  border-radius: 5px;
  border: none;
  margin-right: 75px;
`;

export const Img = styled(Image)`
  margin: -8px 0 0 -30px;

  @media (max-width: 1200px) {
    margin: 0;
  }
`;

export const ProfileImg = styled(Image)`
  width: 28px;
  height: 28px;
  overflow: hidden;
`;

export const DropDown = styled(Dropdown)`
  .dropdown-basic {
    color: white;
    box-shadow: none;
    webkit-box-shadow: none;
    margin: 3px auto 0;

    @media (max-width: 1200px) {
      margin-left: -11px;
    }
  }
`;

export const SearchForm = styled(Form)`
  margin-top: 3px;
  .input {
    border-radius: 0 5px 5px 0;
    margin-left: -10px;
    border: none;
    box-shadow: none;
    webkit-box-shadow: none;
    outline: none;
    width: 370px;
    height: 40px;
    &:focus {
      color: grey;
    }
  }

  #basic-addon1 {
    background: white;
    border-radius: 5px 0 0 5px;
    border: none;
    color: grey;
  }

  #dropdown-basic-button {
    background: transparent;
    color: grey;
    border: none;
    padding: 0 5px;
    box-shadow: none;
  }
`;
