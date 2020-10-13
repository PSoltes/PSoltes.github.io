import styled from 'styled-components'

export const ParallaxWrapperForCarousel = styled.div`
position: absolute;
width: 100%;
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
`
