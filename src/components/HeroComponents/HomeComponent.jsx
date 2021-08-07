import styled from "styled-components";
import { Image } from "react-bootstrap";

const HomeComponent = () => (
  <Background>
    <MainContainer className="d-flex flex-row justify-content-end align-items-center">
      <div className="service">
        <p>
          Find the services needed to get your business <span>growing</span>
        </p>
      </div>
      <div className="img">
        <Image src="/image2.png" alt="" />
      </div>
    </MainContainer>
  </Background>
);

export const Background = styled.div`
  width: 100%;
  height: 434px;
  background: #fff;
  margin-top: 5rem;

  .img {
    margin-top: -49px;
  }

  @media (max-width: 576px) {
    marging: 0;
    height: 376px;
  }
`;

export const MainContainer = styled.div`
  background: #008080;
  width: 100%;
  height: 376px;

  .service {
    margin-right: -6rem;
    color: white;
    font-size: 45px;
    font-style: italic;
    font-weight: lighter;
    width: 35rem;

    span {
      font-weight: bolder;
    }
  }

  @media (max-width: 576px) {
    height: 300px;

    .img {
      display: none;
    }

    .service {
      font-size: 35px;
      width: 28rem;
      margin: 0 auto;
    }
  }
`;

export default HomeComponent;
