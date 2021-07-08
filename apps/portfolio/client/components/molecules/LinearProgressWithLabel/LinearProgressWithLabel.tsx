import React from 'react';
import { Box, LinearProgress, Typography } from '@material-ui/core';

import { useStyles } from './LinearProgressWithLabel.styles';

export const LinearProgressWithLabel = (props: LinearProgressWithLabelProps) => {
  const { text, value } = props;
  const classes = useStyles();

  return (
    <Box className={classes.root} mb={2}>
      <Box mb={.5} display="flex" justifyContent="space-between">
        <Typography variant="caption">
          {text}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {`${value}%`}
        </Typography>
      </Box>
      <Box>
        <LinearProgress 
          value={value}
          classes={{ colorSecondary: classes.colorSecondary }}
          color="secondary" 
          variant="determinate"
        />
      </Box>
    </Box>
  );
};

type LinearProgressWithLabelProps = {
  text?: string;
  value: number;
};
