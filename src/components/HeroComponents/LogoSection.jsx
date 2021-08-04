import React from "react";
import { Image, Button } from "react-bootstrap";
import styled from "styled-components";
import Link from "next/link";

const LogoSection = () => (
  <div>
    <Container className="d-flex flex-row justify-content-end align-items-center">
      <div className="logo">
        <h1>Make an incredible logo</h1>
        <h3>Design your logo by top talents</h3>
        <Link href="/">
          <Btn>Try Kira Logo Services</Btn>
        </Link>
      </div>
      <div>
        <div className="mx-5">
          <Image src="/image3.png" alt="" />
          <Image src="/image4.png" alt="" />
          <Image src="/image5.png" alt="" />
        </div>
        <div className="d-flex justify-content-center">
          <Image src="/image7.png" alt="" />
          <Image src="/image6.png" alt="" />
        </div>
      </div>
    </Container>
  </div>
);

const Container = styled.div`
  width: 100%;
  height: 434px;
  background: #fff;
  margin: 3rem 0;

  .logo {
    margin: -5rem 9rem 0 0;
    h3 {
      font-weight: lighter;
    }
  }
`;
const Btn = styled(Button)`
  border: 1px solid #008080;
  color: #333;
  background: #fff;
  font-size: 18px;
  border-radius: 5px;
  padding: 5px 16px;
  margin-top: 20px;

  &:hover {
    background: #008080;
    color: #fff;
  }
`;

export default LogoSection;
