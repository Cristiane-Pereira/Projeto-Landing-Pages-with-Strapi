import styled, { css } from 'styled-components';

// eslint-disable-next-line prettier/prettier
export const Container = styled.div`
  ${(props) => css`
    background: ${props.background};
  `}
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
