import React, { useEffect, useState } from 'react';
import { Box, Skeleton, Typography } from '@material-ui/core';
import axios from 'axios';

import { useTranslation } from '../../../hooks/useTranslation';
import { CircularProgressWithLabel } from '../CircularProgressWithLabel';

export const SpeakingLanguages = (props: SpeakingLanguagesProps) => {
  const t = useTranslation();
  const [speakingLanguages, setSpeakingLanguages] = useState(Array(2).fill({ value: 0 }));

  useEffect(() => {
    axios.get('/api/speaking-languages').then(({ data }) => {
      setSpeakingLanguages(data.map(({ name, value }) => ({
        name: name && `language.${name}.name`,
        value,
      })));
    }).catch(() => {
      setSpeakingLanguages([]);
    });
  }, []);

  return (
    <Box display="flex" justifyContent="space-around" marginY={3}>
      {speakingLanguages.map(({ name, value }, index) => (
        <Box key={index}>
          <CircularProgressWithLabel value={value} />
          {name ? (
            <Typography 
              variant="caption" 
              component="div"
              align="center"
            >
              {t(name)}
            </Typography>
          ) : (
            <Skeleton height={20} />
          )}
        </Box>
      ))}
    </Box>
  );
};

type SpeakingLanguagesProps = {

};
