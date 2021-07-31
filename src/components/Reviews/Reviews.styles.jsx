import styled from "styled-components";
import { Image } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

export const Container = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-right: 0;
  border-left: 0;
  width: 45rem;

  .username {
    margin: 5px 0 0 -15px;
  }
`;

export const Img = styled(Image)`
  width: 30px;
  height: 30px;
  overflow: hidden;
`;

export const StarIcon = styled(FaStar)`
  margin-right: 5px;
  width: 16px;
  height: 16px;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin-right: 5px;
`;
