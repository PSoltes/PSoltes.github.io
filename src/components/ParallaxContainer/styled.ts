import styled from 'styled-components'
import { transparentize } from 'polished'
import { theme } from 'theme'

export const ParallaxBackground = styled.div`
background-image: url(${props => props.url});
  position: relative;
  height: 100vh;
  display: flex;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${theme.colors.darkText};
`

export const ContentWrapper = styled.div`
& > .parallax-title {
  font-family: PermanentMarker;
  font-size: 15vmin;
  color: ${theme.colors.primary};
  margin: 0;
}
& > .parallax-title.big {
  font-size: 25vmin;
}
@media only screen and (min-width: ${theme.breakpoints.mobile + 1}px) {
  margin: 13vh 25vw 0 25vw;
  & > .parallax-paragraph {
    font-size: 3.12vmin;
  }
}
@media only screen and (max-width: ${theme.breakpoints.mobile}px) {
  text-align: center;
  margin: 20vh ${theme.spacing.m} 0 ${theme.spacing.m};
}
`

export const Overlay = styled.div`
background-image: linear-gradient(to top, ${transparentize(0.1, theme.colors.darkBackground)}, ${transparentize(0.56, theme.colors.darkBackground)});
flex-direction: column;
flex: 0 0 100%;
`
