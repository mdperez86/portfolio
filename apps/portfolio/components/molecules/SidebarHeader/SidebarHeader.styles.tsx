import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(4),
      background: 'linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%)',
    },
    avatarLarge: {
      width: theme.spacing(8),
      height: theme.spacing(8),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(12),
        height: theme.spacing(12),
      },
    },
  }),
);
