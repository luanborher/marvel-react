import styled from 'styled-components';
import { px2vw } from '../../Styles/global';

export const HeaderNavbar = styled.header`
  width: 100%;
  height: ${px2vw(80)};
  box-shadow: 0px 0px ${px2vw(8)} var(--primaryColor);
  background-color: black;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: ${px2vw(158)};
  height: ${px2vw(50)};
  margin-left: ${px2vw(50)};
`;

export const Links = styled.div`
  display: flex;
`;

export const Image = styled.img`
  width: ${px2vw(46)};
  height: ${px2vw(46)};
`;

export const Close = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${px2vw(46)};
  margin-right: ${px2vw(20)};
`;
