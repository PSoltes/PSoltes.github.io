import { createMuiTheme } from "@material-ui/core"

export const theme = {
    colors: {
        background: '#C5C6C7',
        darkBackground: '#0B0C10',
        darkDividers: '#1F2833',
        primary: '#66FCF1',
        darkText: '#C5C6C7',
        secondary: '#45A29E',
        text: '#0B0C10',
    },
    spacing: {
        none: '0px',
        xs: '2px',
        s: '4px',
        m: '8px',
        l: '16px',
        xl: '32px'
    },
    toolbar: {
        height: '6.25vh', //vh
        mobileHeight: '40px', //px
    },
    breakpoints: {
        mobile: 768
    }
}

export const MuiTheme = createMuiTheme({
    palette: {
        primary: {
            main: theme.colors.primary
        },
        secondary: {
            main: theme.colors.secondary
        }
    },
    typography: {
        fontFamily: 'Roboto'
    },
    spacing: [0, 2, 4, 8, 16, 32]
})
