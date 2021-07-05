import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '80%',
      flexShrink: 0,
      [theme.breakpoints.up('sm')]: {
        position: 'relative',
        width: 290,
      },
    },
    paper: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      backgroundImage: 'none',
      justifyContent: 'space-between',
    },
    drawerPaper: {
      width: '80%',
      [theme.breakpoints.up('sm')]: {
        position: 'absolute',
        width: 290,
      },
    },
  }),
);
