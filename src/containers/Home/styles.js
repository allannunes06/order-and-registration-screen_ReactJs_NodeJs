import styled from "styled-components";
import {Link} from 'react-router-dom';


export const Div = styled.div`
   background: #0A0A10;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
`;

export const IMG = styled.img`
width: 342px;
height: 354px;
margin-top: 11px;

`;

export const H1 = styled.h1`
    margin-top: 25px;
    margin-left: 25px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
`;

export const P = styled.p`
margin-top: 76px;
margin-right: 200px;
margin-bottom: 0;
text-align: left;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
letter-spacing: -0.408px;
color: #EEEEEE;


`;

export const Input = styled.input`
margin-left: 36px;
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
font-family: Roboto;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
border: none;
padding-left:15px ;
`;

export const Button = styled(Link)`
margin-top: 76px;
margin-left: 36px;
margin-bottom: 51px;
background: #D93856;
width: 342px;
height: 68px;
font-family: Roboto;
font-style: normal;
font-weight: 900;
font-size: 17px;
line-height: 60px;
text-align: center;
color: #FFFFFF;
border: none;
text-decoration: none;
cursor: pointer;
&:hover{
    opacity: 0.8;
}
&:active{
   opacity: 0.5;
}
`;