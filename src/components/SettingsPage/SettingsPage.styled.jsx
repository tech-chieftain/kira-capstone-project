import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(193, 193, 174, 0.09);
`;

export const MainContainer = styled.div`
  padding: 2.5rem 8rem;

  .card {
    width: 43rem;
    heigh: 404px;
    border-radius: 10px;
    padding: 1.5rem 1rem;
  }
`;

export const Button = styled.button`
  background: transparent;
  color: black;
  padding-left: 30px;
  margin: 5px 0;
  width: 311px;
  height: 47px;
  border: none;
  text-align: left;

  &:focus {
    background: rgba(0, 128, 128, 0.5);
    color: white;
  }
`;
