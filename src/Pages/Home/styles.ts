import { px2vw } from "../../Styles/global"

import styled from "styled-components";

interface Current {
    currentSlide: string
}

export const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Main = styled.main`
    height: 100vh;
    user-select: none;
`

export const Section = styled.section`
    height: 86%;
    float: right;
    width: 100vw;
    display: flex;
    justify-content: center;
    position: absolute;
`

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    align-items: center;
    gap: ${px2vw(92)};
    top: 22%;
    color: var(--primaryColor);
    z-index: 1;
    justify-content: center;
    transform: scale(1.08);
`

export const Slider = styled.div<Current>`
    display: ${props => props.currentSlide === "slide" ? "none" : ""};
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: ${px2vw(24)};
    position: relative;
    margin-right: auto;
`

export const ImageMenor = styled.img`
    width: ${px2vw(48)};
    height: ${px2vw(48)};
    border-radius: ${px2vw(24)};
    position: relative;
    margin-right: auto;
`

export const ContainerInfoCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    position: absolute;
    bottom: 0;
    width: ${px2vw(240)};
    height: ${px2vw(192)};
    border-radius: ${px2vw(24)};
    background: linear-gradient(var(--primaryColor) 5%, transparent 120%);
    color: white;
`

export const Paragraph = styled.p`
    text-align: left;
    font-size: ${px2vw(10)};
    padding: ${px2vw(4)} ${px2vw(16)};
`

export const Heading = styled.h3`
    font-size: ${px2vw(17)};
    padding: ${px2vw(12)} 0 0 0;
`

export const Span = styled.span`
    font-size: ${px2vw(16)};
    padding: ${px2vw(6)} 0;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`
