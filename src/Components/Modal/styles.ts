import styled, { keyframes } from 'styled-components';

import { px2vw } from '../../Styles/global';

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
`;

export const Modal = styled.div`
  display: flex;
  z-index: 300;
  position: absolute;
  color: white;
  background: linear-gradient(to bottom, #ff0000 0%, #400e0e 90%);
  width: ${px2vw(556)};
  height: 25vw;
  border-radius: ${px2vw(26)};
  border: ${px2vw(1)} solid #ff0000;

  animation-name: ${open};
  animation-duration: 1s;
  transform: scale(1.12);
`;

export const InfoModal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: justify;
  justify-content: space-between;
  margin-left: ${px2vw(32)};
`;

export const Text = styled.p<IText>`
  font-size: ${props => px2vw(props.size)};
  margin-top: ${props => px2vw(props.top)};
  width: ${px2vw(235)};
`;

export const ContainerApparition = styled.div`
  padding: ${px2vw(16)} 0;
`;

export const Div = styled.div``;

export const Galery = styled.div`
  width: ${px2vw(280)};
  height: auto;
`;
