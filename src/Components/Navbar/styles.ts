import styled from 'styled-components';
import { px2vw } from '../../Styles/global';

export const HeaderNavbar = styled.header`
  width: 100vw;
  height: 12vh;
  box-shadow: 0px 0px ${px2vw(8)} var(--primaryColor);
  display: flex;
  align-items: center;
  background-color: black;
`;

export const Logo = styled.img`
  width: ${px2vw(158)};
  height: ${px2vw(50)};
  margin-left: ${px2vw(50)};
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: ${px2vw(98)};
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${px2vw(20)};
`;

export const Image = styled.img`
  width: ${px2vw(46)};
  height: ${px2vw(46)};
`;

export const Close = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${px2vw(46)};
`;
