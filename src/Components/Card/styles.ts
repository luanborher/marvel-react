import px2vw from "../../Styles/global"
import styled from "styled-components";

export const Content = styled.div`
    width: ${px2vw(240)};
    height: ${px2vw(360)};
    background: #ff0000;

    img {
        width: 100%;
        height: 100%;
        border-radius: ${px2vw(24)};
    }
`