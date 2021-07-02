import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    bottom: {
      color: theme.palette.background.default,
    },
    top: {
      animationDuration: '550ms',
      position: 'absolute',
      left: 0,
    },
    circle: {},
  }),
);
