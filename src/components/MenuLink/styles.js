import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.fonts.size.small};
    padding: 0px 16px;
    color: ${theme.colors.backgroundPrimary};
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 2rem;
      bottom: 0.76rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.backgroundSecond};
      transition: all 300ms ease-in-out;
    }
    &:hover::after {
      left: 25%;
      width: 50%;
    }
    @media ${theme.media.mobile} {
      margin-bottom: 1.6rem !important;
    }
  `}
`;
