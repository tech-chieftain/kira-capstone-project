import styled from "styled-components";

export const Container = styled.div`
  width: 347px;
  height: 100%;
  padding: 60px 30px;

  ul li {
    margin-bottom: 3px;
  }

  small {
    margin-right: 10px;
  }
`;

export const ProgressBar = styled.progress`
  margin-bottom: -5px;

    &[value] {
        -webkit-appearance: none;
        appearance: none;
    }

    &[value]::-webkit-progress-bar {
        height: 10px;
        border-radius: 20px;
        background: #eee;
        width: 194px;8
    }

    &[value]::-webkit-progress-value {
        height: 10px;
        border-radius: 20px;
        background: #719e9e;
    }
`;
