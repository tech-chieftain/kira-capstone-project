/* eslint-disable import/prefer-default-export */

import styled from "styled-components";



export const Background = styled.div`
 
background: #008080;
width: 100%;
height: 550px;
// position: absolute;
// bottom: 1;
// left: 0;
// margin: 0;
margin: 0px 0px;


.button {
border-radius: 0 10px 10px 0;
}

`;


export const Form = styled.div`

width: 29%;
height: 10%;
cursor: pointer;
color: #ffffff;
font-size: 18px;
margin-left: 75px;
transition-duration: 0.4s;
text-shadow: 1px 1px 1px #3d3d5c;
box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0), 0 6px 5px 0 rgba(0, 0, 0, 0.1);


input {
width: 355px;
height: 45px;
text-align: left;
border-radius: 10px 0 0 10px;
border-color: #ffffff;

&input[type=text] {
width: 130px;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 4px;
font-size: 16px;
background-color: white;
background-image: url('icon.png');
// background-position: 10px 10px; 
background-repeat: no-repeat;
padding: 12px 20px 12px 40px;
transition: width 0.4s ease-in-out;

 
`;

export const ModalBubbles = styled.div`

width: 20px;
height: 20px;
margin: 9px 85px;
opacity: 0.4;
    
   `;




export const Header = styled.div`

font-size: 40px;
height: 120px;
width: 556px;
line-height: 50px;
color: #fdfcfa;
margin: 175px -30px;
margin-bottom: 5px;


div { 
display: flex;
align-items: center;
justify-content: flex-start;
width: 500px;
height: 111px;
color: #ffffff;
margin: 0 0 40px 50px;
 }

.text{
font-style: italic;
font-weight: 100;

span {
font-style: normal;
font-weight: bold;
   }
}


`;

export const Button = styled.div`

width: 110px;
height: 45PX;
text-align: center;
margin: -45px 430px;
border-color: #ffffff;
background-color: #98e6e6;
border-radius:0 10px 10px 0;
text-shadow: 2px 2px 2px  #33334d;   
box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0), 0 6px 5px 0 rgba(0, 0, 0, 0.1);
border-color: #ffffff;


&:hover {
cursor: pointer;  
border-color:#98e6e6;
background-color:#006666;
text-shadow: 1px 1px 1px  #33334d;  
box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0), 0 6px 5px 0 rgba(0, 0, 0, 0.1);
   
`;

export const MianContainer  = styled.div`

width: 750px;
height: 550px;
color: #ffffff;
position: absolute;
margin: 0px -10px;
right: -3rem;
bottom: 12;
top: 100;
Z-index: 1;

 `;