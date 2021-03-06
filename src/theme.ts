import { createMuiTheme } from "@material-ui/core"

export const theme = {
    colors: {
        background: '#ffffff',
        darkBackground: '#0B0C10',
        darkDividers: '#1F2833',
        primary: '#66FCF1',
        darkText: '#ffffff',
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
        zIndex: 100,
    },
    popper: {
        zIndex: 150
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
        fontFamily: 'Oxygen'
    },
    spacing: [0, 2, 4, 8, 16, 32, 40, 56, 88, 128]
})
