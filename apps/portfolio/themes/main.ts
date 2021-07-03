import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const main = createMuiTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#20202a',
      dark: '#1e1e28',
    },
    secondary: {
      main: '#ffc107',
    },
    background: {
      default: '#191923',
      paper: '#20202a',
    },
    text: {
      primary: '#fafafc',
      secondary: '#8c8c8e',
    }
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
        backgroundImage: 'linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%)',
      },
    },
  },
});

export default responsiveFontSizes(main);
