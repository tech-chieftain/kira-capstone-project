import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(193, 193, 174, 0.09);
  padding-bottom: 3rem;
`;

export const MainContainer = styled.div`
  width: 58rem;
  heigh: 100%;
  padding: 4rem 0 6rem;
  z-index: 1;

  .card {
    width: 100%;
    heigh: 100%;
    border-radius: 10px;
    padding: 1.5rem 1rem;
  }

  @media (max-width: 900px) {
    padding: 1rem 0;
    width: 38rem;

    .card {
      padding: 1.5rem 1rem;
    }
  }
`;

export const Bubbles = styled.div`
  .uper-big {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: rgba(0, 103, 103, 0.7);
    position: absolute;
    top: 64px;
    left: -150px;
  }

  .uper-small {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: rgba(0, 103, 103, 0.85);
    position: absolute;
    top: 100px;
    right: 70px;
  }

  .bottom-big {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: rgba(0, 103, 103, 0.7);
    position: absolute;
    bottom: -280px;
    right: 250px;
  }

  .bottom-small {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background: rgba(0, 103, 103, 0.8);
    position: absolute;
    bottom: -370px;
    left: 60px;
  }

  .left-small {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgba(0, 103, 103, 0.8);
    position: absolute;
    bottom: 70px;
    left: 330px;
  }

  .right-small {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: rgba(0, 103, 103, 0.7);
    position: absolute;
    bottom: 80px;
    right: 50px;
  }

  @media (max-width: 900px) {
    .bottom-big,
    .uper-big {
      display: none;
    }

    .bottom-small {
      bottom: -10px;
      left: 5px;
    }
  }
`;
