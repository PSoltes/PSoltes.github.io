import styled from 'styled-components'
import {theme} from 'theme'

export const ShowOnMobile = styled.div`
@media only screen and (min-width: ${theme.breakpoints.mobile + 1}px) {
    display: none;
}
`

export const ShowOnLarge = styled.div`
@media only screen and (max-width: ${theme.breakpoints.mobile}px) {
    display: none;
}
`