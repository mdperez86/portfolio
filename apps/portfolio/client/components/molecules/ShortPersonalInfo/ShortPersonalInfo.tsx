import React, { Fragment } from 'react';
import { Box, Typography } from '@material-ui/core';

import { useStyles } from './ShortPersonalInfo.styles';
import { useTranslation } from '../../../hooks/useTranslation';

const calcAge = (birthday: Date) => {
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export const ShortPersonalInfo = (props: ShortPersonalInfoProps) => {
  const classes = useStyles();
  const t = useTranslation();

  const personalInfo = {
    residence: t('shortPersonalInfo.residence.value'),
    city: t('shortPersonalInfo.city.value'),
    age: calcAge(new Date(1986, 9, 20)),
  };

  return (
    <Box component="dl" className={classes.root}>
      {Object.entries(personalInfo).map(([key, value], index) => (
        <Fragment key={index}>
          <Typography component="dt" className={classes.dt} variant="caption">
            {t(`shortPersonalInfo.${key}.text`)}
          </Typography>
          <Typography component="dd" className={classes.dd} variant="caption" color="textSecondary">
            {value}
          </Typography>
        </Fragment>
      ))}
    </Box>
  );
};

type ShortPersonalInfoProps = {

};
