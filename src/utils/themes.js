import {createTheme} from "@mui/material";

const light = createTheme({
    typography: {
        fontFamily: 'GoogleSans, EuclidCircularB, Aeonik, EuclidCircularA, DM Sans',
        fontSize: 16
    },
    shape: {
        borderRadius: 32
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#ffffff'
        },
        secondary: {
            main: '#7FB9F3'
        },
        background: {
            default: 'rgba(127,185,243,0.15)',
            paper: '#ffffff'
        },
        text: {
            secondary: '#828395',
            primary: '#2f2f2f'
        },
        light: {
            secondary: 'rgba(127,185,243,0.3)'
        }
    }
});


const dark = createTheme({
    typography: {
        fontFamily: 'GoogleSans, EuclidCircularB, Aeonik, EuclidCircularA, DM Sans',
        fontSize: 16
    },
    shape: {
        borderRadius: 32
    },
    palette: {
        mode: 'dark',
        background: {
            paper: '#212121',
            default: 'rgba(127,185,243,0.1)'
        },
        primary: {
            main: '#212121'
        },
        secondary: {
            main: '#1ac0ea'
        },
        text: {
            primary: '#ffffff',
            secondary: 'rgba(141,141,141,0.7)'
        },
        light: {
            secondary: 'rgba(26,192,234,0.15)'
        }
    },
});

export const THEMES = {light, dark};
