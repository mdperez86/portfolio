import React, { useEffect, useState } from 'react';
import { Box, Skeleton } from '@material-ui/core';
import axios from 'axios';

import { LinearProgressWithLabel } from '../LinearProgressWithLabel';

export const Top5Skills = (props: Top5SkillsProps) => {
  const [skills, setSkills] = useState(Array(5).fill(null));

  useEffect(() => {
    axios.get('/api/skills').then(({ data }) => {
      setSkills(data.map(({ name, avg }) => ({
        text: name,
        value: avg,
      })));
    }).catch(() => {
      setSkills([]);
    });
  }, []);

  return (
    <Box marginY={3} minHeight={200}>
      {skills.map((skill, index) => (
        skill ? 
          <LinearProgressWithLabel key={index} {...skill} /> : 
          <Skeleton key={index} variant="text" />
      ))}
    </Box>
  );
};

type Top5SkillsProps = {

};
