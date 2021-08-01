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
  margin: 0 auto;
  padding: 4rem 0 6rem;
  dislpay: flex;
  align-items: center;

  .card {
    width: 100%;
    heigh: 100%;
    border-radius: 10px;
    padding: 1.5rem 1rem;
  }
`;

export const Bubbles = styled.div`
  .uper-bigBubble {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: rgba(0, 103, 103, 0.7);
    position: absolute;
    top: 62px;
    left: -150px;
  }

  .uper-smallBubble {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: rgba(0, 103, 103, 0.85);
    position: absolute;
    top: 100px;
    right: 70px;
  }

  .bottom-bigBubble {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: rgba(0, 103, 103, 0.7);
    position: absolute;
    bottom: -440px;
    right: -140px;
  }

  .bottom-smallBubble {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: rgba(0, 103, 103, 0.85);
    position: absolute;
    bottom: -370px;
    left: 60px;
  }
`;