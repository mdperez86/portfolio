import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    font: {
      fontFamily: '"Ubuntu Mono", monospace',
      fontSize: 14,
    },
  }),
);
