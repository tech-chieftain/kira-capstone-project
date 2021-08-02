import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(193, 193, 174, 0.09);
  padding-bottom: 3rem;
`;

export const MainContainer = styled.div`
  width: 60rem;
  heigh: 100%;
  padding: 4rem 0 6rem;

  .card {
    width: 100%;
    heigh: 100%;
    border-radius: 10px;
    padding: 1.5rem 1rem;
    background: white;

    .header {
      margin: -20px 0 0 -20px;
    }
  }

  @media (max-width: 900px) {
    width: 40rem;
  }
`;
