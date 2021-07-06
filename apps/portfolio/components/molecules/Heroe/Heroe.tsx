import React from 'react';
import Image from 'next/image';
import { Box, Typography, Card, Button, Hidden } from '@material-ui/core';

import { useTranslation } from '../../../hooks/useTranslation';
import { LocaleMenu } from '../LocaleMenu';
import { TextRotate } from '../TextRotate';
import { useStyles } from './Heroe.styles';

export const Heroe = (props: HeroeProps) => {
  const { title } = props;

  const classes = useStyles();
  const t = useTranslation();

  const rotationTexts = [0, 1, 2, 3].map((item) => {
    return t(`heore.rotate.${item}.text`) as string;
  });

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
          objectPosition="50% 100%"
        />
        <Box className={classes.bgShadow} />
      </Box>
      <Box p={6} position="relative">
        <Hidden xsDown>
          <Box position="absolute" top="0" right="1rem">
            <LocaleMenu id="locale-menu" />
          </Box>
        </Hidden>
        <Box display="flex" flexDirection="column" justifyItems="center">
          <Typography component="h1" variant="h3">
            {t(title)}
          </Typography>
          <Box className={classes.textRotate}>
            <TextRotate rotate={rotationTexts} />
          </Box>
          <Box>
            <Button href="#portfolio" variant="contained" color="secondary" size="large" disableElevation>
              {t('heore.button.explore.text')}
            </Button>{' '}
            <Button href={`#${t('hireForm.title')}`} color="secondary" size="large">
              {t('heore.button.hire.text')} {'->'}
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
