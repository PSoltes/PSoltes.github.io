import { ButtonGroup, Menu } from '@material-ui/core'
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
margin-bottom: ${theme.spacing.m};
color: ${theme.colors.darkText};
background-color: ${props => props.scrolled ? theme.colors.darkBackground : transparentize(0.9, theme.colors.darkBackground) };
z-index: ${theme.toolbar.zIndex};
transition: background-color 0.3s ease-in, border-bottom 0.3s ease-in;
border-bottom: 3px solid ${props => props.scrolled ? theme.colors.darkDividers : 'transparent'};
`

export const ThemedMenu= styled(Menu).attrs(props => ({classes:{ paper: 'appMenu-paper', ...props.classes}, ...props}))`
.appMenu-paper {
    background-color: ${theme.colors.darkBackground};
    border-radius: 0;
    color: ${theme.colors.primary};
}
`

export const ThemedButtonGroup = styled(ButtonGroup).attrs(props => ({classes: { ...props.classes, groupedTextHorizontal: 'appBtnGroupTextHorizontal'}}))`
margin: 0 ${theme.spacing.l};
& .appBtnGroupTextHorizontal:not(:last-child) {
    border-right: 1px solid ${theme.colors.primary};
}

`
