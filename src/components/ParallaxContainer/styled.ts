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
background-color: ${transparentize(0.25, theme.colors.darkBackground)};
color: ${theme.colors.primary};
flex-direction: column;
flex: 0 0 100%;
`
