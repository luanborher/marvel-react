import styled from 'styled-components';
import { px2vw } from '../../Styles/global';

export const Page = styled.div`
  display: flex;
  flex-direction: column;

  user-select: none;
  overflow-x: hidden;
  background-color: #111111;
`;

export const Main = styled.div`
  width: 100vw;
  height: auto;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  color: white;
  font-weight: bold;
  font-family: 'Marvel';
  font-size: ${px2vw(20)};
  margin: ${px2vw(30)} ${px2vw(50)};

  display: flex;
  gap: ${px2vw(10)};
  align-items: center;
`;

export const SectionImages = styled.div`
  width: 93%;
  margin: 0 ${px2vw(50)};
`;

export const ContentPersona = styled.img`
  width: ${px2vw(100)};
  height: ${px2vw(120)};
  margin-right: ${px2vw(5.7)};
  margin-left: ${px2vw(5.7)};
  margin-bottom: ${px2vw(5)};

  box-shadow: 0 0 4px var(--primaryColor);
  background-color: #fff;
  object-fit: cover;

  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.08);
  }
`;

export const ImagePersona = styled.img`
  width: ${px2vw(100)};
  height: ${px2vw(120)};
  object-fit: cover;
  border-radius: ${px2vw(8)};
`;

//---------------------------------

export const Image = styled.img`
  width: ${px2vw(239)};
  height: 100%;
  border-radius: ${px2vw(24)};
  margin-right: auto;
  object-fit: cover;
`;

export const ImageMenor = styled.img`
  width: ${px2vw(50)};
  height: ${px2vw(50)};
  object-fit: cover;
  background-color: #fff;
`;
