import React from 'react';
import { Box } from '@material-ui/core';

import { useStyles } from './SidebarHeader.styles';
import { Avatar } from '@material-ui/core';

export const SidebarHeader = (props: SidebarHeaderProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Avatar className={classes.avatarLarge} src="https://media-exp1.licdn.com/dms/image/C4E03AQGJIurfQHRIcw/profile-displayphoto-shrink_400_400/0/1579709821553?e=1630540800&v=beta&t=VgsmaRPpmLcCEn5zlMR7UuRhJiSRGIEmbE6O5mR2A1M" />
      <h4>Maikel David Perez Gomez</h4>
      <span>Software Engineer</span>
      <span>Web UI Develper</span>
    </Box>
  );
};

type SidebarHeaderProps = {
  children?: React.ReactNode;
};
