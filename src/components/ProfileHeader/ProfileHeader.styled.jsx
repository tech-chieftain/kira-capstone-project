import styled from "styled-components";
import { Image, Container, Button } from "react-bootstrap";

export const Background = styled.main`
  width: 100%;
  height: 100%;
  background-image: url(/background.png);
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  padding: 4rem 0 5rem;
`;

export const MainContainer = styled(Container)`
  width: 50%;
  height: 70%;
  margin-left: 15rem;

  .info-container {
    li a {
      color: white;
      margin-right: 6px;
    }
  }

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const Img = styled(Image)`
  height: 173px;
  width: 173px;
  overflow: hidden;
`;

export const Btn = styled(Button)`
  background: white;
  padding: 10px 25px;
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

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
