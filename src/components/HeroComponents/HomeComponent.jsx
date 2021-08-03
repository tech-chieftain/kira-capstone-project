import styled from "styled-components";
import { Image } from "react-bootstrap";

const HomeComponent = () => (
  <Background>
    <MainContainer className="d-flex flex-row justify-content-end align-items-center">
      <div className="container">
        <div className="service">
          <p>
            Find the services needed to get your business <span>growing</span>
          </p>
        </div>
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
  display: flex;
  justify-content: flex-end;
  margin: 5rem 0;

  .img {
    margin-top: -49px;
  }
`;

export const MainContainer = styled.div`
  background: #008080;
  width: 100%;
  height: 376px;

  .container {
    margin-right: -53rem;
  }

  .service {
    color: white;
    font-size: 45px;
    font-style: italic;
    font-weight: lighter;
    width: 35rem;

    span {
      font-weight: bolder;
    }
  }
`;

export default HomeComponent;
