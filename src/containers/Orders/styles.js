import styled from "styled-components";
import { Link } from "react-router-dom";

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


export const List = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
width: 342px;
height: 101px;
border: none;
outline: none;
padding-left: 25px;
font-style: normal;
font-weight: normal;

p {font-size: 24px;
line-height: 28px;
color: #FFFFFF;
}

button {
    background: none;
    border: none;
    cursor: pointer;
}
`;


export const IMG = styled.img`
width: 246px;
height: 354px;
`;

export const H1 = styled.h1`
    margin-top: 36px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
`;

export const Button = styled(Link)`
margin-top: 85px;
margin-bottom: 51px;
background: rgba(255, 255, 255, 0.14);
width: 342px;
height: 68px;
flex: none;
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

export const Pedido = styled.p`
font-family: Roboto;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
`;
export const Nome = styled.p`
font-family: Roboto;
font-style: bold;
font-weight: 700;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
`;