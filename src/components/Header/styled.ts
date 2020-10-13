import { Menu } from '@material-ui/core'
import { transparentize } from 'polished'
import styled from 'styled-components'
import {theme} from 'theme'

export const Wrapper = styled.nav`
height: ${theme.toolbar.height};
align-items: center;
justify-content: space-between;
padding: ${theme.spacing.s};
display: flex;
flex-direction: row;
position: fixed;
left: 0;
top: 0;
width: 100%;
color: ${props => props.scrolled ? theme.colors.text : theme.colors.darkText};
background-color: ${props => props.scrolled ? theme.colors.secondary : transparentize(0.9, theme.colors.secondary) };
z-index: 50;
transition: background-color 0.3s ease-in;
border-bottom: 3px solid ${props => props.scrolled ? theme.colors.darkDividers : 'transparent'};
`

export const ThemedMenu= styled(Menu).attrs(props => ({classes:{ paper: 'appMenu-paper', ...props.classes}, ...props}))`
.appMenu-paper {
    background-color: ${theme.colors.darkBackground};
    border-radius: 0;
    color: ${theme.colors.primary};
}
`
