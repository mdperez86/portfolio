import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(4),
    },
    avatarLarge: {
      width: theme.spacing(8),
      height: theme.spacing(8),
      [theme.breakpoints.up('md')]: {
        width: theme.spacing(12),
        height: theme.spacing(12),
      },
    },
  }),
);
