import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    colorSecondary: {
      backgroundColor: theme.palette.background.default,
    },
  }),
);
