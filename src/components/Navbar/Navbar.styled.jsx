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

  @media (max-width: 768px) {
    margin-right: 20px;
  }
`;

export const Img = styled(Image)`
  margin: -8px 0;
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

    // &::after {
    //   display: none;
    // }
  }
`;

export const SearchForm = styled(Form)`
  margin-left: -28rem;
  margin-top: 3px;

  .input {
    border-radius: 0;
    margin-left: -8px;
    border: none;
    box-shadow: none;
    webkit-box-shadow: none;
    width: 280px;

    &:focus {
      color: grey;
    }
  }

  #basic-addon1 {
    background: white;
    border-radius: 5px 0 0 5px;
    border: none;
    color: grey;
    margin-right: -5px;
  }

  .input-btn {
    border-radius: 0 5px 5px 0;
    border: none;
    background: #006767;
    padding: 7px 15px;

    &:focus {
      box-shadow: none;
      webkit-box-shadow: none;
    }
  }
`;
