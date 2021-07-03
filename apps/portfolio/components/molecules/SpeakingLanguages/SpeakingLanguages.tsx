import React from 'react';
import { Box, Typography } from '@material-ui/core';

import { CircularProgressWithLabel } from '../CircularProgressWithLabel';
import { useTranslation } from '../../../hooks/useTranslation';

const speakingLanguages = [
  {
    name: 'locale.es-CL',
    value: 98,
  },
  {
    name: 'locale.en-US',
    value: 55,
  },
];

export const SpeakingLanguages = (props: SpeakingLanguagesProps) => {
  const t = useTranslation();

  return (
    <Box display="flex" justifyContent="space-around" marginY={3}>
      {speakingLanguages.map(({ name, value }, index) => (
        <Box key={index}>
          <CircularProgressWithLabel value={value} />
          <Typography 
            variant="caption" 
            component="div"
            align="center"
          >
            {t(name)}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

type SpeakingLanguagesProps = {

};
