/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Container = styled.nav`
  background: #008080;
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0%;
  left: 0%;

  .logo-container {
    margin-left: 105px;
  }
`;
export const Btn = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: flex-end; */
  position: relative;
  right: 40px;
  margin: 0, 100px;
  margin-right: 105px;
  .join {
    height: 32px;
    width: 112px;
    color: #006767;
    background-color: white;
    border-radius: 5px;
    border: none;
  }
  .login {
    height: 32px;
    width: 112px;
    color: #fff;
    background-color: #008080;
    border-radius: 5px;
    border: none;
    margin-right: 50px;
  }
`;
