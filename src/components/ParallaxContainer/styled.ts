import styled from "styled-components";
import { transparentize } from "polished";
import { theme } from "theme";

export const ParallaxBackground = styled.div`
  background-image: url(${(props) => props.url});
  position: relative;
  height: 100vh;
  display: flex;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${(props) =>
    props.overlayColor &&
    "background-blend-mode: overlay; background-color:" +
      transparentize(0.3, props.overlayColor) +
      ";"}
  color: ${theme.colors.darkText};
`;

export const ContentWrapper = styled.div`
  height: 100%;
  & .parallax-title {
    font-family: PermanentMarker;
    font-size: 15vmin;
    color: ${theme.colors.primary};
    margin: 0;
  }
  & > .parallax-title.big {
    font-size: 25vmin;
  }
  @media only screen and (min-width: ${theme.breakpoints.mobile + 1}px) {
    padding: 13vh 0 0 0;
    & > .parallax-paragraph {
      font-size: 3.12vmin;
    }
  }
  @media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    text-align: center;
    padding: 20vh 0 0 0;
  }
`;

export const Overlay = styled.div`
  background-image: linear-gradient(
    to top,
    ${transparentize(0.1, theme.colors.darkBackground)},
    ${transparentize(0.56, theme.colors.darkBackground)}
  );
  flex-direction: column;
  flex: 0 0 100%;
`;
