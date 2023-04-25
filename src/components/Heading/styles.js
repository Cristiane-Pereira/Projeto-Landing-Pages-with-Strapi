import styled, { css } from 'styled-components';

export const titleSize = {
  small: (theme) => css`
    font-size: ${theme.fonts.size.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.size.large};
  `,
  large: (theme) => css`
    font-size: ${theme.fonts.size.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.fonts.size.xhuge};
  `,
};

export const mediaQuery = (theme) => css`
  @media ${theme.media.mobile} {
    font-size: ${theme.fonts.size.large};
  }
`;

export const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, themeDark, size, uppercase }) => css`
    color: ${themeDark ? theme.colors.white : theme.colors.dark};
    ${titleSize[size](theme)}
    ${titleCase(uppercase)}
    ${mediaQuery(theme)}
  `}
`;
