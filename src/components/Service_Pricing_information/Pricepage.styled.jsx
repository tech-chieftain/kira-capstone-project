import styled from "styled-components";


export const Container = styled.div`
  border: 1px solid rgba(1, 1, 1, 1);
  width: 20rem;
  height: 22rem;
  margin: 1px 555px;
  box-shadow: 0 6px 5px 0 rgba(0, 0, 0, 0), 0 5px 6px 0 rgba(0, 0, 0, 0.1);
`;
export const ModalBubbles = styled.div`
  margin: 10px 25px;

  .price {
    margin: 1px 190px;
  }
`;

export const MainContainer = styled.div`
margin: 40px 10px;

  .price {
    margin: 1px 190px;
  }
`;

export const Button = styled.button`
  width: 32%;
  height: 50px;
  background: #008080;
  color: white;
  text-align: center;
  text-decoration: none;
  margin: 40px 30px;
  transition-duration: 0.4s;
  cursor: pointer;
  border: 1px solid #008080;
  text-shadow: 1px 1px 1px #3d3d5c;
  box-shadow: 0 6px 5px 0 rgba(0, 0, 0, 0), 0 3px 2px 0 rgba(0, 0, 0, 0.1);

  &:hover {
    color: #008080;
    background-color: #ffffff;
  }
`;
