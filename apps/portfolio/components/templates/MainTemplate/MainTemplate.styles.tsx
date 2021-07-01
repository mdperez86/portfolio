import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      background: theme.palette.background.default,
      width: '100vw',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
    },
    main: {
      flexGrow: 1,
      paddingLeft: theme.spacing(2),
    }
  }),
);
