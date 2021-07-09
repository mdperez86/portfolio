import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      overflow: 'hidden',
      position: 'relative',
    },
    bgContainer: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    bgImage: {
      marginLeft: '-16px !important',
    },
    bgShadow: {
      top: 0,
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundImage: `linear-gradient(180deg, rgba(45, 45, 58, 0.6) 0%, rgba(45, 45, 58, 0.7) 50%, rgba(43, 43, 53, 0.7) 100%)`,
    },
    textRotate: {
      minHeight: '7rem',
      display: 'flex',
      alignItems: 'center',
    }
  }),
);