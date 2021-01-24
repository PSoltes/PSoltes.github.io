import styled, { css } from "styled-components";
import { theme } from "theme";

const colored = css`
  color: ${theme.colors.primary};
  font-family: PermanentMarker;
`;

export const AppH1 = styled.h1`
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    font-size: 20vmin;
  }
  @media only screen and (min-width: ${theme.breakpoints.mobile + 1}px) {
    font-size: 25vmin;
  }
  &.color {
    ${colored}
  }
`;
export const AppH2 = styled.h2`
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    font-size: 15vmin;
  }
  @media only screen and (min-width: ${theme.breakpoints.mobile + 1}px) {
    font-size: 12vmin;
  }
  &.color {
    ${colored}
  }
`;
export const AppH3 = styled.h3`
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    font-size: 9vmin;
  }
  @media only screen and (min-width: ${theme.breakpoints.mobile + 1}px) {
    font-size: 5vmin;
  }
  &.color {
    ${colored}
  }
`;
