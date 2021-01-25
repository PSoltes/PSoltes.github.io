import styled from 'styled-components';
import {theme} from 'theme'

export const IntroSectionWrapper = styled.section`
& .intro_content {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 15vh 2vw;
    @media only screen and (min-width: ${theme.breakpoints.mobile + 1}px) {
        margin: 0 25vw;
        text-align: left;
    }
}
`