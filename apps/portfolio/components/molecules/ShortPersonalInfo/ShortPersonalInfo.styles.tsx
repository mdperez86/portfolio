import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 0,
      marginBottom: theme.spacing(3),
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    dt: {
      flexGrow: .5,
      flex: '0 0 auto',
      width: '50%',
    },
    dd: {
      flexGrow: .5,
      flex: '0 0 auto',
      width: '50%',
      textAlign: 'right',
    },
  }),
);
