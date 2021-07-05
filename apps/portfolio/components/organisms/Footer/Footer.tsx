import React from 'react';
import { Paper } from '@material-ui/core';

import { useStyles } from './Footer.styles';

export const Footer = (props: FooterProps) => {
  const classes = useStyles();

  return (
    <Paper component="footer" elevation={0} className={classes.root}>
      &copy; {new Date().getFullYear()} - MD
    </Paper>
  );
};

type FooterProps = {

};
