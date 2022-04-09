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
      margin-top: ${px2vw(550)};
    }
    10% {
      margin-left: 65vw;
      margin-top: ${px2vw(550)};
    }
    40% {
      margin-left: 0vw;
      margin-top: ${px2vw(550)};
    }
    70% {
      margin-left: 0vw;
      margin-top: ${px2vw(550)};
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

  background: var(--primaryColor);
  margin-bottom: ${px2vw(38)};
  width: ${px2vw(198)};
  height: ${px2vw(80)};

  animation-name: ${walk};
  animation-duration: 2s;
`;

export const Text = styled.text`
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

export const Option = styled.div`
  display: flex;
  justify-content: space-around;

  font-size: ${px2vw(14)};
  width: 100%;
  color: var(--secondColor);
  margin: ${px2vw(12)} 0;
`;

export const Subli = styled.div`
  text-decoration: underline;
  text-decoration-color: var(--primaryColor);
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const Title = styled.label`
  color: var(--primaryColor);
  font-size: ${px2vw(22)};
  align-self: flex-start;
  padding: 0 0 0 ${px2vw(6)};
`;

export const SubTitle = styled.label`
  color: var(--secondColor);
  font-size: ${px2vw(16)};
  align-self: flex-start;
  padding: 0 0 ${px2vw(6)} ${px2vw(6)};
`;

export const Input = styled.input`
  padding: 0 ${px2vw(18)};
  width: ${px2vw(288)};
  border-radius: ${px2vw(46)};
  height: ${px2vw(56)};
  font-size: ${px2vw(16)};
  color: var(--secondColor);
  margin: ${px2vw(8)} 0;
  outline: none;
  border: ${px2vw(1)} solid black;
`;

export const Aside = styled.aside`
  height: 100vh;
  float: right;
  width: 50%;

  animation-name: fade;
  animation-duration: 2s;
`;

export const Div = styled.div``;

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

export const P = styled.p`
  color: var(--secondColor);
  margin: ${px2vw(18)} 0 0 0;
  display: flex;
  gap: ${px2vw(4)};
  font-size: ${px2vw(14)};

  > div {
    color: var(--primaryColor);

    &:hover {
      opacity: 0.7;
    }
  }
`;
