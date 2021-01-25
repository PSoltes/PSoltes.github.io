import styled from 'styled-components'
import { theme } from 'theme'

export const HobbiesSectionWrapper = styled.section`
& .hobbies_carousel-content {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 15vh 2vw;
    @media only screen and (min-width: ${theme.breakpoints.mobile + 1}px) {
        text-align: left;
    }
}
`