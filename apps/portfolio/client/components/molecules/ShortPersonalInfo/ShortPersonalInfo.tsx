import React, { Fragment, useEffect, useState } from 'react';
import { Box, Typography, Skeleton } from '@material-ui/core';

import { useTranslation } from '../../../hooks/useTranslation';
import { usePersonalInfo } from '../../../hooks/usePersonalInfo';
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
  age?: number;
};

export const ShortPersonalInfo = (props: ShortPersonalInfoProps) => {
  const classes = useStyles();
  const t = useTranslation();
  const { country, city, birthday } = usePersonalInfo();

  const [info, setInfo] = useState<PersonalDataDTO>({
    country: null,
    city: null,
    age: null,
  });

  useEffect(() => {
    setInfo({
      country: country && t(`shortPersonalInfo.${country}.value`) as string,
      city: city && t(`shortPersonalInfo.${city}.value`) as string,
      age: birthday && calcAge(birthday),
    });
  }, [country, city, birthday]);

  return (
    <Box component="dl" className={classes.root}>
      {Object.entries(info).map(([key, value], index) => (
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

ShortPersonalInfo.defaultProps = {
  country: null,
  city: null,
  birthday: null,
};

type ShortPersonalInfoProps = {
  country?: string;
  city?: string;
  birthday?: string;
};
