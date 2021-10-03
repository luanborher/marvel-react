import styled from "styled-components"

interface ShadowBox {
    shadow: string
    imgWidth: string
    imgHeight: string
}

export const ImgBackground = styled.img<ShadowBox>`
    float: right;
    width: ${(props) => props.imgWidth};
    height: ${(props) => props.imgHeight};
    mask-image: linear-gradient(to right, transparent 0%, #000 ${(props) => props.shadow});
`