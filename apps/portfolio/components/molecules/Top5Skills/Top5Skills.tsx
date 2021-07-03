import React from 'react';
import { Box } from '@material-ui/core';

import { LinearProgressWithLabel } from '../LinearProgressWithLabel';

const skills = [
  { text: 'React', value: 90 },
  { text: 'NextJS', value: 90 },
  { text: 'Angular', value: 80 },
  { text: 'NestJS', value: 75 },
  { text: 'Express', value: 70 },
];

export const Top5Skills = (props: Top5SkillsProps) => {
  return (
    <Box marginY={3}>
      {skills.map((skill, index) => (
        <LinearProgressWithLabel key={index} {...skill} />
      ))}
    </Box>
  );
};

type Top5SkillsProps = {

};
