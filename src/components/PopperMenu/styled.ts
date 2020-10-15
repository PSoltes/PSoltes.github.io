import { Paper, Popper } from '@material-ui/core'
import { transparentize } from 'polished'
import styled from 'styled-components'
import { theme } from 'theme'

export const AppPopper = styled(Popper)`
z-index: ${theme.popper.zIndex};
`
export const PopperPaper = styled(Paper).attrs(props => ({ classes: { ...props.classes, root: 'AppPopper-paper' } }))`
&.AppPopper-paper {
    background-color: ${transparentize(0.1, theme.colors.darkBackground)};
    color: ${theme.colors.darkText};
}
`