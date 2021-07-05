import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const victorMono = {
  fontFamily: 'VictorMono',
  src: `
    local('VictorMono Nerd Font Mono'),
    local('VictorMono Nerd Font Mono, SemiBold Italic'),
    url('/fonts/VictorMono-SemiBold-Italic.ttf') format('truetype')
  `,
};

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
        '@font-face': [victorMono as unknown],
        html: {
          WebkitFontSmoothing: 'auto',
        },
        body: {
        },
        '#__next': {
          height: '100vh',
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
