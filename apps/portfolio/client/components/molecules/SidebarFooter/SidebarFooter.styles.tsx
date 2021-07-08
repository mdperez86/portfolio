import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      minHeight: 50,
      justifyContent: 'space-around',
      padding: theme.spacing(1.5),
    },
  }),
);
