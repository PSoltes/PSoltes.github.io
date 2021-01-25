import styled from 'styled-components';
import { theme } from 'theme';

export const CareerSectionWrapper = styled.section`
    min-height: 100vh;
    margin: 0 3vw;
    & p {
        text-align: justify;
    }
    @media only screen and (min-width: ${theme.breakpoints.mobile + 1}px) {
    }
`