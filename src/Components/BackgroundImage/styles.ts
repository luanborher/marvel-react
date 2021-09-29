import styled from "styled-components"

interface ShadowBox {
    shadow: string
    imgWidth: string
}

export const ImgBackground = styled.img<ShadowBox>`
    float: right;
    width: ${(props) => props.imgWidth};
    height: 100%;
    mask-image: linear-gradient(to right, transparent 0%, #000 ${(props) => props.shadow});
`