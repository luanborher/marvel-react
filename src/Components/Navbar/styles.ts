import {px2vw} from "../../Styles/global"

import styled from "styled-components"

export const HeaderNavbar = styled.header`
    width: 100vw;
    height: 14%;
    box-shadow: 0px 0px ${px2vw(8)} var(--primaryColor);
    display: flex;
    align-items: center;
`

export const Logo = styled.div`
    width: ${px2vw(158)};
    height: ${px2vw(50)};
    background-color: var(--primaryColor);
    margin-left: ${px2vw(50)};
    display: flex;
    justify-content: center;
    align-content: center;
`

export const TextLogo = styled.text`
    font-family: "Marvel";
    font-size: ${px2vw(40)};
    color: white;
    margin-left: ${px2vw(-3)};;
    font-weight: bold;
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

export const Image = styled.img`
    width: ${px2vw(46)};
    height: ${px2vw(46)};
`

export const Close = styled.div`
    display: flex;
    align-items: center;
    margin-left: ${px2vw(46)};
`
