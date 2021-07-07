import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      overflow: 'hidden',
      paddingTop: theme.spacing(7),
      paddingLeft: 0,
      paddingRight: 0,
      height: '100%',
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(2),
        marginTop: 0,
      },
    },
    paper: {
      position: 'relative',
      overflow: 'hidden',
      background: theme.palette.primary.dark,
      display: 'flex',
      width: '100%',
      height: '100%',
    },
    wrapper: {
      position: 'relative',
      overflowX: 'hidden',
      overflowY: 'auto',
      // height: '100vh',
      [theme.breakpoints.up('sm')]: {
        height: '100%',
      },
    },
    bgContainer: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
    },
    bgShadow: {
      top: 0,
      position: 'absolute',
      width: '110%',
      height: '110%',
      backgroundImage: `linear-gradient(180deg, rgba(30, 30, 40, 0.63) 0%, rgba(30, 30, 40, 0.96) 50%, rgba(30, 30, 40, 1) 60%, ${theme.palette.primary.dark} 100%)`,
    },
    main: {
      position: 'relative',
      padding: theme.spacing(2),
    },
  }),
);
