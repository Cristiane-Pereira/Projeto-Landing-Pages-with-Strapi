import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import Home from './templates/Home/Home';
import styled, { css } from 'styled-components';
import { GlobalStyles } from './styles/global-styles';
import theme from './styles/theme';

export const Container = styled.div`
  ${(props) => css`
    background: ${props.theme.colors.backgroundPrimary};
    color: ${props.theme.colors.white};
  `}
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Container>
        <Home />
      </Container>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);
