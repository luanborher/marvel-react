import styled, { keyframes } from "styled-components";

import px2vw from "../../Styles/global"

interface Data {
    position: number;
}

interface IText {
    size: number;
    top: number;
}

const open = keyframes`
    0% {
        opacity: 0;
    }
    50% { 
        opacity: 1; 
    }  
`

export const Modal = styled.div<Data>`
    display: flex;

    z-index: 30;
    position: absolute;
    left: ${props => props.position}vw;
    color: white;
    background: linear-gradient(to bottom, #FF0000 0%, #400E0E 90%);
    width: ${px2vw(555)};
    height: 25vw;
    border-radius: ${px2vw(26)};

    animation-name: ${open};
    animation-duration: 1s;
`

export const InfoModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: justify;
    justify-content: space-between;
    
    margin-left: ${px2vw(32)};
`

export const ListApparition = styled.p`
    font-size: ${px2vw(14)};
    line-height: ${px2vw(18)};
`
export const Text = styled.p<IText>`
    font-size: ${props => px2vw(props.size)};
    margin-top: ${props => px2vw(props.top)};
`