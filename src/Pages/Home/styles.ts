import px2vw from "../../Styles/global"
import styled from "styled-components";

export const MainDiv = styled.main`
    height: 100vh;
`

export const Aside = styled.aside`
    height: 86%;
    float: right;
    width: 100%;
`

export const PositionCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

export const ContentCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    
    top: 35%;

    .teste {
        display: flex;
        flex-direction: row;
        gap: ${px2vw(92)};
    }
`