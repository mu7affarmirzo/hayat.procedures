import { createTheme } from '@mui/material';

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1400,
            xl: 1920,
        },
    },
    palette: {
        primary: {
            main: '#007DFF',
        },
        error: {
            main: '#F44336',
        },
        warning: {
            main: '#FF9800',
        },
        info: {
            main: '#2196F3',
        },
        success: {
            main: '#4CAF50',
        },
        background: {
            default: '#fff',
        },

        text: {
            primary: '#000',
            secondary: '#fff',
            disabled: '#fff',
        },
        action: {
            active: '#fff',
            hover: '#fff',
            selected: '#fff',
            disabled: '#fff',
            disabledBackground: '#fff',
        },

        divider: '#fff',

        grey: {
            50: '#fff',
            100: '#fff',
            200: '#fff',
            300: '#fff',
            400: '#fff',
            500: '#fff',
            600: '#fff',
            700: '#fff',
            800: '#fff',
            900: '#fff',
            A100: '#fff',
            A200: '#fff',
            A400: '#fff',
            A700: '#fff',
        },

        common: {
            black: '#000',
            white: '#fff',
        },
    },
});
