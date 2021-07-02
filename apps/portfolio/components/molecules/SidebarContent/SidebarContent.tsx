import React from 'react';
import { Box, Divider, CircularProgress, Typography } from '@material-ui/core';

import { SpeakingLanguages } from '../SpeakingLanguages';

import { useStyles } from './SidebarContent.styles';

const calcAge = (birthday: Date) => {
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export const SidebarContent = (props: SidebarContentProps) => {
  const classes = useStyles();
  const age = calcAge(new Date(1986, 9, 20));

  return (
    <Box className={classes.root}>
      <dl>
        <dt>Residence:</dt><dd>Chile</dd>
        <dt>City:</dt><dd>Santiago</dd>
        <dt>Age:</dt><dd>{age}</dd>
      </dl>
      <Divider />
      <SpeakingLanguages />
      <Divider />
    </Box>
  );
};

type SidebarContentProps = {

};
