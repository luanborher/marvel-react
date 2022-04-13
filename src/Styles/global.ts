import { createGlobalStyle } from 'styled-components';

export const px2vw = (size: number, width = 1440) =>
  `${(size / width) * 100}vw`;

export default createGlobalStyle`
  :root{
    --primaryColor: #ff0000;
    --secondColor: #84848d;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    box-sizing: border-box;
    background: black;
    font-family: "Arial";
    background-color: #111111;
  }

  div {
    display: initial;
  }

  @keyframes fade{
    0% {
      opacity:0
    }
    100%{
      opacity:1
    }
  }
`;
