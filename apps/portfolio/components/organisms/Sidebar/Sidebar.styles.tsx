import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 290,
      [theme.breakpoints.up('md')]: {
        position: 'relative',
      },
    },
    paper: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      justifyContent: 'space-between',
    },
    drawerPaper: {
      [theme.breakpoints.up('md')]: {
        position: 'absolute',
        width: '100%',
      },
    },
  }),
);
