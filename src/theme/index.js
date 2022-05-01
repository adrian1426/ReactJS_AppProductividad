import { createTheme } from '@mui/material/styles';

export const colorPrimary = '#06113C';
export const colorSecondary = '#FF8C32';
export const colorCommonBlack = '#DDDDDD';
export const colorCommonWhite = '#EEEEEE';

const theme = createTheme({
  palette: {
    primary: {
      main: colorPrimary,
      contrastText: colorCommonWhite
    },
    secondary: {
      main: colorSecondary,
      contrastText: colorCommonWhite
    },
    common: {
      white: colorCommonWhite,
      black: colorCommonBlack
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});

export default theme;