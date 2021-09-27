import "../../Styles/global.scss"

import styled from "styled-components"

export const HeaderNavbar = styled.header`
    width: 100vw;
    height: 14%;
    box-shadow: 0px 0px 10px #ff0000;
    display: flex;
    align-items: center;
`

export const Logo = styled.div`
    width: 216px;
    height: 66px;
    background-color: #ff0000;
    margin-left: 5%;
    display: flex;
    justify-content: space-evenly;
    align-content: flex-end;
`

export const TextLogo = styled.text`
    font-family: "MarvelRegular";
    font-size: 48pt;
    color: white;
    margin-top: 5px;;
`

export const Navigation = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 7%;
    padding: 8%;
    margin-bottom: 50px;
`

export const Links = styled.a`
    font-size: 28pt;
    color: #707070;

    &:checked {
        opacity: 0.7;
    }
`