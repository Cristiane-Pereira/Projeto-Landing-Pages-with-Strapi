import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

export const ContainerHome = styled.div`
  ${() => css`
    /* color: ${theme.colors.backgroundSecond}; */
  `}
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
