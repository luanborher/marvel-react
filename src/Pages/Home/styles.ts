import styled, { keyframes } from "styled-components";

const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`

export const MainDiv = styled.main`
    height: 100vh;
`

export const Aside = styled.aside`
    height: 86%;
    float: right;
    width: 50%;
    animation-name: ${FadeInAnimation};
    animation-duration: 1s;
`


