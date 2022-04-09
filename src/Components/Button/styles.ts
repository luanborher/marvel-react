import {px2vw} from "../../Styles/global"
import styled from "styled-components";

interface ButtonProps{
    active: boolean
}

export const ButtonLink = styled.button<ButtonProps>`
    background: black;
    font-family: "Arial";
    font-size: ${px2vw(26)};
    border: 0;
    padding: 0;
    margin: 0 ${px2vw(28)};
    cursor: pointer;
    color : ${props => props.active ? '#FFFFFF' : '#707070' };
`
