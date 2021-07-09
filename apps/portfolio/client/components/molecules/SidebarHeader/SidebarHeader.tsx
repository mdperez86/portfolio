import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar, Skeleton } from '@material-ui/core';
import axios from 'axios';

import { useStyles } from './SidebarHeader.styles';

type PersonalDataDTO = {
  avatar?: string;
  name?: string;
  profession?: string;
  occupation?: string;
};

export const SidebarHeader = (props: SidebarHeaderProps) => {
  const classes = useStyles();
  const [data, setData] = useState<PersonalDataDTO>({});

  useEffect(() => {
    axios.get<PersonalDataDTO>('/api/personal/data').then(({ data }) => {
      setData(data);
    }).catch(() => {
      setData({});
    });
  }, []);

  return (
    <Box className={classes.root}>
      <Box marginBottom={2}>
        {
          data.avatar ? 
            <Avatar className={classes.avatarLarge} src={data.avatar} /> :
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
