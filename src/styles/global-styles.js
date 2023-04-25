import { createGlobalStyle, css } from 'styled-components';
import theme from './theme';

export const GlobalStyles = createGlobalStyle`
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fonts.family.default};
      /* ${() => css`
        background: ${theme.colors.backgroundPrimary};
      `} */
  }
  h1, h2, h3, h5, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.family.secondary};
  }
`;
