/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
	

export const Container = styled.div`
width : 100%;
height: 450px;
margin: 0;
`;


export const MianContainer = styled.div`
background: #008080;
width: 100%;
height: 365px;
font-size: 48px;
width: 100%;
position: fixed;
bottom: 0;
left: 0;
margin: 0;
display: flex;
align-items: center;
margin: 51px 0px;

div { 
display: flex;
align-items: center;
justify-content: flex-start;
width: 500px;
height: 111px;
color: #ffffff;
margin: 0 0 40px 65px;
}

.text {
font-size: 40px;
font-style: italic;
font-weight: 100;

span {
font-style: normal;
font-weight: bold;
   }
}
`
export const Col = styled.div`

width: 631px;
height: 720px;
color: #ffffff;
position: fixed;
margin: 20px 0px;
right: 0;
bottom: 20;
Z-index: 1;
   `;
