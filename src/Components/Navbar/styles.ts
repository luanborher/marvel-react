import "../../Styles/global.scss"

import {primaryColor} from "../../Styles/global"
import px2vw from "../../Styles/global"
import styled from "styled-components"

export const HeaderNavbar = styled.header`
    width: 100vw;
    height: 14%;
    box-shadow: 0px 0px ${px2vw(8)} ${primaryColor};
    display: flex;
    align-items: center;
`

export const Logo = styled.div`
    width: ${px2vw(158)};
    height: ${px2vw(50)};
    background-color: ${primaryColor};
    margin-left: ${px2vw(50)};
    display: flex;
    justify-content: space-evenly;
    align-content: flex-end;
`

export const TextLogo = styled.text`
    font-family: "MarvelRegular";
    font-size: ${px2vw(50)};
    color: white;
    margin-top: ${px2vw(3)};;
`

export const Navigation = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    padding: ${px2vw(98)};
`

export const Links = styled.div`
    display: flex;
    align-items: center;
    margin-top: ${px2vw(20)};
`

