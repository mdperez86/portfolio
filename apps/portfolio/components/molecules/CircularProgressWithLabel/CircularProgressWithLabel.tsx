import React from 'react';
import { Box, CircularProgress, Typography } from '@material-ui/core';

import { useStyles } from './CircularProgressWithLabel.styles';

export const CircularProgressWithLabel = (props: CircularProgressWithLabelProps) => {
  const {value} = props;
  const classes = useStyles();

  return (
    <Box 
      className={classes.root} 
      position="relative" 
      display="inline-flex"
    >
      <CircularProgress 
        className={classes.bottom}
        value={100}
        size={48}
        variant="determinate"
      />
      <CircularProgress 
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        value={value}
        size={48}
        color="secondary" 
        variant="determinate" 
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">
          {`${value}%`}
        </Typography>
      </Box>
    </Box>
  );
};

type CircularProgressWithLabelProps = {
  value: number;
};
