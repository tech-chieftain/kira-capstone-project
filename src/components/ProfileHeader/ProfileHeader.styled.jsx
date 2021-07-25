import styled from "styled-components";
import { Image, Container } from "react-bootstrap";

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

export const Img = styled(Image)`
  height: 173px;
  width: 173px;
  overflow: hidden;
`;

export const MainContainer = styled(Container)`
  width: 50%;
  height: 70%;
  margin-left: 12rem;
  margin-top: 2rem;

  .info-container {
    margin-top: -1.5rem;

    li a {
      color: white;
      margin-right: 6px;
    }
  }
`;
