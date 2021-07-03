import React from 'react';
import Image from 'next/image';
import { Box, Typography, Card, Button } from '@material-ui/core';

import { useTranslation } from '../../../hooks/useTranslation';
import { useStyles } from './Heroe.styles';

export const Heroe = (props: HeroeProps) => {
  const { title } = props;

  const classes = useStyles();
  const t = useTranslation();

  return (
    <Card component="section" className={classes.root}>
      <Box className={classes.bgContainer}>
        <Image 
          className={classes.bgImage}
          src="/images/top-bg-02.jpg" 
          width={1200}
          height={640}
          layout="fixed"
          objectFit="cover"
          objectPosition="50% 60%"
        />
        <Box className={classes.bgShadow} />
      </Box>
      <Box p={6} position="relative">
        <Box display="flex" flexDirection="column" justifyItems="center">
          <Typography component="h1" variant="h3">
            {t(title)}
          </Typography>
          <Box>
            <Button variant="contained" color="secondary" disableElevation>
              Disable elevation
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

type HeroeProps = {
  title: string;
};
