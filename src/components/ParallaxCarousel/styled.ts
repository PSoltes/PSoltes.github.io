import { transparentize } from "polished";
import styled from "styled-components";
import { theme } from "theme";

export const ParallaxWrapperForCarousel = styled.div`
  position: absolute;
  &.slide-enter {
    opacity: 0;
  }
  &.slide-enter-active {
    opacity: 1;
    transition: opacity 1000ms ease-in-out;
  }
  &.slide-exit {
    opacity: 1;
  }
  &.slide-exit-active {
    opacity: 0;
    transition: opacity 1000ms ease-in-out;
  }
  .parallax-carousel_dot-container{
    display: flex;
    justify-content: center;
    position: relative;
    height: 50px;
    bottom: 50px;
  }
  .parallax-carousel_dot {
    border-radius: 50%;
    margin: ${theme.spacing.s};
    width: 0.7em;
    height: 0.7em;
    background-color: ${transparentize(0.6, theme.colors.darkText)}
  }
  div.parallax-carousel_dot_selected {
    background-color: ${transparentize(0.3, theme.colors.darkText)
  }
`;
