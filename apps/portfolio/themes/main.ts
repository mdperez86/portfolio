import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { blueGrey, amber } from '@material-ui/core/colors';

const victorMono = {
  fontFamily: 'VictorMono',
  src: `
    local('VictorMono Nerd Font Mono'),
    local('VictorMono Nerd Font Mono, SemiBold Italic'),
    url('/fonts/VictorMono-SemiBold-Italic.ttf') format('truetype')
  `,
};

const main = createTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
  palette: {
    mode: 'dark',
    primary: {
      main: blueGrey[900],
    },
    secondary: {
      main: amber[500],
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': [victorMono],
        html: {
          WebkitFontSmoothing: 'auto',
        },
        '#__next': {
          height: '100vh',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paperAnchorDockedLeft: {
          borderRight: 0,
        },
      },
    },
  },
});

export default responsiveFontSizes(main);
