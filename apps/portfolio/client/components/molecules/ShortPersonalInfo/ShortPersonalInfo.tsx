import React, { Fragment, useEffect, useState } from 'react';
import { Box, Typography, Skeleton } from '@material-ui/core';
import axios from 'axios';

import { useTranslation } from '../../../hooks/useTranslation';
import { useStyles } from './ShortPersonalInfo.styles';

const calcAge = (birthday: Date | string) => {
  const birthdayDate = typeof birthday === 'string' ? new Date(birthday) : birthday;
  const ageDifMs = Date.now() - birthdayDate.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

type PersonalDataDTO = {
  country?: string;
  city?: string;
  birthday?: string;
  age?: number;
};

export const ShortPersonalInfo = (props: ShortPersonalInfoProps) => {
  const classes = useStyles();
  const t = useTranslation();

  const [personalInfo, setPersonalInfo] = useState<PersonalDataDTO>({
    country: null,
    city: null,
    age: null,
  });

  useEffect(() => {
    axios.get<PersonalDataDTO>('/api/personal/data').then(({ data }) => {
      const { birthday, country, city } = data;
      setPersonalInfo({
        country: t(`shortPersonalInfo.${country}.value`) as string,
        city: t(`shortPersonalInfo.${city}.value`) as string,
        age: calcAge(birthday),
      });
    }).catch((e) => {
      console.log(e);
      setPersonalInfo({});
    });
  }, []);

  console.log(personalInfo);

  return (
    <Box component="dl" className={classes.root}>
      {Object.entries(personalInfo).map(([key, value], index) => (
        <Fragment key={index}>
          <Typography component="dt" className={classes.dt} variant="caption">
            {t(`shortPersonalInfo.${key}.text`)}
          </Typography>
          {value ? (
            <Typography component="dd" className={classes.dd} variant="caption" color="textSecondary">
              {value}
            </Typography>
          ) : (
            <Skeleton width={48} height={19} />
          )}
        </Fragment>
      ))}
    </Box>
  );
};

type ShortPersonalInfoProps = {

};
