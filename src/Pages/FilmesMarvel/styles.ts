import styled from 'styled-components';
import { px2vw } from '../../Styles/global';

interface Current {
  currentSlide: string;
}

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #111111;

  overflow-x: hidden;
`;

export const Main = styled.main`
  height: 100vh;
  width: 100%;
  user-select: none;

  .title {
    color: #fff;
    font-family: 'Marvel';
    font-weight: bold;
    font-size: ${px2vw(22)};
    margin-left: ${px2vw(50)};
  }

  .main-component {
    display: flex;
    flex-direction: column;
    margin-top: ${px2vw(30)};
  }
`;

export const Section = styled.section`
  width: 100%;
  height: ${px2vw(450)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${px2vw(92)};
  color: var(--primaryColor);
  justify-content: center;
  transform: scale(1.08);
`;

export const Slider = styled.div<Current>`
  display: ${props => (props.currentSlide === 'slide' ? 'none' : '')};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${px2vw(24)};
  position: relative;
  margin-right: auto;
  object-fit: cover;
`;

export const ContainerInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: ${px2vw(240)};
  height: ${px2vw(192)};
  border-radius: ${px2vw(24)};
  background: linear-gradient(var(--primaryColor) 5%, transparent 120%);
  color: white;
`;

export const Paragraph = styled.p`
  text-align: left;
  font-size: ${px2vw(12)};
  font-weight: bold;
  padding: ${px2vw(4)} ${px2vw(16)};
  font-family: 'Marvel';
`;

export const Heading = styled.h3`
  font-size: ${px2vw(20)};
  padding: ${px2vw(12)} 0 0 0;
  font-family: 'Marvel';
  font-weight: bold;
`;

export const Span = styled.span`
  font-size: ${px2vw(18)};
  padding: ${px2vw(6)} 0;
  cursor: pointer;
  font-family: 'Marvel';
  font-weight: bold;

  background-color: #0000008a;

  box-shadow: 2px 2px 10px 2px black;

  &:hover {
    opacity: 0.8;
  }
`;
