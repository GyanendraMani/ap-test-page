'use client';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface PaletteOptions {
    status?: {
      main?: string;
    };
    textColor?: {
      primary?: string;
      black?: string;
      faq?: string;
      brd?: string;
    }
  }
}

let theme = createTheme({
  palette: {
    primary: {
      main: '#D24241',
    },
    secondary: {
      main: 'rgb(15 23 42)',
    },
    text: {
      primary: '#fff',
      secondary: '#e5e7eb',
    },
    textColor: {
      primary: 'rgb(30 41 59)',
      black: '#000000',
      faq: 'rgb(71 85 105)',
      brd:  'rgb(71 85 105)'
    },
    status: {
      main: 'red'
    }
  },
  typography: {
    fontFamily: [
      'sans-serif',
    ].join(','),

    subtitle1: {
      fontWeight: '600',
    },
    button: {
      fontWeight: '600',
    }
  },
});

theme = responsiveFontSizes(theme);

export default theme;