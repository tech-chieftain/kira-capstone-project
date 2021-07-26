import styled from "styled-components";
import { Image, Container, Button } from "react-bootstrap";

export const Background = styled.main`
  width: 100%;
  height: 426px;
  background-image: url(/background.png);
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  display: flex;
  align-items: center;
`;

export const MainContainer = styled(Container)`
  width: 50%;
  height: 70%;
  margin-left: 15rem;
  margin-top: 2rem;

  .info-container {
    margin-top: -1.5rem;

    li a {
      color: white;
      margin-right: 6px;
    }
  }
`;

export const Img = styled(Image)`
  height: 173px;
  width: 173px;
  overflow: hidden;
`;

export const Btn = styled(Button)`
  background: white;
  width: 150px;
  height: 50px;
  border-radius: 30px;
  color: #008080;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  border: none;
  font-size: 19px;
  margin-left: 25px;

  &:hover {
    background: primery;
    color: white;
  }
`;
