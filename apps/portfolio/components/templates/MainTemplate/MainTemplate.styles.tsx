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
        height: '100%',
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
    bgContainer: {
      position: 'absolute',
      width: '100%',
      height: 640,
    },
    bgShadow: {
      top: 0,
      position: 'absolute',
      width: '100%',
      height: 640,
      backgroundImage: `linear-gradient(180deg, rgba(30, 30, 40, 0.63) 0%, rgba(30, 30, 40, 0.96) 70%, rgba(30, 30, 40, 0.99) 80%, ${theme.palette.primary.dark} 100%)`,
    },
    main: {
      zIndex: 1,
      flexGrow: 1,
      padding: theme.spacing(2),
      boxShadow: '0 3px 8px 0 rgb(15 15 20 / 20%)',
    },
  }),
);
