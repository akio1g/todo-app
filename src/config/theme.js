import { createTheme } from '@mui/material';
export const themeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#b5a33f',
    },
    secondary: {
      main: '#598392',
    },
    background: {
      default: '#01161e',
      paper: '#01161e',
    },
    text: {
      primary: '#faf3dd',
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: 'Roboto',
  },
});