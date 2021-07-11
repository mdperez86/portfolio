import React from 'react';
import { Box, Typography, Avatar, Skeleton } from '@material-ui/core';

import { usePersonalInfo } from '../../../hooks/usePersonalInfo';
import { useStyles } from './SidebarHeader.styles';

export const SidebarHeader = (props: SidebarHeaderProps) => {
  const classes = useStyles();
  const data = usePersonalInfo();

  return (
    <Box className={classes.root}>
      <Box marginBottom={2}>
        {
          data.avatar ? 
            <Avatar className={classes.avatarLarge} src={data.avatar} alt={data.name} /> :
            <Skeleton variant="circular" width={96} height={96} />
        }
      </Box>
      <Box marginBottom={1}>
        {
          data.name ? 
            <Typography component="h4" variant="subtitle2" align="center">{data.name}</Typography> :
            <Skeleton variant="text" width={200} height={21} />
        }
      </Box>
      {
        data.profession ? 
          <Typography component="span" variant="body2" color="textSecondary" align="center">{data.profession}</Typography> :
          <Skeleton variant="text" width={160} height={20} />
      }
      {
        data.occupation ? 
          <Typography component="span" variant="body2" color="textSecondary" align="center">{data.occupation}</Typography> :
          <Skeleton variant="text" width={160} height={20} />
      }
    </Box>
  );
};

type SidebarHeaderProps = {
};
