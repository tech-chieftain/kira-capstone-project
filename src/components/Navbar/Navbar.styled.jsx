import styled from "styled-components";
import { Button, Image, Dropdown } from "react-bootstrap";

export const JoinBtn = styled(Button)`
  height: 32px;
  width: 112px;
  color: #006767;
  background: #fff;
  border-radius: 5px;
  border: none;

  // &:focus,
  // :hover {
  //   color: #006767;
  //   background: #fff;
  // }
`;

export const LoginBtn = styled(Button)`
  height: 32px;
  width: 112px;
  color: #fff;
  background: #008080;
  border-radius: 5px;
  border: none;
  margin-right: 75px;

  // &:focus,
  // :hover {
  //   color: #fff;
  //   background: #008080;
  // }

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
