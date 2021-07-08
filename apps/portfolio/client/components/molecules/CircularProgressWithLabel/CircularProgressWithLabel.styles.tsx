import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    bottom: {
      // color: theme.palette.background.default,
    },
    top: {
      animationDuration: '550ms',
      position: 'absolute',
      left: 0,
    },
    circle: {},
  }),
);
