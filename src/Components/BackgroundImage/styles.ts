import px2vw from "../../Styles/global"
import styled from "styled-components"

interface ShadowBox {
    shadow: string
    imgWidth: string
}

export const ImgBackground = styled.img<ShadowBox>`
    float: right;
    width: ${(props) => props.imgWidth};
    height: ${px2vw(566)};
    mask-image: linear-gradient(to right, transparent 0%, #000 ${(props) => props.shadow});
`