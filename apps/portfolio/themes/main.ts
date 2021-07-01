import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const main = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#20202a',
    },
    secondary: {
      main: '#ffc107',
    },
    background: {
      default: '#191923',
      paper: '#8c8c8e',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
          height: '100%',
        },
        body: {
          height: '100%',
        },
        '#__next': {
          height: '100%',
        },
      },
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRight: 0,
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: '#20202a',
        boxShadow: '0 3px 8px 0 rgb(15 15 20 / 20%)',
      },
    },
  },
});

export default responsiveFontSizes(main);
