import {primaryColor} from "../../Styles/global"
import px2vw from "../../Styles/global"
import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    z-index: 1;
    width: ${px2vw(240)};
    height: ${px2vw(360)};

    img {
        width: 100%;
        height: 100%;
        border-radius: ${px2vw(24)};
        position: relative;
    }

    .containerInfo{
        text-align: center;
        position: absolute;
        bottom: 0;
        width: ${px2vw(240)};
        height: ${px2vw(192)};
        border-radius: ${px2vw(24)};
        background: linear-gradient(${primaryColor} 5%, transparent 120%);
        color: white;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h1 {
            font-size: ${px2vw(17)};
            padding: ${px2vw(12)} 0 0 0;
        }

        p {
            text-align: left;
            font-size: ${px2vw(10)};
            padding: ${px2vw(4)} ${px2vw(16)};
        }

        span {
            font-size: ${px2vw(16)};
            padding: ${px2vw(6)} 0;
            cursor: pointer;

            &:hover {
                opacity: 0.8;
            }
        }
    }
`