import styled, { keyframes } from 'styled-components';
import { px2vw } from '../../Styles/global';

const teste = keyframes`
  0% {
    height: 65%;
  }
  70% {
    height: 65%;
  }
  100% {
    height: 100%;
  }
`;

const walk = keyframes`
    0% {
      margin-left: 50vw;
      margin-top: ${px2vw(100)};
    }
    70% {
      margin-left: 0vw;
      margin-top: ${px2vw(100)};
    }
    100% {
      margin-left: 0vw;
      margin-top: 0;
    }
`;

const fade = keyframes`
  0% {opacity: 0;}
  50% {opacity: 0;}
  100% {opacity: 1;}
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  width: 50%;
  height: 100vh;
  top: 0%;

  animation-name: ${teste};
  animation-duration: 2s;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: url('https://logodownload.org/wp-content/uploads/2017/05/marvel-logo.png');
  margin-bottom: ${px2vw(38)};
  width: ${px2vw(198)};
  height: ${px2vw(80)};

  animation-name: ${walk};
  animation-duration: 2s;
`;

export const Text = styled.div`
  color: white;
  font-size: ${px2vw(60)};
  font-family: 'Marvel';
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation-name: ${fade};
  animation-duration: 4s;
`;

export const Button = styled.button`
  border: 0;
  border-radius: ${px2vw(46)};
  width: ${px2vw(320)};
  height: ${px2vw(46)};
  background: var(--primaryColor);
  color: white;
  font-size: ${px2vw(24)};
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
