import styled from 'styled-components'
import { transparentize } from 'polished'
import { theme } from 'theme'

export const Wrapper = styled.div`
background-image: url(${props => props.url});
  position: relative;
  height: 100vh;
  display: flex;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Overlay = styled.div`
background-image: linear-gradient(to top, ${transparentize(0.1, theme.colors.darkBackground)}, ${transparentize(0.56, theme.colors.darkBackground)});
color: ${theme.colors.primary};
flex-direction: column;
flex: 0 0 100%;
`
