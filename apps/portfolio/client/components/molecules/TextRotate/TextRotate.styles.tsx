import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    font: {
      fontFamily: '"VictorMono", monospace',
      fontSize: 14,
    },
  }),
);
