import styled from "styled-components";
import { Image } from "react-bootstrap";

export const Container = styled.div`
  width: 45rem;
  .username {
    margin: 2px 0 0 -15px;
  }
  .pic {
    margin: 0px 0 0 -2px;
  }
  .title {
    font-size: 27px;
  }
`;

export const MainContainer = styled.div`
  margin: 50px, 50px;
  .info {
    margin: 50px, 50px;
    width: 30rem;
  }
`;
export const Img = styled(Image)`
  width: 30px;
  height: 30px;
  overflow: hidden;
`;
