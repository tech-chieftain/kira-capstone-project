import styled from "styled-components";

const Container = styled.div`
  width: 347px;
  height: 100%;
  padding: 10px 0 40px;
  background: white;
  margin: -2rem 0 0 0;

  ul li {
    margin: 5px 0;
  }

  #progress {
    height: 11px;
    border-radius: 20px;
    width: 194px;
    margin: 5px 0;
  }

  @media (max-width: 1200px) {
    width: 30rem;
    height: 250px;
    margin: 2rem auto;
    display: flex;
    flex-direction: row;
  }
`;

export default Container;
