import React from 'react';
import { Box, Typography, Avatar } from '@material-ui/core';

import { useStyles } from './SidebarHeader.styles';

export const SidebarHeader = (props: SidebarHeaderProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box marginBottom={2}>
        <Avatar className={classes.avatarLarge} src="https://media-exp1.licdn.com/dms/image/C4E03AQGJIurfQHRIcw/profile-displayphoto-shrink_400_400/0/1579709821553?e=1630540800&v=beta&t=VgsmaRPpmLcCEn5zlMR7UuRhJiSRGIEmbE6O5mR2A1M" />
      </Box>
      <Box marginBottom={1}>
        <Typography component="h4" variant="subtitle2" align="center">Maikel David Perez Gomez</Typography>
      </Box>
      <Typography component="span" variant="body2" color="textSecondary" align="center">Software Engineer</Typography>
      <Typography component="span" variant="body2" color="textSecondary" align="center">Web UI Develper</Typography>
    </Box>
  );
};

type SidebarHeaderProps = {
  children?: React.ReactNode;
};
