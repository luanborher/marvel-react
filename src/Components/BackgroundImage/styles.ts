import styled from "styled-components"

interface ShadowBox {
    shadow: string
}

export const ImgBackground = styled.img<ShadowBox>`
    width: 100%;
    height: 100%;
    mask-image: linear-gradient(to right, transparent 0%, #000 ${(props) => props.shadow});
`